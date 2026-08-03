---
tags:
  - docs-eliana-lol-content
---
# YT-DLP Mega Cheat Sheet

## TikTok Commands

### Basic Download Commands
```bash
# Download single TikTok video
yt-dlp https://www.tiktok.com/@username/video/123456789

# Download TikTok with best quality
yt-dlp -f best https://www.tiktok.com/@username/video/123456789

# Download TikTok video without watermark (when available)
yt-dlp -f "best[height<=720]" https://www.tiktok.com/@username/video/123456789
```

### Audio Extraction
```bash
# Extract audio only (MP3)
yt-dlp -x --audio-format mp3 https://www.tiktok.com/@username/video/123456789

# Extract audio with best quality
yt-dlp -x --audio-format best https://www.tiktok.com/@username/video/123456789

# Extract audio with specific bitrate
yt-dlp -x --audio-format mp3 --audio-quality 192K https://www.tiktok.com/@username/video/123456789
```

### Metadata and Information
```bash
# Get video info without downloading
yt-dlp --print-json https://www.tiktok.com/@username/video/123456789

# List available formats
yt-dlp -F https://www.tiktok.com/@username/video/123456789

# Extract metadata to JSON file
yt-dlp --write-info-json https://www.tiktok.com/@username/video/123456789

# Get title, uploader, duration
yt-dlp --print "%(title)s - %(uploader)s - %(duration)s" https://www.tiktok.com/@username/video/123456789

# Check if content is video or photo slideshow
yt-dlp --print "%(duration)s" https://www.tiktok.com/@username/video/123456789
```

### File Naming and Organization
```bash
# Custom filename with metadata
yt-dlp -o "%(uploader)s_%(title)s_%(id)s.%(ext)s" https://www.tiktok.com/@username/video/123456789

# Save to specific directory
yt-dlp -o "~/Downloads/TikTok/%(title)s.%(ext)s" https://www.tiktok.com/@username/video/123456789

# Include upload date in filename
yt-dlp -o "%(upload_date)s_%(uploader)s_%(title)s.%(ext)s" https://www.tiktok.com/@username/video/123456789

# Organize by uploader
yt-dlp -o "TikTok/%(uploader)s/%(title)s.%(ext)s" https://www.tiktok.com/@username/video/123456789
```

### Batch Operations
```bash
# Download from URL list file
yt-dlp -a tiktok_urls.txt

# Download with rate limiting (300 videos/hour max for TikTok)
yt-dlp --sleep-interval 12 -a tiktok_urls.txt

# Download with error handling
yt-dlp --ignore-errors --continue --abort-on-error -a tiktok_urls.txt

# Download user's recent videos
yt-dlp "https://www.tiktok.com/@username" --playlist-end 50
```

### Advanced TikTok Options
```bash
# Download with thumbnail
yt-dlp --write-thumbnail https://www.tiktok.com/@username/video/123456789

# Download with description
yt-dlp --write-description https://www.tiktok.com/@username/video/123456789

# Embed metadata in file
yt-dlp --embed-metadata https://www.tiktok.com/@username/video/123456789

# Download photo slideshows (duration usually <15 seconds)
yt-dlp --write-info-json -o "slideshow_%(id)s.%(ext)s" https://www.tiktok.com/@username/video/123456789

# Skip download if file exists
yt-dlp --no-overwrites https://www.tiktok.com/@username/video/123456789
```

### TikTok Troubleshooting
```bash
# Verbose output for debugging
yt-dlp -vU https://www.tiktok.com/@username/video/123456789

# Use different user agent
yt-dlp --user-agent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" https://www.tiktok.com/@username/video/123456789

# Retry failed downloads
yt-dlp --retries 3 https://www.tiktok.com/@username/video/123456789

# Update yt-dlp for TikTok fixes
yt-dlp --update
```

---

## Instagram Commands

### Basic Download Commands
```bash
# Download single Instagram post
yt-dlp https://www.instagram.com/p/ABC123/

# Download Instagram Reel
yt-dlp https://www.instagram.com/reel/ABC123/

# Download with best quality
yt-dlp -f best https://www.instagram.com/p/ABC123/
```

### Authentication (Required for most Instagram content)
```bash
# Using cookies from browser (RECOMMENDED)
yt-dlp --cookies-from-browser chrome https://www.instagram.com/p/ABC123/
yt-dlp --cookies-from-browser firefox https://www.instagram.com/p/ABC123/

# Using netrc file
yt-dlp --netrc https://www.instagram.com/p/ABC123/

# Using username/password (often broken)
yt-dlp -u your_username -p your_password https://www.instagram.com/p/ABC123/
```

