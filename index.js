// LessTube - YouTube as a Search Engine
// Made by Less Matter - lessmatter.com
console.log("LessTube loaded! Made by Less Matter (lessmatter.com)");

// Check if on home page
function isHomePage() {
  return (
    window.location.pathname === "/" ||
    window.location.pathname === "/feed/trending" ||
    window.location.pathname === "/feed/subscriptions"
  );
}

// Identify page type
function getPageType() {
  const path = window.location.pathname;

  if (
    path === "/" ||
    path === "/feed/trending" ||
    path === "/feed/subscriptions"
  ) {
    return "home";
  } else if (path.startsWith("/watch")) {
    return "watch";
  } else if (path.startsWith("/results")) {
    return "search";
  } else if (
    path.startsWith("/channel/") ||
    path.startsWith("/c/") ||
    path.startsWith("/@")
  ) {
    return "channel";
  } else if (path.startsWith("/playlist")) {
    return "playlist";
  } else {
    return "other";
  }
}

// Redirect from channel home to videos page
function redirectChannelToVideos() {
  const path = window.location.pathname;

  // Check if on channel home page (/@channelName without /videos, /playlists, /about etc.)
  if (
    path.match(/^\/@[^\/]+$/) ||
    path.match(/^\/channel\/[^\/]+$/) ||
    path.match(/^\/c\/[^\/]+$/)
  ) {
    console.log("Redirecting from channel home to videos page");
    const videosUrl = window.location.href + "/videos";
    window.location.replace(videosUrl);
  }
  return false;
}

// Set page-type attribute to body element
function setPageType() {
  // Try to redirect if on channel home page
  if (redirectChannelToVideos()) {
    return; // If redirected, don't do anything else
  }

  const pageType = getPageType();
  document.body.setAttribute("data-page-type", pageType);
  console.log(`Page type set: ${pageType} (${window.location.pathname})`);

  // Add footer to home page
  setTimeout(addHomePageFooter, 100);
}

// Initialize when page is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setPageType);
} else {
  setPageType();
}

// Watch for URL changes (YouTube SPA)
let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    setTimeout(setPageType, 500);
  }
}).observe(document, { subtree: true, childList: true });

// Add footer to home page
function addHomePageFooter() {
  document.getElementById("lesstube-footer")?.remove();
  const pageType = getPageType();

  if (pageType === "home") {
    const footer = document.createElement("div");
    footer.id = "lesstube-footer";
    footer.innerHTML = `
        <p style="text-align: center; color: #606060; font-size: 14px; font-family: 'YouTube Sans', 'Roboto', sans-serif;">
            This page has been modified by <a href="https://github.com/lessmatter/lesstube" target="_blank" style="color:rgb(158, 133, 228);">LessTube</a> extension from <a href="https://bsky.app/profile/lessmatter.com" target="_blank" style="color: rgb(158, 133, 228);">Less Matter</a>.
        </p>
    `;

    // Add footer after masthead container
    document.getElementById("container")?.appendChild(footer);
  }
}
