export function detectClips(transcript) {
  if (!transcript || !transcript.text) {
    return [];
  }

  return [
    { start: 5, end: 25, label: "Hook" },
    { start: 40, end: 70, label: "Core Insight" },
    { start: 80, end: 110, label: "Key Idea" }
  ];
}
