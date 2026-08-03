---
tags:
  - new-clippings
  - guide
---
Title: Build a file sharing service without making your brain hurt

URL Source: https://fly.io/javascript-journal/soar-file-sharing/

Markdown Content:
# Build a file sharing service without making your brain hurt · The JavaScript Journal
[](https://fly.io/)[](https://fly.io/javascript-journal/)

[**Need a Logo?** View Our Brand Assets](https://fly.io/docs/about/brand/)

Open main menu

 Articles [Blog](https://fly.io/blog/)[Infra Log](https://fly.io/infra-log/)[Phoenix Files](https://fly.io/phoenix-files/)[Laravel Bytes](https://fly.io/laravel-bytes/)[Ruby Dispatch](https://fly.io/ruby-dispatch/)[Django Beats](https://fly.io/django-beats/)[JavaScript Journal](https://fly.io/javascript-journal/)[Security](https://fly.io/security/)[Customers](https://fly.io/customer-stories/)[Docs](https://fly.io/docs/)[Community](https://community.fly.io/)[Status](https://status.flyio.net/)[Pricing](https://fly.io/pricing/)

[Sign In](https://fly.io/app/sign-in)[Get Started](https://fly.io/docs/hands-on/start/)[RSS Feed](https://fly.io/javascript-journal/feed.xml)

[Blog](https://fly.io/blog/)[Infra Log](https://fly.io/infra-log/)[Phoenix Files](https://fly.io/phoenix-files/)[Laravel Bytes](https://fly.io/laravel-bytes/)[Ruby Dispatch](https://fly.io/ruby-dispatch/)[Django Beats](https://fly.io/django-beats/)[JavaScript Journal](https://fly.io/javascript-journal/)[Security](https://fly.io/security/)[Customers](https://fly.io/customer-stories/)[Docs](https://fly.io/docs/)[Community (opens an external site)](https://community.fly.io/)[Status (opens an external site)](https://status.flyio.net/)[Pricing](https://fly.io/pricing/)[Sign In](https://fly.io/app/sign-in)[Get Started](https://fly.io/docs/hands-on/start/)[RSS Feed](https://fly.io/javascript-journal/feed.xml)

 Reading time • 9 min [Share this post on Twitter](https://twitter.com/share?text=Build%20a%20file%20sharing%20service%20without%20making%20your%20brain%20hurt&url=https://fly.io/javascript-journal/soar-file-sharing/&via=flydotio)[Share this post on Hacker News](http://news.ycombinator.com/submitlink?u=https://fly.io/javascript-journal/soar-file-sharing/&t=Build%20a%20file%20sharing%20service%20without%20making%20your%20brain%20hurt)[Share this post on Reddit](http://www.reddit.com/submit?url=https://fly.io/javascript-journal/soar-file-sharing/&title=Build%20a%20file%20sharing%20service%20without%20making%20your%20brain%20hurt)

# Build a file sharing service without making your brain hurt

Author![Image 1: Jesse Thompson](https://fly.io/static/images/jesse.webp)Name Jesse Thompson ![Image 2: A purple hot air balloon soaring through the sky.](https://fly.io/javascript-journal/soar-file-sharing/assets/soar-file-sharing-cover.webp)

Image by[Annie Ruygt](https://annieruygtillustration.com/)

We’re Fly.io. We make hard things easy, including deploying your apps around the world, close to your users. This post is about scaling a file sharing app using Fly.io and Tigris.

I’m a pretty online person, and I have friends all around the world. We tend to do things like share mod files and video replays pretty frequently, and this creates issues when the >5 GB file someone just uploaded in Poland needs to be downloaded in Canada.

Most if not all messaging services will have this problem, uploads go either to a local storage backend to the uploader, which makes reads slow anywhere else, or they go to the big bucket in Virginia and everything is slow for everyone.

This sort of thing is annoying enough that I’ve wanted a better solution for a while: a simple file sharing service that is fast for everyone, no matter who’s sending what to who.

I’ve tried to solve this problem before. I’ve looked at using off-the-shelf solutions, but I’ve found them either [too](https://docs.ceph.com/en/latest/cephadm/install/)[complex](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html) or too simple, and so I had the itch to DIY it so I can control the implementation.

The must-have list for the new service:

*   Uploads and downloads to be fast regardless of who is sharing to who, this means handling files moving across oceans easily. 
*   Some control over access, and the ability to add features easily. 
*   Reasonable fault tolerance, we don’t need enterprise HA but not someone’s home server either 

To achieve those goals, I’ve resurrected this idea with the ensemble cast of Tigris, Fly.io and SvelteKit, which are some of my favourite tools that help me make complex stuff without turning my brain into goo.

SvelteKit makes the frontend a breeze with easy HTML form handling and SSR out of the box, and Fly.io and Tigris give me global object storage on demand and compute to match.

So, how can Fly.io, Tigris and SvelteKit make this hard thing easy?

## [](https://fly.io/javascript-journal/soar-file-sharing/#building-soar)Building Soar

I’ve dubbed the file sharing service “Soar”, just to give it a bit of personality.

Soar is a pretty tiny full-stack SvelteKit app, only about 100 lines of important code. It takes user uploads via a normal HTML form, processes them in a SvelteKit form action, and returns info about the uploaded file to the user.

### [](https://fly.io/javascript-journal/soar-file-sharing/#step-0-setting-up-a-sveltekit-project)Step 0: Setting up a SvelteKit project

I’m using [Bun](https://bun.sh/) for this project’s package manager, but you could swap in `npm`, `pnpm`, `yarn`, or whatever instead.

 Wrap text  Copy to clipboard 

```
# Create the project
$ bun create svelte@latest my-app

# Install dependencies
$ cd my-app
$ bun install

# Run the dev server
$ bun --bun run dev
```

### [](https://fly.io/javascript-journal/soar-file-sharing/#step-1-uploading-files-to-tigris)Step 1: Uploading files to Tigris

The first half of a file sharing service is getting stuff from users’ computers into the storage backend.

There’s a few approaches we could take here, but we’re going to go with running the file uploads through the SvelteKit server, which keeps the client lean and means it works pre-hydration (it uses normal browser forms).

We can start by adding storage to our app, which we can do right from the flyctl CLI.

 Wrap text  Copy to clipboard 

```
fly storage create
```

Name this something like “soar-dev” since we’re going to use a different bucket for our deployment later.

And we put our credentials into a file called `.env.development` in our project root.

 Wrap text  Copy to clipboard 

```
AWS_REGION="auto"
AWS_ENDPOINT_URL_S3="https://fly.storage.tigris.dev" # or a local S3 server
AWS_ACCESS_KEY_ID="..."
AWS_SECRET_ACCESS_KEY="..."
BUCKET_NAME="soar" # This is the name of our Tigris storage bucket
```

Now, let’s get to building.

#### [](https://fly.io/javascript-journal/soar-file-sharing/#s3-client)S3 Client

We need to pull in the AWS S3 SDK to use the S3 API from our code:

 Wrap text  Copy to clipboard 

```
# Install the aws-sdk packages we're going to use
$ bun add --dev @aws-sdk/client-s3 @aws-sdk/lib-storage @aws-sdk/s3-request-presigner nanoid
```

Then we can use our credentials to create an S3 client for our server code to use later:

`/src/lib/storage.ts`

 Wrap text  Copy to clipboard 

```
import { env } from "$env/dynamic/private";
import { S3Client } from "@aws-sdk/client-s3";

export const S3 = new S3Client({
  region: env.AWS_REGION,
  endpoint: env.AWS_ENDPOINT_URL_S3,
  credentials: {
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
  },
  forcePathStyle: true,
});
```

#### [](https://fly.io/javascript-journal/soar-file-sharing/#upload-ui)Upload UI

This is made easy by Svelte’s similarity to HTML, we just plop down an HTML form with some props set to make it all work once we go to the server side.

*   `action="?/upload"` is a bit of SvelteKit magic that routes our form submit to a particular handler. 
*   `enctype="multipart/form-data"` is HTML spec magic speak for “upload the whole file instead of just the name” 
*   `use:enhance` is a Svelte action that makes the form submit smoother (no page reload) when JS is available. 

`/src/routes/+page.svelte`

 Wrap text  Copy to clipboard 

```
<script lang="ts">
  const { form } = $props();
  import { enhance } from "$app/forms";

  let loading = $state(false);

  function submit() {
    loading = true;

    return async ({ update }) => {
      await update();
      loading = false;
    };
  }
</script>

<h1>Welcome to Soar</h1>

<form
  action="?/upload"
  method="post"
  enctype="multipart/form-data"
  use:enhance={submit}
>
  <input type="file" name="file" />

  <div>
    {#if loading} uploading... {:else if form?.error}
    <span>An error occured: {form.message}</span>
    {/if}
  </div>

  <button disabled="{loading}" type="submit">submit</button>
</form>
```

#### [](https://fly.io/javascript-journal/soar-file-sharing/#and-on-the-server)And on the server…

This is a little more complex, but all we’re doing here is using the special SvelteKit export `actions` to handle the aforementioned `?/upload` action.

 Wrap text  Copy to clipboard 

```
export const actions: Actions = {
    async upload(e) {
        ...
    }
};
```

We pull the file out of the form data:

 Wrap text  Copy to clipboard 

```
const data = await e.request.formData();
const file = data.get("file") as File;
```

Do a little check that it’s actually there:

 Wrap text  Copy to clipboard 

```
if (!file.name || file.name == "undefined") {
  return fail(500, { error: true, message: "You must provide a file" });
}
```

Then upload it to S3 using the client we created earlier.

 Wrap text  Copy to clipboard 

```
const key = nanoid() + "_" + file.name;

const upload = new Upload({
  params: {
    Bucket: env.BUCKET_NAME,
    Key: key,
    Body: file,
    ContentType: file.type,
  },
  client: S3, // Imported from $lib/server/storage
});

await upload.done();
```

And finally, redirect the user to the uploaded file.

 Wrap text  Copy to clipboard 

```
redirect(303, `/${key}`);
```

And, uploading works!

The magic Tigris provides us here is when we scale our SvelteKit app to new regions, Tigris is already there, ready to go. We don’t have to pay more or do anything at all. We automatically get our uploads going from user -> our app -> Tigris in the [nearest region](https://www.tigrisdata.com/docs/concepts/regions/). This lowers latency, improves bandwidth and reliability by eliminating possible bottlenecks.

We _could_ make the uploads even more direct by using [presigned URLs](https://www.tigrisdata.com/docs/objects/presigned/) but it complicates the code by requiring a two-step upload process.

### [](https://fly.io/javascript-journal/soar-file-sharing/#step-2-retrieving-files-from-tigris-and-displaying-them-to-the-user)Step 2: Retrieving files from Tigris and displaying them to the user

Now that we’ve uploaded a bunch of cat photos, mod files and database credentials to our service, we need a way to retrieve uploaded objects.

This is similarly easy, and we can do most of the work server-side with a load function inside `+page.server.ts`:

 Wrap text  Copy to clipboard 

```
export async function load(e) {
  const metadata = await S3.send(
    new HeadObjectCommand({ Bucket: env.BUCKET_NAME, Key: e.params.file })
  );

  const url = await getSignedUrl(
    S3,
    new GetObjectCommand({ Bucket: env.BUCKET_NAME, Key: e.params.file }),
    {
      expiresIn: 3600,
    }
  );

  return { url, metadata };
}
```

We grab the metadata of the object, create a pre-signed URL for accessing the file contents, and send it off to our future selves in frontend-land.

This all runs on the server, which means we can implement authorization checks or rate limits or whatever else here. Unlike uploads, we use pre-signed URLs here so users are always pulling the file from the closest Tigris region.

Alternatively, we could proxy the body of the object through our app. This would offer stronger authorization guarantees, but would mean users would retrieve the potentially large file through the closest instance of our app, not necessarily the closest Tigris region.

A little sprinkle of frontend, and we have working file retrieval!

 Wrap text  Copy to clipboard 

```
<script lang="ts">
    const { data } = $props();

    const embedType = data.metadata.ContentType?.split('/')[0];
</script>

{#if embedType == 'image'}
    <img class="block" src={data.url}" />
{:else if embedType == 'video'}
    <video class="block" src={data.url}></video>
{/if}

<a href={data.url}>raw</a>
```

This is a happy middle ground between making the bucket public and proxying uploads through the SvelteKit app. It gives us the benefits of serving the files directly from Tigris, while retaining most of the control over who can access what.

When users request a file, Tigris will do the right thing automatically. If an object is requested in a different region than the one it was uploaded to, the file will transparently be copied to that region when it is requested, making subsequent access as fast as the region where it was initially uploaded.

This is sometimes referred to as “Pull-through” caching. [Tigris actually supports caching on put and caching on list as well](https://www.tigrisdata.com/docs/objects/caching/).

### [](https://fly.io/javascript-journal/soar-file-sharing/#step-3-wheres-the-rest-of-the-code)Step 3: Where’s the rest of the code?

When I got to this point, I was left with a bit of wonder at how quickly everything comes together with today’s “magic” tooling. SvelteKit handles the frontend, data loading, uploading and storing with no fuss, Tigris just does the right thing without us telling it to, and getting it ready to deploy on Fly.io happens pretty much automatically.

Ship it!

Currently, you have to swap out `adapter-auto` for [`adapter-node`](https://kit.svelte.dev/docs/adapter-node) in `svelte.config.js` manually before you can deploy to Fly.io. We’re working on making this easier in the future.

 Wrap text  Copy to clipboard 

```
$ fly launch --no-deploy
$ fly storage create # Production bucket
$ fly deploy
```

Scale it…

 Wrap text  Copy to clipboard 

```
$ fly scale count 3 --region ewr,waw,lhr
```

## [](https://fly.io/javascript-journal/soar-file-sharing/#what-comes-next)What comes next

For me, not much. This project exists only as a KISS file uploader for me and a few of my friends. For you, there’s a few directions we could take this:

*   **Add an accounts system to namespace and track previous uploads**

 We could add this functionality if you wanted to offer a sort of “index” for a given uploader, maybe with public / private files. 
*   **Build an API for uploading objects**

 We could use this to integrate with image/file sharing applications like ShareX, or build a CLI uploader. 

For more interesting things to do with Tigris and Fly, check out these articles:

*   [Globally Distributed Object Storage with Tigris](https://fly.io/blog/tigris-public-beta/)
*   [Multi-tenant apps with single-tenant SQLite databases in global Tigris buckets](https://fly.io/javascript-journal/single-tenant-sqlite-in-tigris/)
*   [What if S3 could be a fast, globally synced, Key Value Database? That’s Tigris](https://fly.io/phoenix-files/what-if-s3-could-be-a-fast-globally-synced-key-value-database-that-s-tigris/)

 Last updated • May 23, 2024 [Share this post on Twitter](https://twitter.com/share?text=Build%20a%20file%20sharing%20service%20without%20making%20your%20brain%20hurt&url=https://fly.io/javascript-journal/soar-file-sharing/&via=flydotio)[Share this post on Hacker News](http://news.ycombinator.com/submitlink?u=https://fly.io/javascript-journal/soar-file-sharing/&t=Build%20a%20file%20sharing%20service%20without%20making%20your%20brain%20hurt)[Share this post on Reddit](http://www.reddit.com/submit?url=https://fly.io/javascript-journal/soar-file-sharing/&title=Build%20a%20file%20sharing%20service%20without%20making%20your%20brain%20hurt)

Author![Image 3: Jesse Thompson](https://fly.io/static/images/jesse.webp)Name Jesse Thompson  Next post ↑ [Using WebSockets with Next.js on Fly.io](https://fly.io/javascript-journal/websockets-with-nextjs/) Previous post ↓ [Multi-tenant apps with single-tenant SQLite databases in global Tigris buckets](https://fly.io/javascript-journal/single-tenant-sqlite-in-tigris/)

 Next post ↑ [Using WebSockets with Next.js on Fly.io](https://fly.io/javascript-journal/websockets-with-nextjs/) Previous post ↓ [Multi-tenant apps with single-tenant SQLite databases in global Tigris buckets](https://fly.io/javascript-journal/single-tenant-sqlite-in-tigris/)

[](https://fly.io/)

Company[About](https://fly.io/about/)[Pricing](https://fly.io/pricing/)[Jobs](https://fly.io/jobs/)Articles[Blog](https://fly.io/blog/)[Infra Log](https://fly.io/infra-log/)[Phoenix Files](https://fly.io/phoenix-files/)[Laravel Bytes](https://fly.io/laravel-bytes/)[Ruby Dispatch](https://fly.io/ruby-dispatch/)[Django Beats](https://fly.io/django-beats/)[JavaScript Journal](https://fly.io/javascript-journal/)Resources[Docs](https://fly.io/docs/)[Support](https://fly.io/docs/support/)[Support Metrics](https://fly.io/support/)[Status](https://status.flyio.net/)Contact[GitHub](https://github.com/superfly/)[Twitter](https://twitter.com/flydotio)[Community](https://community.fly.io/)Legal[Security](https://fly.io/docs/security/)[Privacy policy](https://fly.io/legal/privacy-policy)[Terms of service](https://fly.io/legal/terms-of-service)[Acceptable Use Policy](https://fly.io/legal/acceptable-use-policy)

Copyright © 2026 Fly.io
