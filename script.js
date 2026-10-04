function searchContent() {

    const input = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    const message =
        document.getElementById("searchMessage");

    if (input === "") {
        message.textContent =
            "Please enter something to search.";
        return;
    }

    const searchableContent = [

        {
            keywords: ["python", "pyth"],
            link: "notes/python/index.html"
        },

        {
            keywords: ["linux", "lin"],
            link: "#learn"
        },

        {
            keywords: ["cybersecurity", "cyber", "security"],
            link: "#learn"
        },

        {
            keywords: ["web development", "web", "html", "css", "javascript"],
            link: "#learn"
        },

        {
            keywords: ["safehear ai", "safehear", "safe"],
            link: "#projects"
        },

        {
            keywords: ["nil jarvis", "nil jarvis", "jarvis", "jar"],
            link: "#projects"
        }

    ];

    const result = searchableContent.find(item =>
        item.keywords.some(keyword =>
            keyword.includes(input) ||
            input.includes(keyword)
        )
    );

    if (result) {

        window.location.href = result.link;

    } else {

        message.textContent =
            "No matching content found.";

    }
}

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}