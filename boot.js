const terminal = document.getElementById("terminal")
const clockTime = document.getElementById("time")
const clockDay = document.getElementById("day")

const bootSequence = [
  "Mem check... 8192 of 8192 bytes OK",
  "Booting TN-32 Emulator...",
  "Loading system...",
  "Ready.",
  "      \t\t\t(type LOGON)"

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

function boot() {
  terminal.innerHTML = ""
  let i = 0
  function nextLine() {
    if (i < bootSequence.length) {
      typeEffect(terminal, bootSequence[i] + "\n", 50, nextLine)
      i++
    } else {
      terminal.innerHTML += "Option ===>"
    }
  }
  nextLine()
}

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
