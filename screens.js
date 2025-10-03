
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
  Expert program with hands-on experience
  in PL/I development,JCL, REXX, Db2, and VSAM.

  Skilled in advocacy, event organization, 
  community leadership, and peer engagement. 
  `;
}

function getStudiesScreen() {
  return `
  <br>--------------------- STUDIES MENU --------------------
  (University)
  Hogent Bachelor's degree CS - Mainframe Expert
  IBM Z Student Ambassador 24/25 - 25/26<br>
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
  "x" or "Menu" --> Go back to menu
  "0" or "Info" --> Gives and aboutme page  
  "1" or "Studies" --> Information about my studies 
  "2" or "Projects" --> Side Projects i have done
  "3" or "Contact" --> Gives this overview
  `;
}

function getEasterEggScreen() {
  return `
  <br>------------------ EASTER EGG ------------------
   Oh, you found this? You must be quite the curious    one!
   Here’s a secret: Every great coder started by poking  around where they shouldn't. Keep going!
  <br>Now, since you're here... try typing "fortune" for a   little surprise. 
  `;
}

function getFortuneScreen() {
  const fortunes = [
    "You will debug a tricky bug today and feel like\ta wizard.",
    "Code fast, commit often, and push your dreams\tforward!",
    "Beware of semicolons and missing brackets...",
    "A new COBOL feature will blow your mind soon",
    "Someone is secretly impressed by your coding\tskills."
  ];
  return `<br><br><br><br><br><br>🔮${fortunes[Math.floor(Math.random() * fortunes.length)]}🔮<br><br><br>`;
}



const commands = {
  "logon": () => getMainScreen(),
  "menu": () => getMainScreen(),
  "x": () => getMainScreen(),
  "return": () => getMainScreen(),

  "0": () => getInfoScreen(),
  "info": () => getInfoScreen(),

  "1": () => getStudiesScreen(),
  "studies": () => getStudiesScreen(),

  "2": () => getProjectScreen(),
  "projects": () => getProjectScreen(),

  "3": () => getContactScreen(),
  "contact": () => getContactScreen(),

  "help": () => getHelpScreen(),

  "0123": () => getEasterEggScreen(),
  "fortune": () => getFortuneScreen()
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
      const input = lastLine.replace("Option ===>", "").trim().toLowerCase();

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

