
function getMainScreen() {
  const currentTime = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  return `
  <br>--------------------- MAIN MENU ---------------------
  0 Info      - Personal information         USERID RV1
  1 Studies   - Info about my studies        TIME ${currentTime}
  2 Contact   - My contact information
  3 Help      - See list of commands<br><br>
  `;
}

function getInfoScreen() {
  return `
  <br>--------------------- INFO MENU ---------------------
  1 Help
  2 Info
  `;
}

function getStudiesScreen() {
  return `
  <br>--------------------- STUDIES MENU --------------------
  (University)
  Hogent Bachelor's degree CS - Mainframe Expert
  IBM Z Student Ambassador 24/25<br>
  (Highschool)
  SMI Networking and IT
  `;
}

function getContactScreen() {
  return `
  <br>--------------------- CONTACT MENU --------------------
  Linked-In: <a href="https://www.linkedin.com/in/robbevanherpe/" target="_blank">www.linkedin.com/in/robbevanherpe</a>
  Email: <a href="mailto:robbe.van.herpe@outlook.com" target="_blank">robbe.van.herpe@outlook.com</a>
  <br><br><br>
  `;
}

function getHelpScreen() {
  return `
  <br>--------------------- HELP MENU --------------------
  1 Help
  2 Info
  `;
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
          terminal.innerHTML += "<br>" + commands[input]() + "<br>Option ===>";
      } else {
          terminal.innerHTML += "<br>Unknown command. Type 'Help' for a list of commands.<br>Option ===>";
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

