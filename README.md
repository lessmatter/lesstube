# LessTube - Minimalist YouTube

A browser extension that removes YouTube's addictive features and helps you focus only on the videos you actually want to watch.

## Features

- 🎯 **Focused viewing** - Remove distracting elements that keep you scrolling endlessly
- 🚫 **No algorithm manipulation** - Take control of what you watch instead of letting YouTube decide
- 🧘 **Minimalist interface** - Clean, distraction-free YouTube experience
- ⚡ **Lightweight** - Simple extension that doesn't slow down your browsing

## Installation

**Note:** This extension is not yet published on Mozilla Add-ons, so it only works with Firefox Developer Edition.

### Firefox Developer Edition (Recommended)
1. Download and install [Firefox Developer Edition](https://www.mozilla.org/firefox/developer/)
2. Go to `about:config` and set `xpinstall.signatures.required` to `false`
3. Download the `lesstube.zip` from this repository
4. Go to `about:addons`
5. Click the gear icon and select "Install Add-on From File"
6. Select the downloaded `.zip` file
7. ✅ **Extension stays installed permanently**

### Why Firefox Developer Edition?
- Regular Firefox requires Mozilla's signature for permanent installation
- Chrome/Edge work in developer mode but show constant warnings
- Firefox Developer Edition allows unsigned extensions without warnings

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

## Author

**Less Matter**  
Homepage: https://github.com/lessmatter/lesstube

---

*Take back control of your YouTube experience. Watch what you want, when you want.*
