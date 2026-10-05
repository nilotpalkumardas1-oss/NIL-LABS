// =========================================
// SEARCH
// =========================================

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
            keywords: ["nil jarvis", "jarvis", "jar"],
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


// =========================================
// MOBILE MENU
// =========================================

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}


// =========================================
// LOAD VIDEOS FROM JSON
// =========================================

async function loadVideos() {

    const videoGrid = document.getElementById("videoGrid");

    if (!videoGrid) {
        return;
    }

    try {

        const response = await fetch("data/videos.json");

        if (!response.ok) {
            throw new Error("Could not load videos.json");
        }

        const videos = await response.json();

        videoGrid.innerHTML = "";

        videos.forEach(video => {

            const videoCard = document.createElement("article");

            videoCard.className = "video-card";

            videoCard.innerHTML = `

                <div class="video-thumbnail">

                    <img
                        src="https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg"
                        alt="${video.title}"
                    >

                </div>

                <div class="video-info">

                    <p class="video-category">
                        ${video.category}
                    </p>

                    <h3>
                        ${video.title}
                    </h3>

                    <p>
                        ${video.description}
                    </p>

                    <a
                        href="https://youtu.be/${video.youtubeId}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="watch-button"
                    >
                        Watch on YouTube →
                    </a>

                </div>

            `;

            videoGrid.appendChild(videoCard);

        });

    } catch (error) {

        console.error("Error loading videos:", error);

        videoGrid.innerHTML = `
            <p>
                Unable to load videos.
            </p>
        `;

    }

}


// =========================================
// LOAD NOTES FROM JSON
// =========================================

async function loadNotes() {

    const notesContainer =
        document.getElementById("notes-container");

    if (!notesContainer) {
        return;
    }

    try {

        const response =
            await fetch("data/notes.json");

        if (!response.ok) {
            throw new Error("Could not load notes.json");
        }

        const notes =
            await response.json();

        notesContainer.innerHTML = "";

        notes.forEach(note => {

            const noteCard =
                document.createElement("article");

            noteCard.className =
                "note-card";

            noteCard.innerHTML = `

                <div class="note-icon">
                    PDF
                </div>

                <div class="note-content">

                    <p class="note-category">
                        ${note.category}
                    </p>

                    <h3>
                        ${note.title}
                    </h3>

                    <p>
                        ${note.description}
                    </p>

                    <div class="note-actions">

                        <a
                            href="${note.file}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="note-button"
                        >
                            Read Note →
                        </a>

                        <a
                            href="https://youtu.be/${note.videoId}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="note-button"
                        >
                            Watch Video →
                        </a>

                    </div>

                </div>

            `;

            notesContainer.appendChild(noteCard);

        });

    } catch (error) {

        console.error("Error loading notes:", error);

        notesContainer.innerHTML = `
            <p>
                Unable to load notes.
            </p>
        `;

    }

}


// =========================================
// LOAD CONTENT WHEN PAGE LOADS
// =========================================

loadVideos();
loadNotes();