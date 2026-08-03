# Social Media Badges

## Basic Badges (Simple Links)

Replace `username` with your actual handle and `profile-url` with your profile link.

### Popular Platforms

```markdown
[![Last.fm](https://img.shields.io/badge/Last.fm-D51007?style=for-the-badge&logo=lastdotfm&logoColor=white)](https://www.last.fm/user/funnyprettynice)

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/jubilancy)

[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/funnyprettynice)

[![Mastodon](https://img.shields.io/badge/Mastodon-6364FF?style=for-the-badge&logo=mastodon&logoColor=white)](https://mastodon.world/@eliana)

[![Bluesky](https://img.shields.io/badge/Bluesky-1285FE?style=for-the-badge&logo=bluesky&logoColor=white)](https://bsky.app/profile/el.bsky.to)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/etamr)

[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/@funnyprettynice)

[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/et4mr)

[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:eliana@32bit.cafe)

[![Website](https://img.shields.io/badge/Website-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://eliana.lol)
```

---

## Pre-configured Examples

### Your Known Profiles

```markdown
[![Last.fm](https://img.shields.io/badge/Last.fm-D51007?style=for-the-badge&logo=lastdotfm&logoColor=white)](https://www.last.fm/user/funnyprettynice)

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/jubilancy)
```

---

## Style Variations

### Flat Style
```markdown
[![Last.fm](https://img.shields.io/badge/Last.fm-D51007?style=flat&logo=lastdotfm&logoColor=white)](https://www.last.fm/user/username)
```

### Flat Square Style
```markdown
[![Last.fm](https://img.shields.io/badge/Last.fm-D51007?style=flat-square&logo=lastdotfm&logoColor=white)](https://www.last.fm/user/username)
```

### Plastic Style
```markdown
[![Last.fm](https://img.shields.io/badge/Last.fm-D51007?style=plastic&logo=lastdotfm&logoColor=white)](https://www.last.fm/user/username)
```

### Social Style (Large)
```markdown
[![Last.fm](https://img.shields.io/badge/Last.fm-D51007?style=social&logo=lastdotfm&logoColor=white)](https://www.last.fm/user/username)
```

---

## Custom Colors & Styling

Modify the color codes in the URL:
- `?color=hexcode` → Change badge background
- `&label=custom` → Change label text
- `&labelColor=hexcode` → Change label background

### Example: Custom Purple Theme
```markdown
[![Last.fm](https://img.shields.io/badge/Last.fm-9D4EDD?style=for-the-badge&logo=lastdotfm&logoColor=white&labelColor=5A189A)](https://www.last.fm/user/username)
```

---

## Shields.io Reference

All badges are built with [shields.io](https://shields.io/). You can:
- Browse available logos at [simpleicons.org](https://simpleicons.org/)
- Create custom badges at [shields.io](https://shields.io/)
- Use any hex color code for customization

**Basic URL structure:**
```
https://img.shields.io/badge/[LABEL]-[COLOR]?style=[STYLE]&logo=[LOGO]&logoColor=[LOGOCOLOR]
```

---

## Quick Implementation

### Markdown:
```markdown
[![Last.fm](https://img.shields.io/badge/Last.fm-D51007?style=for-the-badge&logo=lastdotfm&logoColor=white)](https://www.last.fm/user/funnyprettynice)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/jubilancy)
```

### HTML (for more control):
```html
<a href="https://www.last.fm/user/funnyprettynice">
  <img src="https://img.shields.io/badge/Last.fm-D51007?style=for-the-badge&logo=lastdotfm&logoColor=white" alt="Last.fm">
</a>
```

---

## Tips

- **Consistency**: Stick to one style (`for-the-badge` is popular for README files)
- **Testing**: Click badges to verify links work before publishing
- **Arrangement**: Stack badges horizontally or vertically depending on your layout
- **Dark backgrounds**: `logoColor=white` works well on dark badge backgrounds
- **Light backgrounds**: `logoColor=black` for light/transparent backgrounds
