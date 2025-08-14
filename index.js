// YouTube Minimalistinen Etusivu -lisäosa
console.log("YouTube Minimalistinen Etusivu -lisäosa ladattu!");

// Tarkista onko etusivulla
function isHomePage() {
    return window.location.pathname === '/' || window.location.pathname === '/feed/trending' || window.location.pathname === '/feed/subscriptions';
}

// Tunnista sivun tyyppi
function getPageType() {
    const path = window.location.pathname;
    
    if (path === '/' || path === '/feed/trending' || path === '/feed/subscriptions') {
        return 'home';
    } else if (path.startsWith('/watch')) {
        return 'watch';
    } else if (path.startsWith('/results')) {
        return 'search';
    } else if (path.startsWith('/channel/') || path.startsWith('/c/') || path.startsWith('/@')) {
        return 'channel';
    } else if (path.startsWith('/playlist')) {
        return 'playlist';
    } else {
        return 'other';
    }
}

// Aseta page-type attribuutti body-elementtiin
function setPageType() {
    const pageType = getPageType();
    document.body.setAttribute('data-page-type', pageType);
    console.log(`Sivu tyyppi asetettu: ${pageType} (${window.location.pathname})`);
}

// Käynnistä kun sivu on ladattu
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setPageType);
} else {
    setPageType();
}

// Seuraa URL-muutoksia (YouTube SPA)
let lastUrl = location.href;
new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
        lastUrl = url;
        setTimeout(setPageType, 500);
    }
}).observe(document, { subtree: true, childList: true });
