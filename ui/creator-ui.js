import { getDailyIdea } from "../engine/idea-engine.js";
import { generateScript } from "../engine/script-engine.js";
import { recordingChecklist } from "../engine/recording-engine.js";

const output = document.getElementById("creatorOutput");

document.getElementById("btnIdea").onclick = () => {
  const idea = getDailyIdea();
  output.textContent = "Today's Idea:\n\n" + idea;
};

document.getElementById("btnScript").onclick = () => {
  const idea = getDailyIdea();
  const script = generateScript(idea);
  output.textContent = "Script Structure:\n\n" + JSON.stringify(script, null, 2);
};

document.getElementById("btnChecklist").onclick = () => {
  output.textContent = "Recording Checklist:\n\n" + recordingChecklist.join("\n");
};
