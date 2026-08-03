---
tags:
  - guides
---

# zapier

Perfect! I found several web scraping tools that can help. **Browse AI** looks like the best option for your needs - it's specifically designed for extracting data from websites with no code [required.Now](<http://required.Now>) let me check what Browse AI specifically offers:Great! Browse AI has a "Run Task" action. Now I have everything I need to design the system.  
**Proposed system**  
Product: Single Zap using Browse AI + Google Sheets

- Browse AI will handle the web scraping of TikTok sound URLs to extract song titles
- Google Sheets to store your URL list and results

**Asset details:**

- **Zap**: Google Sheets (New/Updated Row) → Browse AI (Run Task) → Google Sheets (Update Row)
- **Setup required**: You'll need to create a Browse AI "task" that teaches it how to extract song titles from TikTok sound pages
- **Process**: Each time you add a URL to your spreadsheet, Browse AI visits that URL, extracts the song title, and writes it back to the sheet

**Assumptions made:**

- Your URL list can be imported into Google Sheets
- Browse AI can handle TikTok's dynamic content (most modern scrapers can)
- You want results stored back in a spreadsheet format

**Task List:**

1. **Browse AI setup** (outside Zapier): Create and train a scraping task for TikTok sound pages
2. **Zap Editor**: Build the automation connecting your spreadsheet to Browse AI

**Next step** Continue with Zap Editor to build this automation. You'll need to set up Browse AI first to create a scraping task that knows how to extract song titles from TikTok sound pages.

