// Get the current page URL
const currentPageUrl = window.location.href;

// Get the page name from the URL
const pageName = currentPageUrl.substring(currentPageUrl.lastIndexOf("/") + 1);

// Display a notification indicating the current page
const notification = document.createElement("div");
notification.classList.add("notification");
notification.textContent = "You are on the " + pageName + " page";
document.body.appendChild(notification);

// Remove the notification after 1.5 seconds
setTimeout(() => {
  document.body.removeChild(notification);
}, 1500);
