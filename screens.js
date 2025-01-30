
screen_Main = [
    "\n------------------- MAIN MENU --------------------",
    "\n0 Info      - Personal information",
    "1 Studies   - Info about my studies",
    "2 Contact   - My contact information",
    "3 Help      - See list of commands\n\n"
    

]

screen_Info = [
  "1 help",
  "2 info"
]

screen_Studies = [
  "1 help",
  "2 info"
]

screen_Contact = [
  "1 help",
  "2 info"
]

screen_Help = [
  "1 help",
  "2 info"
]

screen_Help = [
  "1 help",
  "2 info"
]




const commands = {
    "LOGON" : screen_Main.join("\n"),
    "Return" : screen_Main.join("\n"),

    "0" : screen_Info.join("\n"),
    "Info" : screen_Info.join("\n"),

    "1" : screen_Studies.join("\n"),
    "Studies" : screen_Studies.join("\n"),

    "2" : screen_Contact.join("\n"),
    "Contact" : screen_Contact.join("\n"),

    "3" : screen_Help.join("\n"),
    "Help" : screen_Help.join("\n")

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
        terminal.innerHTML += "\nUnknown command. Type 'Help' for a list of commands.\nOption ===>"
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