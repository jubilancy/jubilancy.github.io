---
title: "customize mac os safari developer"
---

To customize Safari for development on Mac, first **enable the Develop Menu in Safari Settings > Advanced, then use its tools like Web Inspector (⌥⌘I) for debugging, Responsive Design Mode for testing layouts, and Feature Flags for experimenting with new web tech**; you can also create custom Safari Extensions and use Profiles for different work contexts. [[1](https://developer.apple.com/documentation/safari-developer-tools/enabling-developer-features), [2](https://www.youtube.com/watch?v=s83_GTX7btk), [3](https://developer.apple.com/documentation/safari-developer-tools/feature-flag-settings), [4](https://developer.apple.com/documentation/safari-developer-tools/develop-menu#:~:text=The%20Develop%20menu%20in%20Safari%20provides%20tools,different%20viewport%20sizes%20and%20display%20pixel%20ratios), [5](https://www.youtube.com/watch?v=iAWa-mE3xcM)]

**1. Enable Developer Features**

- Open Safari, go to **Safari > Settings** (or Preferences).
- Click the **Advanced** tab.
- Check the box for "**Show features for web developers**" (or "Show Develop menu in menu bar").
- A new **Develop** menu will appear in the menu bar. [[1](https://developer.apple.com/documentation/safari-developer-tools/enabling-developer-features), [2](https://www.youtube.com/watch?v=s83_GTX7btk), [4](https://developer.apple.com/documentation/safari-developer-tools/develop-menu#:~:text=The%20Develop%20menu%20in%20Safari%20provides%20tools,different%20viewport%20sizes%20and%20display%20pixel%20ratios)]

**2. Key Tools in the Develop Menu**

- **Web Inspector**: Right-click a page and select **Inspect Element**, or use Develop > Show Web Inspector (⌥⌘I) to debug HTML, CSS, JavaScript, and network.
- **Responsive Design Mode**: Test how your site looks on different screen sizes and pixel densities.
- **Feature Flags**: Experiment with experimental web features (CSS, JavaScript, Media) before they're standard.
- **Automation**: Enable WebDriver for automated testing. [[2](https://www.youtube.com/watch?v=s83_GTX7btk), [3](https://developer.apple.com/documentation/safari-developer-tools/feature-flag-settings), [4](https://developer.apple.com/documentation/safari-developer-tools/develop-menu#:~:text=The%20Develop%20menu%20in%20Safari%20provides%20tools,different%20viewport%20sizes%20and%20display%20pixel%20ratios), [6](https://daily.dev/blog/safari-browser-tips-for-developers), [7](https://developer.apple.com/documentation/safari-developer-tools/developer-settings), [8](https://developer.apple.com/documentation/safari-developer-tools/inspecting-safari-macos#:~:text=With%20the%20webpage%20you%20wish%20to%20inspect,choose%20Inspect%20Element%20from%20the%20context%20menu.), [9](https://developer.apple.com/documentation/safari-developer-tools)]

**3. Customize with Extensions & Profiles**

- **Safari Extensions**: Build custom extensions with web tech (HTML, CSS, JS) in Xcode to add functionality or distribute through the App Store.
- **Profiles**: Create separate browsing environments (personal, work) with unique settings, bookmarks, and toolbar colors. [[5](https://www.youtube.com/watch?v=iAWa-mE3xcM), [10](https://developer.apple.com/documentation/safariservices/running-your-safari-web-extension), [11](https://developer.apple.com/safari/extensions/#:~:text=Enhance%20and%20customize%20the%20web%20browsing%20experience,easy%20to%20bring%20your%20extensions%20to%20Safari.)]

**4. Advanced Developer Settings (in Settings > Advanced)**

- **Disable Security Checks**: Temporarily turn off local file restrictions or cross-origin restrictions for easier local development.
- **JavaScript**: Allow JavaScript from Smart Search or Apple Events. [[7](https://developer.apple.com/documentation/safari-developer-tools/developer-settings)]

By following these steps, you can tailor Safari to your specific web development workflow, from debugging and performance tuning to testing new browser features. [[3](https://developer.apple.com/documentation/safari-developer-tools/feature-flag-settings), [6](https://daily.dev/blog/safari-browser-tips-for-developers), [9](https://developer.apple.com/documentation/safari-developer-tools)]


*AI responses may include mistakes.*

[1] <https://developer.apple.com/documentation/safari-developer-tools/enabling-developer-features>

[2] <https://www.youtube.com/watch?v=s83_GTX7btk>

[3] <https://developer.apple.com/documentation/safari-developer-tools/feature-flag-settings>

[4] [https://developer.apple.com/documentation/safari-developer-tools/develop-menu](https://developer.apple.com/documentation/safari-developer-tools/develop-menu#:~:text=The%20Develop%20menu%20in%20Safari%20provides%20tools,different%20viewport%20sizes%20and%20display%20pixel%20ratios)

[5] <https://www.youtube.com/watch?v=iAWa-mE3xcM>

[6] <https://daily.dev/blog/safari-browser-tips-for-developers>

[7] <https://developer.apple.com/documentation/safari-developer-tools/developer-settings>

[8] [https://developer.apple.com/documentation/safari-developer-tools/inspecting-safari-macos](https://developer.apple.com/documentation/safari-developer-tools/inspecting-safari-macos#:~:text=With%20the%20webpage%20you%20wish%20to%20inspect,choose%20Inspect%20Element%20from%20the%20context%20menu.)

[9] <https://developer.apple.com/documentation/safari-developer-tools>

[10] <https://developer.apple.com/documentation/safariservices/running-your-safari-web-extension>

[11] [https://developer.apple.com/safari/extensions/](https://developer.apple.com/safari/extensions/#:~:text=Enhance%20and%20customize%20the%20web%20browsing%20experience,easy%20to%20bring%20your%20extensions%20to%20Safari.)
