import { useEffect, useState } from "react";
import { subpage } from "../portfolioMain.jsx"

/////////////////////////////////////////////////////
/// Automatic scroll function (when changing pages)
/////////////////////////////////////////////////////

export const scrollToTop = () => {
    if (subpage === "educazione" && window.innerWidth >= 991 || subpage === "esperienze" && window.innerWidth >= 991) {
        window.scrollTo({top: 25, behavior: "smooth" });
    } else if (window.innerWidth >= 991) {
        window.scrollTo({top: 50, behavior: "smooth" });
    } else {
        window.scrollTo({top: 0, behavior: "instant" });
    }
}

export const hideCols = () => {
    if (subpage == "educazione") {
        var firstRow = document.getElementById("firstRow")
        var secondRow = document.getElementById("secondRow")
        var leftCol = document.getElementById("leftCol")
        var rightCol = document.getElementById("rightCol")
        var leftColGastaldi = document.getElementById("leftColGastaldi")
        var rightColGastaldi = document.getElementById("rightColGastaldi")
        leftCol.classList.add("left-col-show")
        rightCol.classList.add("right-col-show")
        leftColGastaldi.classList.add("left-col-show")
        rightColGastaldi.classList.add("right-col-show")
        setTimeout(()=> {
            leftCol.classList.remove("left-col-show")
            rightCol.classList.remove("right-col-show")
            leftCol.classList.add("left-col-hide")
            rightCol.classList.add("right-col-hide")
            setTimeout(() => {
                leftColGastaldi.classList.remove("left-col-show")
                rightColGastaldi.classList.remove("right-col-show")
                leftColGastaldi.classList.add("left-col-hide")
                rightColGastaldi.classList.add("right-col-hide")
                firstRow.classList.remove("bg-card")
                secondRow.classList.remove("bg-card")
            }, 100);
        }, 100)

        setTimeout(() => {
            leftCol.classList.remove("left-col-hide")
            rightCol.classList.remove("right-col-hide")
            leftColGastaldi.classList.remove("left-col-hide")
            rightColGastaldi.classList.remove("right-col-hide")
        }, 1300);
    } else if (subpage == "esperienze") {
        var leftCol = document.getElementById("leftCol")
        var rightCol = document.getElementById("rightCol")
        var row = document.getElementById("row")

        leftCol.classList.add("left-col-show")
        rightCol.classList.add("right-col-show")
        setTimeout(()=> {
            setTimeout(() => {
                leftCol.classList.remove("left-col-show")
                rightCol.classList.remove("right-col-show")
                leftCol.classList.add("left-col-hide")
                rightCol.classList.add("right-col-hide")
            }, 100);
            row.classList.remove("text-show")
            row.classList.add("text-hide")
        }, 100)
        setTimeout(() => {
            leftCol.classList.remove("left-col-hide")
            rightCol.classList.remove("right-col-hide")
            row.classList.remove("text-hide")
        }, 1300);
    } else {
        var leftCol = document.getElementById("leftCol")
        var rightCol = document.getElementById("rightCol")
        leftCol.classList.add("left-col-show")
        rightCol.classList.add("right-col-show")
        setTimeout(()=> {
            leftCol.classList.remove("left-col-show")
            rightCol.classList.remove("right-col-show")
            leftCol.classList.add("left-col-hide")
            rightCol.classList.add("right-col-hide")
        }, 100)
        setTimeout(() => {
            leftCol.classList.remove("left-col-hide")
            rightCol.classList.remove("right-col-hide")
        }, 1300);
    }
}

export const showCols = () => {
    if (subpage == "educazione") {
        var firstRow = document.getElementById("firstRow")
        var secondRow = document.getElementById("secondRow")
        var leftCol = document.getElementById("leftCol")
        var rightCol = document.getElementById("rightCol")
        var leftColGastaldi = document.getElementById("leftColGastaldi")
        var rightColGastaldi = document.getElementById("rightColGastaldi")
        setTimeout(() => {
            firstRow.classList.add("bg-card")
            secondRow.classList.add("bg-card")
        }, 1020);
        setTimeout(()=> {
            setTimeout(() => {
                leftCol.classList.remove("left-col-hidden")
                rightCol.classList.remove("right-col-hidden")
                leftCol.classList.add("col-show-anim")
                rightCol.classList.add("col-show-anim")
            }, 100);
            leftColGastaldi.classList.remove("left-col-hidden")
            rightColGastaldi.classList.remove("right-col-hidden")
            leftColGastaldi.classList.add("col-show-anim")
            rightColGastaldi.classList.add("col-show-anim")
        }, 100)
        setTimeout(() => {
            leftColGastaldi.classList.remove("col-show-anim")
            rightColGastaldi.classList.remove("col-show-anim")
            leftCol.classList.remove("col-show-anim")
            rightCol.classList.remove("col-show-anim")
        }, 1300);
    } else if (subpage == "esperienze") {
        var leftCol = document.getElementById("leftCol")
        var rightCol = document.getElementById("rightCol")
        var row = document.getElementById("row")

        setTimeout(()=> {
            leftCol.classList.remove("left-col-hidden")
            rightCol.classList.remove("right-col-hidden")
            leftCol.classList.add("col-show-anim")
            rightCol.classList.add("col-show-anim")
        }, 100)
        setTimeout(() => {
            row.classList.remove("text-hidden")
            row.classList.add("text-show")
        }, 200);
        setTimeout(() => {
            leftCol.classList.remove("col-show-anim")
            rightCol.classList.remove("col-show-anim")
            row.classList.remove("text-show")
        }, 1300);
    } else {
        var leftCol = document.getElementById("leftCol")
        var rightCol = document.getElementById("rightCol")
        
        setTimeout(()=> {
            leftCol.classList.remove("left-col-hidden")
            rightCol.classList.remove("right-col-hidden")
            leftCol.classList.add("col-show-anim")
            rightCol.classList.add("col-show-anim")
        }, 100)
        setTimeout(() => {
            leftCol.classList.remove("col-show-anim")
            rightCol.classList.remove("col-show-anim")
        }, 1300);
    }
}

export const closeNavbar = () => {
    if (window.innerWidth <= 991) {
        var navbarCollapse = document.querySelector(".navbar-toggler")
        navbarCollapse.click();
    }
}
