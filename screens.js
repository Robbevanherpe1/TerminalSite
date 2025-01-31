
function getMainScreen() {
  const currentTime = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  return `
  <br>--------------------- MAIN MENU ---------------------
  0 Info      - Personal information         USERID RV1
  1 Studies   - Info about my studies        TIME ${currentTime}
  2 Projects  - My side Projects
  3 Contact   - My contact information
  4 Help      - See list of commands<br>
  `;
}

function getInfoScreen() {
  return `
  <br>--------------------- INFO MENU ---------------------
  Hi i'm Robbe,
  a student at Hogent specializing in the Mainframe 
  Expert program.

  My focus is on programming in COBOL and PL/I, and
  I'm passionate about building a career in the 
  mainframe field.
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

function getProjectScreen() {
  return `
  <br>--------------------- PROJECT MENU --------------------
  AI & Data engineering project: <a href="https://github.com/Robbevanherpe1/DEP1-2023-2024-groep30" target="_blank">
  https://github.com/Robbevanherpe1/DEP1-2023-2024
  -groep30</a>
  Indie game: <a href="https://github.com/Robbevanherpe1/Slime_World" target="_blank">
  https://github.com/Robbevanherpe1/Slime_World</a>
  pl/1 Learn site: <a href="https://github.com/Robbevanherpe1/pl1-learn" target="_blank">
  https://github.com/Robbevanherpe1/pl1-learn</a>
  `;
}

function getContactScreen() {
  return `
  <br>--------------------- CONTACT MENU --------------------
  Linked-In: <a href="https://www.linkedin.com/in/robbevanherpe/" target="_blank">www.linkedin.com/in/robbevanherpe</a>
  Email: <a href="mailto:robbe.van.herpe@outlook.com" target="_blank">robbe.van.herpe@outlook.com</a>
  <br><br>
  `;
}

function getHelpScreen() {
  return `
  <br>--------------------- HELP MENU --------------------
  (Commands)
  "Return" --> Go back to menu
  "0" or "Info" --> Gives and aboutme page  
  "1" or "Studies" --> Information about my studies 
  "2" or "Projects" --> Side Projects i have done
  "3" or "Contact" --> Gives this overview
  `;
}


const commands = {
  "LOGON": () => getMainScreen(),
  "Return": () => getMainScreen(),

  "0": () => getInfoScreen(),
  "Info": () => getInfoScreen(),

  "1": () => getStudiesScreen(),
  "Studies": () => getStudiesScreen(),

  "2": () => getProjectScreen(),
  "Projects": () => getProjectScreen(),

  "3": () => getContactScreen(),
  "Contact": () => getContactScreen(),

  "4": () => getHelpScreen(),
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

