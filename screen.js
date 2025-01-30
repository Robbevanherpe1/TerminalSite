const commands = {
    "help": "Available commands:\n- help\n- about\n- projects\n- contact",
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