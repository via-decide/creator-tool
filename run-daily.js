const { generateIdeas } = require("./pipeline/idea-engine.js");
const { generateScript } = require("./pipeline/script-engine.js");
const { checklist } = require("./pipeline/recording-checklist.js");
const { clipMarkers } = require("./pipeline/clip-generator.js");
const {
  linkedinPost,
  spotifyDescription
} = require("./pipeline/post-generator.js");

const ideas = generateIdeas();
const dayIndex = (new Date().getDate() - 1) % ideas.length;
const todayIdea = ideas[dayIndex];
const script = generateScript(todayIdea);
const clips = clipMarkers();

console.log("Today's Video Idea:");
console.log(todayIdea);

console.log("\nScript Structure:");
console.log(script);

console.log("\nRecording Checklist:");
console.log(checklist);

console.log("\nClip Markers:");
console.log(clips);

console.log("\nPost Template:");
console.log({
  linkedin: linkedinPost(todayIdea),
  spotify: spotifyDescription(todayIdea)
});
