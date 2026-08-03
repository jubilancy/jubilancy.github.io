---
tags:
  - guides
  - apps
---
**TL;DR**: Use **Automator** to create a **Quick Action** that runs a **Bash** script. This script handles extensions, appends `.txt` to extensionless names, and increments numbers to avoid overwriting existing files.

---

## **The Full Script**

Bash

```
cd ~/Desktop

# Capture the highlighted text (limited to 50 chars for filename safety)
INPUT=$(echo "$1" | cut -c 1-50)

# 1. Handle Extension Logic
if [[ "$INPUT" == *.* ]]; then
    # If it has a dot, split into base and extension
    EXT=".${INPUT##*.}"
    BASE="${INPUT%.*}"
else
    # If no dot, default to .txt extension
    EXT=".txt"
    BASE="$INPUT"
fi

FILENAME="$BASE$EXT"
COUNT=1

# 2. Handle Duplicate Prevention
# If the file exists, append " 1", " 2", etc., until a unique name is found
while [ -e "$FILENAME" ]; do
    FILENAME="${BASE} ${COUNT}${EXT}"
    ((COUNT++))
done

# 3. Create the empty file
touch "$FILENAME"
```

---

## **Installation Steps**

### **1. Open Automator**

- Press `Cmd + Space`, type **[Automator](https://support.apple.com/guide/automator/welcome/mac)**, and hit Enter.
    
- Select **New Document** (bottom left).
    
- Choose **Quick Action** (the gear icon) as the document type.
    

### **2. Configure Workflow Settings**

- At the very top of the right-hand panel, set the dropdowns to:
    
    - **Workflow receives current:** `text`
        
    - **in:** `any application`
        

### **3. Add the Script**

- In the search bar on the far left, type **Run Shell Script**.
    
- Drag the **Run Shell Script** action into the main workflow area on the right.
    
- Change the **Pass input:** dropdown from "to stdin" to **as arguments**.
    
- Delete any placeholder text in the script box and paste the **Full Script** provided above.
    

### **4. Save**

- Go to **File > Save** (or `Cmd + S`).
    
- Name it: `Create File from Highlight`.
    

---

## **How to Use**

1. **Highlight** any text in your browser or app (e.g., `my-script.py` or `LICENSE`).
    
2. **Right-click** the highlighted text.
    
3. Select **Services** (or **Quick Actions**) > **Create File from Highlight**.
    
4. Check your **[Desktop](https://www.google.com/search?q=https://support.apple.com/guide/mac-help/mchlp2304/mac)** for the new file.
    

---

## **Optional: Add a Keyboard Shortcut**

- Open **[System Settings](https://www.google.com/search?q=https://support.apple.com/guide/mac-help/change-system-settings-mchlp1053/mac)**.
    
- Go to **Keyboard > Keyboard Shortcuts > Services**.
    
- Find `Create File from Highlight` under the **Text** section.
    
- Double-click "none" to assign a shortcut (e.g., `Cmd + Shift + L`).

