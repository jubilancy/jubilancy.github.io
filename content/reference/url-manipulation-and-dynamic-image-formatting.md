---
title: "URL Manipulation and Dynamic Image Formatting"
---

In technical terms, what you are doing is called **URL Manipulation** or **URL Parameter Tuning**.

When you specifically change the parts after the ?, you are modifying **Query Parameters** (also known as Query Strings).

Here is a breakdown of what’s happening and the different names for this practice:

### **1\. URL Parameter Manipulation**

This is the most accurate term for what you're doing. A URL is often broken down into the base path and the "parameters" that tell the server how to serve the file.

* **The Key:** format  
* **The Value:** webp  
  By changing the value to jpg, you are sending a different request to the server's API.

### **2\. Hot-swapping (Informal)**

In web development circles, quickly changing a value in the address bar to see how the page or image reacts is often called "hot-swapping" or "manual fetching." It’s a common way to test if a website supports different image sizes or types without using a dedicated tool.

### **3\. Dynamic Image Resizing/Formatting**

From the perspective of the server (the cdn.cosmos.so part), this is called **Dynamic Transformation**. Instead of storing thousands of different versions of one photo, the server uses those URL instructions to convert the image "on the fly" before sending it to your screen.

### ---

**Common Parameters You Can Often "Hack"**

If a URL looks like yours, you can often experiment with these other common keys:

| Parameter | Common Key | Example Change |
| :---- | :---- | :---- |
| **Width** | w= or width= | Change 400 to 1200 for higher res. |
| **Height** | h= or height= | Change 300 to 600\. |
| **Quality** | q= or quality= | Change 75 to 100 for less compression. |
| **Crop** | crop= | Often set to true, center, or face. |

**Pro Tip:** If you want the highest quality version possible, try removing the query parameters entirely (everything from the ? onwards). Sometimes the server will default to the original, uncompressed source file.

Would you like me to check if that specific CDN supports other parameters like quality or cropping?