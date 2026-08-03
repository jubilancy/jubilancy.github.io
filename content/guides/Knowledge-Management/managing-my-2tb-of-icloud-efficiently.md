---
tags:
  - guides
---
### **Managing the 2TB iCloud Sync**

Because these files are in your `CloudDocs` folder, macOS is likely already uploading them to your **2TB iCloud** storage.

1. **Wait for Upload**: Look for the small progress circle in **Finder** next to the folder name.
    
2. **Free up Local Space**: Once the circle disappears, right-click the `iMessageExports` folder and select **"Remove Download"**.
    
3. **The Result**: The **22.43 MB** (and any future larger exports) will disappear from your **MacBook's** local SSD but remain fully accessible in the cloud.


# Mac export

To export mail attachments from the Mail app on your Mac and store or download them (for example, to iCloud Drive), follow these steps:

## How to Export Mail Attachments

1. **Open the Mail app** on your Mac.
2. **Locate the email** with the attachment(s) you want to export.
3. Click the **attachment icon** inside the email (you can Command-click to select multiple attachments in one message).
4. **Right-click** the attachment, then choose **“Save Attachment…”**.
5. In the save dialog, select **iCloud Drive** as the destination (or any local folder if you plan to move it later).
6. Click **Save**.

## Batch Export (for Multiple Attachments)

- Select multiple emails in Mail.
- In the menu, go to **File > Save Attachments**.
- Choose **iCloud Drive** (or another destination).
- All selected attachments will be downloaded and saved to your chosen folder.

**Tip:** You can then manage these exported files directly in iCloud Drive via Finder, making them accessible across your devices and freeing up local Mail storage. If you want to remove them from Mail afterwards, you can delete the original messages or use the “Remove Attachments” command from the message menu.  
Let me know if you need steps for another mail app or for archiving whole mailboxes!  
To archive entire mailboxes in the Mail app on your Mac and free up storage, follow these steps:

## How to Archive Mailboxes in Mail (macOS Sonoma)

1. **Open the Mail app** on your Mac.
2. In the sidebar, **select the mailbox** (folder) you want to archive—such as Inbox, Sent, or any custom mailbox.
3. Click the **Mailbox** menu at the top, then select **Export Mailbox…**.
4. Choose a location to save the archive—select **iCloud Drive** or any folder (you can move it to iCloud Drive later).
5. Click **Choose** to export.
    - This creates an `.mbox` file containing all messages and attachments from that mailbox.

## After Archiving

- You can delete the archived messages from Mail to free up local space.
- Archived mailboxes can be imported back into Mail or opened on another Mac at any time.
- Storing the `.mbox` file in iCloud Drive keeps it accessible but offloads it from your local disk.

**Tip:** Always make sure the export completed successfully before deleting mail or attachments from your Mail app. Let me know if you need help restoring or accessing these archives in the future!  
If Mail created a file called **INBOX.partial.mbox** instead of the usual **INBOX.mbox**, it means the export was interrupted or did not complete successfully. This can happen if:[apple](<https://support.apple.com/en-us/102624>)​

- The mailbox is very large and your disk is nearly full, causing Mail to pause or fail midway.
- Your Mac ran out of application memory or storage during the process.
- There was a temporary connectivity issue if the mailbox includes messages not fully downloaded from the server.

## What to Do

- Make sure you have enough free disk space before exporting large mailboxes—free up at least several GB first.[apple+1](<https://support.apple.com/guide/mac-help/optimize-storage-space-sysp4ee93ca4/mac>)​
- Try exporting the mailbox again: in Mail, select the mailbox and use **Mailbox > Export Mailbox…**.
- If it happens repeatedly, export smaller mailboxes or split the mailbox into subfolders and export those one at a time.

**Tip:** Only consider your `.mbox` archive complete and safe to delete locally after you get a normal filename (like `INBOX.mbox`) and can open it in Finder with a reasonable file size. If you keep seeing `.partial`, avoid deleting anything from Mail until you’ve fully exported your data.

1. [https://support.apple.com/en-us/102624](<https://support.apple.com/en-us/102624>)
2. [https://support.apple.com/guide/mac-help/optimize-storage-space-sysp4ee93ca4/mac](<https://support.apple.com/guide/mac-help/optimize-storage-space-sysp4ee93ca4/mac>)

To split a large mailbox into smaller subfolders in Mail on your Mac and export them one at a time:

## How to Create Subfolders in Mail

1. Open the **Mail app**.
2. In the sidebar, **right-click the mailbox** you want to split (e.g., Inbox).
3. Choose **New Mailbox**.
4. In the dialog, set the **location to be inside the mailbox you want to split** (e.g., inside Inbox).
5. Name the new mailbox folder something like "Inbox Part 1" or a descriptive name.
6. Repeat to create as many subfolders as you need.

## How to Move Emails to Subfolders

1. Select a range of emails in the big mailbox (use Shift-click or Command-click to select multiple).
2. Drag the selected emails into the new subfolder mailbox.
3. Repeat until you have reasonably sized mail collections in each subfolder.

## Export These Smaller Mailboxes Separately

- Now, select each subfolder mailbox one by one.
- Use **Mailbox > Export Mailbox…** to export each smaller collection separately.

This method prevents Mail from crashing or creating partial exports due to oversized mailbox exports and ensures more manageable archive files. Let me know if you want step-by-step visuals or further tips!  
  
  
  


