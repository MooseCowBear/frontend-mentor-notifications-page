const markRead = document.querySelector("button");

markRead.addEventListener("click", () => {
    //remove both indicators of being unread
    const unreadMarkers = document.querySelectorAll(".dot");
    unreadMarkers.forEach(elem => elem.style.display = "none");

    const unreadBackgroundDivs = document.querySelectorAll(".unread");
    unreadBackgroundDivs.forEach(elem => elem.classList.remove("unread"));

    //update the count of unread notifications
    const count = document.getElementById("notifications-count");
    count.innerText = 0;
});