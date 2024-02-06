function extractVideoId(videoLink) {
    // Assuming videoLink is in the format "https://www.youtube.com/watch?v=VIDEO_ID"
    const match = videoLink.match(/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
}

const popUpWindows = [];

async function openVideos() {
    const videoLinks = await fetchVideoLinks();

    const sizes = [
        { width: 250, height: 250 },
        { width: 400, height: 300 },
        { width: 500, height: 200 },
        { width: 250, height: 350 },
        { width: 450, height: 350 },
        { width: 600, height: 250 },
        // Add more sizes as needed
    ];

    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = ''; // Clear previous content

    for (let i = 0; i < videoLinks.length; i++) {
        const videoId = extractVideoId(videoLinks[i]);
        if (!videoId) {
            console.error(`Invalid video link: ${videoLinks[i]}`);
            continue;
        }

        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];

        // Adjust the left and top positions for a wider distribution
        const leftPosition = Math.random() * (window.innerWidth - randomSize.width * 1.8);
        const topPosition = Math.random() * (window.innerHeight - randomSize.height * 1.5);

        const url = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;

        const newTab = window.open(url, '_blank', `width=${randomSize.width},height=${randomSize.height},top=${topPosition},left=${leftPosition}`);
        
        popUpWindows.push(newTab);

        if (i === 0) {
            newTab.focus();
        }
    }

    videoContainer.style.display = 'block';


const buttonContainer = document.getElementById('button-container');

const newButton = document.createElement('button');
newButton.innerHTML = "Let's keep walking."; 
newButton.onclick = function () {
    window.location.href = 'leaves.html';
};
newButton.classList.add('next-page-button');

buttonContainer.appendChild(newButton);


async function fetchVideoLinks() {
    const videoLinks = [];

    for (let i = 0; i < 10; i++) {
        try {
            let response = await fetch(`./link${i + 1}.JSON`);
            let data = await response.json();
            videoLinks.push(data.link);
        } catch (error) {
            console.error(`Error fetching video link ${i + 1}: ${error.message}`);
        }
    }

    return videoLinks;
}
}
