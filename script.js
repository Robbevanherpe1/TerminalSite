const terminal = document.getElementById("terminal")
const clockTime = document.getElementById("time")
const clockDay = document.getElementById("day")

const commands = {
  "help": "Available commands:\n- help\n- about\n- projects\n- contact",
  "about": "Hello, I'm [Your Name]. A developer passionate about retro interfaces!",
  "projects": "1. Project One\n2. Project Two\n3. Project Three",
  "contact": "Email: your@email.com\nGitHub: github.com/yourprofile"
}

const bootSequence = [
  "Mem check... 8192 of 8192 bytes OK",
  "Booting TN-32 Emulator...",
  "Loading system...",
  "Ready.\n"
]

function typeEffect(element, text, speed, callback) {
  let i = 0
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(typing, speed)
    } else if (callback) {
      callback()
    }
  }
  typing()
}

function scrollToBottom() {
  setTimeout(() => {
    terminal.scrollTop = terminal.scrollHeight;
  }, 10);
}

function boot() {
  terminal.innerHTML = ""
  let i = 0
  function nextLine() {
    if (i < bootSequence.length) {
      typeEffect(terminal, bootSequence[i] + "\n", 50, nextLine)
      i++
    } else {
      terminal.innerHTML += ">"
    }
  }
  nextLine()
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const lines = terminal.innerText.split("\n")
    const lastLine = lines[lines.length - 1]
    const input = lastLine.replace(">", "").trim()
    if (commands[input]) {
      terminal.innerHTML += "\n" + commands[input] + "\n>"
    } else {
      terminal.innerHTML += "\nUnknown command. Type 'help' for a list of commands.\n>"
    }
    event.preventDefault();
    scrollToBottom();
  } else if (event.key.length === 1) {
    terminal.innerHTML += event.key;
    scrollToBottom();
  } else if (event.key === "Backspace") {
    terminal.innerHTML = terminal.innerHTML.slice(0, -1)
    event.preventDefault();
    scrollToBottom();
  }
})

function updateClock() {
  const now = new Date()
  const hours = String(now.getHours()).padStart(2, "0")
  const minutes = String(now.getMinutes()).padStart(2, "0")
  clockTime.textContent = `${hours}:${minutes}`

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = days[now.getDay()];
  clockDay.textContent = `${day}`
}
setInterval(updateClock, 1000)
updateClock()

boot()
