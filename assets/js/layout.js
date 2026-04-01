// Helper function to load HTML partials asynchronously and insert into container
async function loadHTML(url, selector) {
  try {
    const container = document.querySelector(selector);
    if (container) container.innerHTML = ""; // Clear placeholder to avoid flicker
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const html = await res.text();
    if (container) container.innerHTML = html;
  } catch (e) {
    console.error(`Failed to load ${url}`, e);
  }
}

// Initialize or recalculate your layout after header/footer/head load
function initializeLayout() {
  if (
    window.layoutInstance &&
    typeof window.layoutInstance.recalculate === "function"
  ) {
    window.layoutInstance.recalculate();
    console.log("layout.js recalculated.");
  } else if (typeof window.initLayout === "function") {
    window.initLayout();
    console.log("layout.js initialized via initLayout().");
  } else {
    console.log("No explicit layout.js API found for initialization.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Load header, footer, head partials in parallel
  Promise.all([
    loadHTML("/key/header.html", "#header-container"),
    loadHTML("/key/footer.html", "#footer-container"),
    loadHTML("/key/head.html", "#head-container"),
  ]).then(() => {
    // Wait for images inside header before layout init to prevent layout glitches
    waitForImages("#header-container", () => {
      initializeLayout();
      initializeUpvoteButtons();
    });
  });
});

// Sample event listener initialization
function initializeUpvoteButtons() {
  const toastButton = document.querySelector(".upvote-button");
  if (toastButton) {
    const countSpan = toastButton.querySelector(".upvote-count");
    let toastsCount = 0;
    toastButton.addEventListener("click", () => {
      toastsCount++;
      countSpan.textContent = toastsCount;
    });
  }
}