### Stories Download
```bash
# Download Instagram story (requires authentication)
yt-dlp --cookies-from-browser firefox https://www.instagram.com/stories/username/story_id/

# Download all stories from user
yt-dlp --cookies-from-browser firefox "https://www.instagram.com/username" --match-filter "live_status != is_live"
```

### Audio and Format Options
```bash
# Extract audio only
yt-dlp -x --audio-format mp3 https://www.instagram.com/p/ABC123/

# Download specific format
yt-dlp -f mp4 https://www.instagram.com/p/ABC123/

# List available formats
yt-dlp -F https://www.instagram.com/p/ABC123/
```

### Carousel/Multiple Media Posts
```bash
# Download all media from carousel post
yt-dlp https://www.instagram.com/p/ABC123/

# Download with numbering for carousel
yt-dlp -o "%(uploader)s_%(id)s_%(autonumber)02d.%(ext)s" https://www.instagram.com/p/ABC123/
```

### Metadata and Information
```bash
# Get post info without downloading
yt-dlp --print-json https://www.instagram.com/p/ABC123/

# Extract metadata to file
yt-dlp --write-info-json https://www.instagram.com/p/ABC123/

# Get specific metadata fields
yt-dlp --print "%(title)s - %(uploader)s - %(like_count)s likes" https://www.instagram.com/p/ABC123/

# Get view count and engagement
yt-dlp --print "Views: %(view_count)s, Likes: %(like_count)s" https://www.instagram.com/p/ABC123/
```

### File Organization
```bash
# Custom naming with date
yt-dlp -o "Instagram/%(upload_date)s_%(uploader)s_%(id)s.%(ext)s" https://www.instagram.com/p/ABC123/

# Organize by content type
yt-dlp -o "Instagram/%(extractor)s/%(uploader)s/%(title)s.%(ext)s" https://www.instagram.com/p/ABC123/

# Include hashtags in filename (if available)
yt-dlp -o "%(uploader)s_%(title)s_%(tags)s.%(ext)s" https://www.instagram.com/p/ABC123/
```

### Batch Operations
```bash
# Download from URL list with authentication
yt-dlp --cookies-from-browser firefox -a instagram_urls.txt

# Download user's recent posts (requires authentication)
yt-dlp --cookies-from-browser firefox "https://www.instagram.com/username/" --playlist-end 20

# Download with rate limiting to avoid blocks
yt-dlp --sleep-interval 5 --cookies-from-browser firefox -a instagram_urls.txt
```

### Advanced Instagram Options
```bash
# Download with thumbnails and metadata
yt-dlp --write-thumbnail --embed-metadata --cookies-from-browser firefox https://www.instagram.com/p/ABC123/

# Download IGTV videos
yt-dlp --cookies-from-browser firefox https://www.instagram.com/tv/ABC123/

# Download live streams (if supported)
yt-dlp --cookies-from-browser firefox https://www.instagram.com/username/live/

# Skip private/unavailable content
yt-dlp --ignore-errors --cookies-from-browser firefox -a instagram_urls.txt
```

### Instagram Troubleshooting
```bash
# Verbose debugging
yt-dlp -vU --cookies-from-browser firefox https://www.instagram.com/p/ABC123/

# Clear cookies and re-authenticate
# Delete browser cookies and login again, then retry

# Use different browser for cookies
yt-dlp --cookies-from-browser edge https://www.instagram.com/p/ABC123/

# Update yt-dlp for Instagram fixes
yt-dlp --update

# Handle login-required errors
yt-dlp --cookies-from-browser firefox --ignore-errors https://www.instagram.com/p/ABC123/
```

## General Tips for Both Platforms

### Performance Optimization
```bash
# Concurrent downloads (use with caution)
yt-dlp --concurrent-fragments 4

# Limit download speed
yt-dlp --limit-rate 1M

# Resume interrupted downloads
yt-dlp --continue
```

### Error Handling
```bash
# Continue on errors
yt-dlp --ignore-errors

# Abort after N consecutive errors
yt-dlp --abort-on-unavailable-fragment

# Retry on failure
yt-dlp --retries 5
```

### Configuration Files
```bash
# Create config file at ~/.config/yt-dlp/config
# Add commonly used options:
--embed-metadata
--write-thumbnail
--ignore-errors
--continue
```

**Note**: Always respect platform terms of service and rate limits. Instagram requires authentication for most content, while TikTok has rate limiting (~300 videos/hour). Keep yt-dlp updated for the latest fixes and extractor support.
