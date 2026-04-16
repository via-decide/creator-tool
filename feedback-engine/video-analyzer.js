export function analyzeVideo(transcript) {
  return {
    duration: transcript.timestamps.length,
    sentences: transcript.text.split('.')
  };
}
