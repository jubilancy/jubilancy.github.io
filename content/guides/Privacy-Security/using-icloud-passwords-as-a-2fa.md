---
title: "Using Icloud Passwords As A 2fa"
date: 2026-04-25
tags:
  - guide
---

Use the Apple Passwords app to store the "Secret Key" from a website, which turns your Touch ID into a code generator.

**TL;DR: Use the Apple Passwords app to store the "Secret Key" from a website, which turns your Touch ID into a code generator.**

---

### **Step-by-Step Guide: Touch ID for 2FA**

1.  **Get the Secret Key:**
    * On the website's 2FA setup page, look for **"Enter key manually"** or **"Can't scan QR code."**
    * Copy the alphanumeric string (the "Secret Key") provided by the site.

2.  **Open the Passwords App:**
    * Launch the **Passwords app** (on macOS Sequoia or later) or go to **System Settings > Passwords**.
    * Authenticate with **Touch ID**.

3.  **Create or Edit an Entry:**
    * Find the entry for the website (e.g., `ea.com`) or click the **+ (plus)** icon to create a new one.
    * Click **Set Up Code...** or **Add Verification Code**.

4.  **Paste the Key:**
    * Select **Enter Setup Key**.
    * Paste the alphanumeric string you copied in Step 1.

5.  **Finish the Link:**
    * The Passwords app will now show a **6-digit code** that changes every 30 seconds.
    * Enter this code back on the website to verify the link.

---

### **How it works next time**
The next time you log in to [EA](https://myaccount.ea.com/am/ui/security-privacy/login-verification):
* The site will ask for your 2FA code.
* Open your **Passwords app** (or use the AutoFill prompt above your keyboard).
* Use **Touch ID** to view the entry.
* Copy the current code and paste it into the site.