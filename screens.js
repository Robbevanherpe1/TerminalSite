
function getMainScreen() {
  const currentTime = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  return [
      "\n--------------------- MAIN MENU ---------------------",
      "\n0 Info      - Personal information          USERID RV1",
      `1 Studies   - Info about my studies         TIME ${currentTime}`,
      "2 Contact   - My contact information",
      "3 Help      - See list of commands\n\n"
  ].join("\n");
}


function getInfoScreen() {
  return [
      "\n--------------------- INFO MENU ---------------------",
      "1 Help",
      "2 Info\n"
  ].join("\n");
}

function getStudiesScreen() {
  return [
      "\n--------------------- STUDIES MENU ---------------------",
      "1 Help",
      "2 Info\n"
  ].join("\n");
}

function getContactScreen() {
  return [
      "\n--------------------- CONTACT MENU ---------------------",
      "1 Help",
      "2 Info\n"
  ].join("\n");
}

function getHelpScreen() {
  return [
      "\n--------------------- HELP MENU ---------------------",
      "1 Help",
      "2 Info\n"
  ].join("\n");
}


const commands = {
  "LOGON": () => getMainScreen(),
  "Return": () => getMainScreen(),

  "0": () => getInfoScreen(),
  "Info": () => getInfoScreen(),

  "1": () => getStudiesScreen(),
  "Studies": () => getStudiesScreen(),

  "2": () => getContactScreen(),
  "Contact": () => getContactScreen(),

  "3": () => getHelpScreen(),
  "Help": () => getHelpScreen()
};


function scrollToBottom() {
 setTimeout(() => {
   terminal.scrollTop = terminal.scrollHeight;
  }, 10);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
      const lines = terminal.innerText.split("\n");
      const lastLine = lines[lines.length - 1];
      const input = lastLine.replace("Option ===>", "").trim();

      if (commands[input]) {
          terminal.innerHTML += "\n" + commands[input]() + "\nOption ===>";
      } else {
          terminal.innerHTML += "\nUnknown command. Type 'Help' for a list of commands.\nOption ===>";
      }
      
      event.preventDefault();
      scrollToBottom();
  } else if (event.key.length === 1) {
      terminal.innerHTML += event.key;
      scrollToBottom();
  } else if (event.key === "Backspace") {
      terminal.innerHTML = terminal.innerHTML.slice(0, -1);
      event.preventDefault();
      scrollToBottom();
  }
});
