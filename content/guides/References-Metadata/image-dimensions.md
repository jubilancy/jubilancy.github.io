---
title: Getting Image Dimensions from URLs and Files
aliases:
  - Image Dimension Checker
  - Image Size Finder
tags:
  - tools
  - images
  - automation
  - bulk-processing
created: 2025-06-04
updated: 2025-06-04
---

# Getting Image Dimensions from URLs and Files

A practical guide to quickly extract width and height information from hundreds or thousands of image files and URLs.

## For Images Hosted Online (Image URLs)

### Python Script for Image URLs (Recommended)

The most efficient method for large batches of online images is a Python script that fetches each image via its URL and extracts the dimensions automatically.

**Setup:**
1. Create a text file called `image_urls.txt` with one image URL per line
2. Run the following Python code:

```python
import requests
from PIL import Image
from io import BytesIO
import csv

input_file = "image_urls.txt"   # One URL per line
output_csv = "image_dimensions.csv"

with open(input_file, 'r') as f:
    urls = [line.strip() for line in f.readlines() if line.strip()]

with open(output_csv, 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(["URL", "Width", "Height"])
    for url in urls:
        try:
            response = requests.get(url, timeout=10)
            img = Image.open(BytesIO(response.content))
            writer.writerow([url, img.width, img.height])
        except Exception as e:
            writer.writerow([url, "Error", str(e)])
```

**What this does:**
- Downloads each image via its URL
- Detects the width and height using Pillow
- Saves results for each URL to a CSV file

### Online Tools for Bulk URL Processing

Online tools that batch-process image URLs are rare, as most require uploading files directly rather than processing remote URLs. However, for smaller batches, you could use browser tools or paste URLs into sites, though these work best for local files.

## For Downloaded/Local Images

### Python Script for Local Files (Recommended)

Run a Python script using the Pillow library to scan a folder and output the dimensions for every image to a CSV.

**Setup:**
1. Place all images in one folder
2. Run this code:

```python
import os
from PIL import Image
import csv

folder = "/path/to/your/images"
output_csv = "image_dimensions.csv"

with open(output_csv, 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(["Filename", "Width", "Height"])
    for filename in os.listdir(folder):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp')):
            filepath = os.path.join(folder, filename)
            with Image.open(filepath) as img:
                writer.writerow([filename, img.width, img.height])
```

**Result:** Creates a CSV listing every image's filename, width, and height.

### Bulk Online Tools

Several online services let you upload images and view/export their dimensions in bulk:

- **imagy.app Image Size Finder**—drag-and-drop, shows dimensions in table, exportable
- **Boost Tool's Aspect Ratio Batch Checker**—allows you to drag and drop multiple images at once, see their dimensions and aspect ratios immediately in a list, export results to CSV

For automation, the Python script above is fastest, but web tools are useful for smaller sets or if you prefer drag-and-drop workflows.

## Quick Reference by Scenario

### Scenario 1: "I have hundreds of image URLs online"
**Best solution:** Python script with requests and Pillow (see above)
- Most automated and scalable
- Handles errors gracefully
- Exports directly to CSV

### Scenario 2: "I have images already downloaded locally"
**Best solution:** Python script for local files (see above)
- Fast batch processing
- No external dependencies beyond Pillow
- One-command solution

### Scenario 3: "I have a small batch of images (< 20)"
**Best solution:** Online web tools
- **imagy.app Image Size Finder**—works for both URLs and files
- **Boost Tool's Aspect Ratio Batch Checker**—good for drag-and-drop
- Quick, no setup required

### Scenario 4: "I need to check dimensions of images on a live website"
**Best solution:** Firefox built-in feature
1. Open target website in Firefox
2. Right-click blank area → "View Page Info"
3. Click "Media" tab to see all image URLs and their dimensions
4. Select all → Save as to download all information

### Scenario 5: "I want a one-time web interface solution"
**Best solution:** **imagy.app Image Size Finder**
- Supports multiple image input methods
- Shows dimensions in an interactive table
- Can export results
- Works entirely in browser for privacy
- Processes everything locally

## Installing Required Libraries

Before running Python scripts, ensure you have the necessary libraries:

```bash
pip install requests pillow
```

## Output Format

Both Python scripts output CSV files with the following format:

```
URL,Width,Height
https://example.com/image1.jpg,1920,1080
https://example.com/image2.jpg,640,480
...
```

Or for local files:

```
Filename,Width,Height
image1.jpg,1920,1080
image2.jpg,640,480
...
```

These CSV files can be opened in Excel, Google Sheets, or any spreadsheet application for further analysis, sorting, or filtering.

## Tips for Large Batches

- **For 1,000+ images:** Use the Python script with error handling—it will handle timeouts and connection issues gracefully
- **Organize URLs first:** Clean up your URL list and remove duplicates before processing
- **Monitor progress:** Modify the Python script to print progress every 10-20 images
- **Network stability:** Ensure stable internet connection for remote image processing
- **Local processing:** For local files, the script runs instantly regardless of batch size

## Troubleshooting

**Python script hangs:**
- Increase timeout value in `requests.get(url, timeout=30)`

**Pillow not recognizing image format:**
- Install additional image support: `pip install pillow-simd`

**Out of memory with very large batches:**
- Process images in chunks rather than all at once
