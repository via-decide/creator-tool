import { detectClips } from "../video-engine/clip-detector.js";

export function exportClips(video, transcript) {
  const clips = detectClips(transcript);

  clips.forEach((clip) => {
    console.log("Exporting", clip.label, `(${clip.start}s-${clip.end}s)`);
  });

  return clips;
}
