console.log("LessTube loaded! Made by Less Matter (lessmatter.com)");

function isHomePage() {
  return (
    window.location.pathname === "/" ||
    window.location.pathname === "/feed/trending" ||
    window.location.pathname === "/feed/subscriptions"
  );
}

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

function redirectChannelToVideos() {
  const path = window.location.pathname;

  if (
    path.match(/^\/@[^\/]+$/) ||
    path.match(/^\/channel\/[^\/]+$/) ||
    path.match(/^\/c\/[^\/]+$/)
  ) {
    console.log("Redirecting from channel home to videos page");
    const videosUrl = window.location.href + "/videos";
    window.location.replace(videosUrl);
    return true;
  }
  return false;
}

function redirectShortsToWatch() {
  const path = window.location.pathname;

  if (path.match(/^\/shorts\/[^\/]+$/)) {
    console.log("Redirecting from Shorts to regular watch page");
    const videoId = path.split("/")[2];
    const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
    window.location.replace(watchUrl);
    return true;
  }
  return false;
}

function handleRedirects() {
  if (redirectChannelToVideos()) return true;
  if (redirectShortsToWatch()) return true;
  return false;
}

function setPageType() {
  const pageType = getPageType();
  document.body.setAttribute("data-page-type", pageType);
  console.log(`Page type set: ${pageType} (${window.location.pathname})`);
}

function initializePage() {
  if (handleRedirects()) return;
  setPageType();
  setTimeout(addHomePageFooter, 100);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializePage);
} else {
  initializePage();
}

let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    setTimeout(initializePage, 500);
  }
}).observe(document, { subtree: true, childList: true });

function addHomePageFooter() {
  document.getElementById("lesstube-footer")?.remove();
  const pageType = getPageType();

  if (pageType === "home") {
    const footer = document.createElement("div");
    footer.id = "lesstube-footer";
    footer.innerHTML = `
        <p style="text-align: center; color: #606060; font-size: 13px;">
            This page has been modified by <a href="https://github.com/lessmatter/lesstube" target="_blank" style="color: inherit;">LessTube</a> browser extension.<br>
            Not affiliated with YouTube or Google. Made by <a href="https://bsky.app/profile/lessmatter.com" target="_blank" style="color: inherit;">Less Matter</a>.</small>
        </p>
    `;

    document.getElementById("container")?.appendChild(footer);
  }
}
