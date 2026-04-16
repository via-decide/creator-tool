export function generateScript(topic) {
  return {
    hook:
      "Everyone is talking about " +
      topic +
      ". But very few people are actually building systems.",
    segments: [
      "Explain the problem",
      "Explain the architecture",
      "Explain your experiment",
      "Share insight"
    ],
    closing:
      "This is something I'm exploring while building my AI ecosystem."
  };
}
