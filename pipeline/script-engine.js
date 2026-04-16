function generateScript(topic) {
  return {
    hook:
      "Everyone is talking about " +
      topic +
      ". But very few people actually understand the system behind it.",
    body: [
      "Explain the concept",
      "Show your real build experience",
      "Explain why most builders miss this",
      "Show what you're experimenting with"
    ],
    closing:
      "This is something I'm exploring while building my AI ecosystem."
  };
}

module.exports = { generateScript };
