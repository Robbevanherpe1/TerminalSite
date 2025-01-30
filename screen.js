
screen_Main = [
    "\n0 Info      - Personal information",
    "1 Studies   - Info about my studies",
    "2 Contact   - My contact information",
    "3 Help      - See list of commands\n"
    

]

screen_Help = [
    "1 help",
    "2 info"
]


const commands = {
    "LOGON" : screen_Main.join("\n"),
    "help": screen_Help.join("\n"),

    
    "about": "Hello, I'm [Your Name]. A developer passionate about retro interfaces!",
    "projects": "1. Project One\n2. Project Two\n3. Project Three",
    "contact": "Email: your@email.com\nGitHub: github.com/yourprofile"
}

function scrollToBottom() {
 setTimeout(() => {
   terminal.scrollTop = terminal.scrollHeight;
  }, 10);
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      const lines = terminal.innerText.split("\n")
      const lastLine = lines[lines.length - 1]
      const input = lastLine.replace("Option ===>", "").trim()
      if (commands[input]) {
        terminal.innerHTML += "\n" + commands[input] + "\nOption ===>"
      } else {
        terminal.innerHTML += "\nUnknown command. Type 'help' for a list of commands.\nOption ===>"
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