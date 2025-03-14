const visits = document.querySelector(".visits");

document.addEventListener("DOMContentLoaded", () => {
    let visitCount = Number(localStorage.getItem("visit")) || 0;

    visitCount++;
    visits.textContent = visitCount;
    localStorage.setItem("visit", visitCount);
});