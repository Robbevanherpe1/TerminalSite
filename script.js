const terminal = document.getElementById("terminal");
const clock = document.getElementById("clock");

const commands = {
    "help": "Available commands:\n- help\n- about\n- projects\n- contact",
    "about": "Hello, I'm [Your Name]. A developer passionate about retro interfaces!",
    "projects": "1. Project One\n2. Project Two\n3. Project Three",
    "contact": "Email: your@email.com\nGitHub: github.com/yourprofile"
};

const bootSequence = [
    "Mem check... 8192 of 8192 bytes OK",
    "Booting TN-32 Emulator...",
    "Loading system...",
    "Ready.\n"
];

function typeEffect(element, text, speed, callback) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else if (callback) {
            callback();
        }
    }
    typing();
}

function boot() {
    terminal.innerHTML = "";
    let i = 0;
    function nextLine() {
        if (i < bootSequence.length) {
            typeEffect(terminal, bootSequence[i] + "\n", 50, nextLine);
            i++;
        } else {
            terminal.innerHTML += ">";
        }
    }
    nextLine();
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let input = terminal.innerText.split("\n").pop().replace(">", "").trim();
        if (commands[input]) {
            terminal.innerHTML += "\n" + commands[input] + "\n>";
        } else {
            terminal.innerHTML += "\nUnknown command. Type 'help' for a list of commands.\n>";
        }
    } else if (event.key.length === 1) {
        terminal.innerHTML += event.key;
    } else if (event.key === "Backspace") {
        terminal.innerHTML = terminal.innerHTML.slice(0, -1);
    }
});

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    clock.textContent = `${hours}:${minutes}`;
}

setInterval(updateClock, 1000);
updateClock();

boot();


const allowedResolutions = [
    { width: 1366, height: 768 },
    { width: 1440, height: 900 },
    { width: 1920, height: 1080 },
    { width: 3840, height: 2160 }
];

function getClosestResolution() {
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let closest = allowedResolutions[0];
    let minDiff = Infinity;

    allowedResolutions.forEach(res => {
        let diff = Math.abs(screenWidth - res.width) + Math.abs(screenHeight - res.height);
        if (diff < minDiff) {
            minDiff = diff;
            closest = res;
        }
    });

    return closest;
}

function resizeSite() {
    let closestRes = getClosestResolution();
    let scaleX = window.innerWidth / closestRes.width;
    let scaleY = window.innerHeight / closestRes.height;
    let scale = Math.min(scaleX, scaleY); // Maintain aspect ratio

    document.body.style.transform = `scale(${scale})`;
    document.body.style.transformOrigin = "top left";
    document.body.style.width = `${closestRes.width}px`;
    document.body.style.height = `${closestRes.height}px`;

    console.log(`Scaling to closest resolution: ${closestRes.width}x${closestRes.height}`);
}

window.addEventListener("resize", resizeSite);
resizeSite(); // Run on page load
