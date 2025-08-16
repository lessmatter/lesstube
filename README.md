# LessTube - YouTube as a Search Engine

A browser extension that transforms YouTube into a search-only platform - no recommendations, no algorithm suggestions, just the videos you actively search for.

## Features

- 🔍 **Search-only experience** - YouTube works like Google: you search, you find, you watch
- 🚫 **No algorithm manipulation** - YouTube can't decide what you should watch next
- 🎯 **Intentional viewing** - Only see videos you deliberately search for
- ⚡ **Lightweight** - Simple extension that doesn't slow down your browsing

## Installation

### 🦊 Firefox (Recommended)
Install directly from Mozilla Add-ons:

**[📦 Install from Firefox Add-ons](https://addons.mozilla.org/firefox/addon/lesstube/)**

1. Click the link above or search "LessTube" in Firefox Add-ons
2. Click "Add to Firefox"
3. ✅ **Automatic updates and secure installation**

### 🌐 Chrome/Edge/Chromium Browsers
For Chrome-based browsers, install manually from GitHub:

1. **Download:** Get the latest `lesstube-v*.zip` from [Releases](https://github.com/lessmatter/lesstube/releases)
2. **Extract:** Unzip the downloaded file
3. **Install:**
   - Open `chrome://extensions/` (Chrome) or `edge://extensions/` (Edge)
   - Enable "Developer mode" (toggle in top right)
   - Click "Load unpacked"
   - Select the extracted folder
4. ⚠️ **Note:** Shows developer mode warning, but works permanently

### 🍎 Safari
Safari is not supported due to platform limitations.

## What LessTube Does

### 🏠 **Home Page → Google-Style Search**
- Removes all content from YouTube's home page
- Shows only the YouTube logo and search bar, centered on screen
- **Result:** You can only watch videos you actively search for, not what YouTube's algorithm suggests

### 🔍 **Search Results**
- Removes filter chips (trending, upload date, etc.)
- Removes "About these results" section
- Clean, focused search results only

### 📺 **Video Watching**
- Hides the entire sidebar with recommended videos
- No "Up Next" suggestions to distract you
- Focus purely on the video you chose to watch

### 👤 **Channel Pages**
- Automatically redirects from channel home to the videos tab
- Hides "Home" and "Shorts" tabs to reduce distractions
- Shows only the channel's video list

### 🧹 **Navigation Cleanup**
- Removes voice search button
- Hides sidebar menu and mini guide
- Removes unnecessary header buttons

## Development

This extension uses a simple content script approach:

- `manifest.json` - Extension configuration
- `index.js` - Main content script logic
- `style.css` - Custom styling to hide elements
- `icon-xx.png` - Extension icon

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

This project is licensed under the terms specified in the LICENSE file.

## Links

- 🦊 **[Firefox Add-on](https://addons.mozilla.org/firefox/addon/lesstube/)**
- 📂 **[GitHub Repository](https://github.com/lessmatter/lesstube)**
- 🐦 **[Less Matter on Bluesky](https://bsky.app/profile/lessmatter.com)**

## Author

**Less Matter**  
Homepage: https://github.com/lessmatter/

---

*Take back control of your YouTube experience. Search intentionally, watch purposefully.*
