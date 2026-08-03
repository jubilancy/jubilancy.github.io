---
title: "Unpacking Your GitHub Stars Tools"
---

It’s easy to lose track when you're deep in the "terminal zone!" You actually juggled a pretty sophisticated mix of modern web development and classic Unix command-line tools to get that list.

Here is the "staircase" of tools you climbed to get to the finish line:


### *****1. The Environment Tools**

These are the foundations that were already on your Mac:

- **Zsh (The Shell):** That ➜ symbol in your terminal. It’s the program that interprets your commands.

- **Python (.venv-global):** You had a Python Virtual Environment active. While we didn't use it for the final export, it was handling your pathing.

- **Homebrew/macOS Internal:** Provided the basic utilities like ls (list files) and cd (change directory).


### **2. The Node.js Stack (The "Fighting" Phase)**

These were the tools in the umaar/export-github-stars repository that gave us those architecture errors:

- **npm (Node Package Manager):** Used to install the project's dependencies.

- **Node.js (v22):** The runtime that was "too new" for the old code you were running.

- **node-gyp / node-sass:** The "villains" of our story—older tools that failed to compile on your Apple Silicon (M1/M2/M3) chip.

- **SQLite3:** The database engine you successfully rebuilt to store the data locally.

- **Knex:** The "SQL Query Builder" that handled the migrate-db-dev command to set up your database tables.


### **3. The Power Utilities (The "Winning" Phase)**

This is what actually got you the data in the end:

- **curl:** The "Swiss Army Knife" of the internet. It did the heavy lifting of talking to GitHub's servers.

- **GitHub REST API:** The actual interface GitHub provides for developers to request data programmatically.

- **grep:** The "filter" that searched through the massive pile of code GitHub sent back and pulled out only the full\_name lines.

- **Bash Loops (for i in {1..10}):** The logic that automated the process so you didn't have to download 10 different files manually.


### *****Summary Table**

|             |                                                                    |
| ----------- | ------------------------------------------------------------------ |
| **Tool**    | **Purpose**                                                        |
| **Git**     | To "clone" (download) the code from GitHub.                        |
| **Node.js** | The engine intended to run the export app.                         |
| **SQLite**  | The local database file where stars were originally going to live. |
| **cURL**    | The tool that finally "fetched" your stars directly from the API.  |
| **Grep**    | The tool that cleaned up the messy data into a nice list.          |

It was a bit of a journey, but you ended up using the most reliable method possible: **talking directly to the source!** Do you have any other "stuck" projects on your Desktop that need a similar cleanup?
