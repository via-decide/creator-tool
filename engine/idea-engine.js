export function getDailyIdea() {
  const ideas = [
    "Talking About AI vs Building With AI",
    "The Difference Between Answer Systems and Reasoning Systems",
    "Why Most AI Builders Never Ship",
    "My Local-First AI Stack",
    "Inside My Founder Workspace",
    "The Problem With Prompt Engineering",
    "Why I Built My Own AI Stack",
    "The Future of Local-First AI",
    "Building a Thinking System",
    "Founder Operating Systems"
  ];

  const day = new Date().getDate();

  return ideas[day % ideas.length];
}
