import { transcribe } from "../video-engine/transcription.js";
import { generateCaptions } from "../video-engine/caption-engine.js";
import { exportClips } from "../export/export-clips.js";

export async function runPipeline(videoFile) {
  const transcript = await transcribe(videoFile);
  const clips = exportClips(videoFile, transcript);
  const captions = generateCaptions(transcript);

  return {
    transcript,
    clips,
    captions
  };
}
