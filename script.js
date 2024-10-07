function toggleReadMore(event) {
    event.preventDefault();
    const moreInfo = document.getElementById('more-info');
    const readMoreLink = document.getElementById('read-more');

    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
        readMoreLink.textContent = "Read Less";
    } else {
        moreInfo.style.display = "none";
        readMoreLink.textContent = "Read More";
    }
}
