async function runDailyPipeline() {
  const [{ getDailyIdea }, { generateScript }, { recordingChecklist }, { getClipMarkers }, { linkedinPost, spotifyDescription }] = await Promise.all([
    import("./engine/idea-engine.js"),
    import("./engine/script-engine.js"),
    import("./engine/recording-engine.js"),
    import("./pipeline/clip-engine.js"),
    import("./pipeline/post-engine.js")
  ]);

  const idea = getDailyIdea();
  const script = generateScript(idea);
  const clips = getClipMarkers();

  console.log("Today's Video Idea:");
  console.log(idea);

  console.log("\nScript Outline:");
  console.log(script);

  console.log("\nRecording Checklist:");
  console.log(recordingChecklist);

  console.log("\nClip Markers:");
  console.log(clips);

  console.log("\nPost Template:");
  console.log({
    linkedin: linkedinPost(idea),
    spotify: spotifyDescription(idea)
  });
}

runDailyPipeline();
