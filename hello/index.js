document.addEventListener("DOMContentLoaded", function () {
    const headings = [
        "Artificial Intelligence",
        "Design & Production",
        "Machine Learning", 
        "Data Integration",
        "IT Services",
        "Marketing"
    ];

    let currentHeadingIndex = 0;

    function changeHeading() {
        const headingElement = document.querySelector(".x");
        headingElement.classList.add("fade-out");

        setTimeout(() => {
            currentHeadingIndex = (currentHeadingIndex + 1) % headings.length;
            headingElement.innerText = headings[currentHeadingIndex];
            headingElement.classList.remove("fade-out");
        }, 1000); // Time should match the CSS transition duration
    }

    setInterval(changeHeading, 3000); // Change every 2000 milliseconds (2 seconds)
});

