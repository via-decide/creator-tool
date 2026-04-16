import { getDailyIdea } from "../engine/idea-engine.js";
import { generateScript } from "../engine/script-engine.js";
import { recordingChecklist } from "../engine/recording-engine.js";

document.getElementById("generateIdea").addEventListener("click", () => {
  const idea = getDailyIdea();
  document.getElementById("output").innerText = idea;
});

document.getElementById("generateScript").addEventListener("click", () => {
  const idea = getDailyIdea();
  const script = generateScript(idea);

  document.getElementById("output").innerText = JSON.stringify(script, null, 2);
});

document.getElementById("recordingChecklist").addEventListener("click", () => {
  document.getElementById("output").innerText = recordingChecklist.join("\n");
});
