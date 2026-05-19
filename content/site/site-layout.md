### **TL;DR**

-   **Total Items:** 41 categorized.
    
-   **Structure:** 4 Root Folders.
    
-   **[Quartz Explorer](https://quartz.jzhao.xyz/features/explorer)** | **[Para Method](https://fortelabs.com/blog/para/)**
    

---

### **1. `/collections` (11 Items)**

_Static lists, databases, and saved resources._

-   `archive`, `assets`, `blogroll`, `books`, `dictionary`, `library`, `links`, `listography`, `lists`, `reference`, `for my website`
    

### **2. `/garden` (19 Items)**

_Your knowledge base and topical research._

-   `apps` (x2), `design`, `etymology`, `fediverse`, `github`, `instances`, `llm`, `music`, `nekoweb`, `obsidian`, `old-web`, `open-source`, `philosophy`, `research`, `tech-stack`, `terminal`, `tools`, `words`
    

### **3. `/writing` (5 Items)**

_Structured output and finalized content._

-   `guides`, `guide` (variation), `literature`, `notes`, `literature`
    

### **4. `/system` (6 Items)**

_Workflow, meta-data, and external document syncing._

-   `to post`, `to sort`, `taxonomy`, `tags-list`, `protonmail`, `google docs`
    

---

### **The Full Reconciliation Table**

**Category**

**Count**

**Items Included**

**Collections**

11

`archive`, `assets`, `blogroll`, `books`, `dictionary`, `library`, `links`, `listography`, `lists`, `reference`, `for my website`

**Garden**

19

`apps` (x2), `design`, `etymology`, `fediverse`, `github`, `instances`, `llm`, `music`, `nekoweb`, `obsidian`, `old-web`, `open-source`, `philosophy`, `research`, `tech-stack`, `terminal`, `tools`, `words`

**Writing**

5

`guides`, `guide`, `literature`, `notes`, `literature`

**System**

6

`to post`, `to sort`, `taxonomy`, `tags-list`, `protonmail`, `google docs`

**TOTAL**

**41**

---

### **Quartz Script Tip**

Since you have 41 categories in D1 but only want 4 folders in Quartz, update your Python script with a mapping dictionary:

Python

```
MAPPING = {
    "archive": "collections", "assets": "collections", "blogroll": "collections", 
    "books": "collections", "dictionary": "collections", "library": "collections", 
    "links": "collections", "listography": "collections", "lists": "collections", 
    "reference": "collections", "for my website": "collections",
    "apps": "garden", "design": "garden", "etymology": "garden", 
    "fediverse": "garden", "github": "garden", "instances": "garden", 
    "llm": "garden", "music": "garden", "nekoweb": "garden", 
    "obsidian": "garden", "old-web": "garden", "open-source": "garden", 
    "philosophy": "garden", "research": "garden", "tech-stack": "garden", 
    "terminal": "garden", "tools": "garden", "words": "garden",
    "guides": "writing", "guide": "writing", "literature": "writing", "notes": "writing",
    "to post": "system", "to sort": "system", "taxonomy": "system", 
    "tags-list": "system", "protonmail": "system", "google docs": "system"
}

# Inside your loop:
folder = MAPPING.get(category.lower(), "garden")

```

apps
design
dictionary
etymology
github
guide
instances
library
literature
llm
music
nekoweb
obsidian
old-web
open-source
philosophy
protonmail
tags-list
words
apps
archive
assets
blogroll
books
dictionary
fediverse
for my website
google docs
guides
links
listography
lists
notes
reference
research
taxonomy
tech-stack
terminal
to post
to sort
tools

---


No, that list accounted for **37** items. You have **41** distinct terms in your original list (including a duplicate for `apps`).

I have reconciled your full list below into the **4-folder system**, ensuring every single one of your 41 entries is categorized.

### **TL;DR**
* **Total Items:** 41 categorized.
* **Structure:** 4 Root Folders.
* **[Quartz Explorer](https://quartz.jzhao.xyz/features/explorer)** | **[Para Method](https://fortelabs.com/blog/para/)**

---

### **1. `/collections` (11 Items)**
*Static lists, databases, and saved resources.*
* `archive`, `assets`, `blogroll`, `books`, `dictionary`, `library`, `links`, `listography`, `lists`, `reference`, `for my website`

### **2. `/garden` (19 Items)**
*Your knowledge base and topical research.*
* `apps` (x2), `design`, `etymology`, `fediverse`, `github`, `instances`, `llm`, `music`, `nekoweb`, `obsidian`, `old-web`, `open-source`, `philosophy`, `research`, `tech-stack`, `terminal`, `tools`, `words`

### **3. `/writing` (5 Items)**
*Structured output and finalized content.*
* `guides`, `guide` (variation), `literature`, `notes`, `literature`

### **4. `/system` (6 Items)**
*Workflow, meta-data, and external document syncing.*
* `to post`, `to sort`, `taxonomy`, `tags-list`, `protonmail`, `google docs`

---

### **The Full Reconciliation Table**

| Category | Count | Items Included |
| :--- | :--- | :--- |
| **Collections** | 11 | `archive`, `assets`, `blogroll`, `books`, `dictionary`, `library`, `links`, `listography`, `lists`, `reference`, `for my website` |
| **Garden** | 19 | `apps` (x2), `design`, `etymology`, `fediverse`, `github`, `instances`, `llm`, `music`, `nekoweb`, `obsidian`, `old-web`, `open-source`, `philosophy`, `research`, `tech-stack`, `terminal`, `tools`, `words` |
| **Writing** | 5 | `guides`, `guide`, `literature`, `notes`, `literature` |
| **System** | 6 | `to post`, `to sort`, `taxonomy`, `tags-list`, `protonmail`, `google docs` |
| **TOTAL** | **41** | |

---

### **Quartz Script Tip**
Since you have 41 categories in D1 but only want 4 folders in Quartz, update your Python script with a mapping dictionary:

```python
MAPPING = {
    "archive": "collections", "assets": "collections", "blogroll": "collections", 
    "books": "collections", "dictionary": "collections", "library": "collections", 
    "links": "collections", "listography": "collections", "lists": "collections", 
    "reference": "collections", "for my website": "collections",
    "apps": "garden", "design": "garden", "etymology": "garden", 
    "fediverse": "garden", "github": "garden", "instances": "garden", 
    "llm": "garden", "music": "garden", "nekoweb": "garden", 
    "obsidian": "garden", "old-web": "garden", "open-source": "garden", 
    "philosophy": "garden", "research": "garden", "tech-stack": "garden", 
    "terminal": "garden", "tools": "garden", "words": "garden",
    "guides": "writing", "guide": "writing", "literature": "writing", "notes": "writing",
    "to post": "system", "to sort": "system", "taxonomy": "system", 
    "tags-list": "system", "protonmail": "system", "google docs": "system"
}

# Inside your loop:
folder = MAPPING.get(category.lower(), "garden")
```
