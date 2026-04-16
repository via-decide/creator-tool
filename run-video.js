async function main() {
  const video = process.argv[2];

  if (!video) {
    console.error("Usage: node run-video.js <video-file>");
    process.exit(1);
  }

  const { runPipeline } = await import("./pipeline/video-pipeline.js");
  await runPipeline(video);
}

main();
