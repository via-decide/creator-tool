export function loadVideo(file) {
  return {
    file,
    duration: null,
    frames: []
  };
}

export function trimVideo(video, start, end) {
  return {
    ...video,
    trimStart: start,
    trimEnd: end
  };
}

export function exportClip(video) {
  console.log("Exporting clip", video.file ?? "unknown");
}
