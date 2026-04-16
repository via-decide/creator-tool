function linkedinPost(topic) {
  return `${topic}

Most people talk about AI.

Very few people build systems.

Today I shared a short video exploring this idea.

Visual deep dive:
(YouTube link)

What are you building right now?`;
}

function spotifyDescription(topic) {
  return `In this episode I expand on today's video about:

${topic}

The difference between talking about AI and actually building systems.`;
}

module.exports = { linkedinPost, spotifyDescription };
