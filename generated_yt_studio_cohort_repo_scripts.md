# Decide Engine Interactive Course — Alchemist Documentary Pack

## Structure Alignment (Applied)
This script now matches your interactive architecture and your provided transcript style:
- Module starts with **1 Problem/Kickstart video**.
- Follow-up expands to **4 branch episodes** (A/B/C/D).
- Each branch can then expand into **4 sub videos** for deeper decision training.
- Viewer choice in comments directs next releases.

---

## ALCHEMIST DOCUMENTARY — VIDEO V01
**Title:** I Built Tinder for Surveys — This Is How It Started  
**Total duration:** 4:00 (240s)  
**Narrator style:** single founder voice, conversational, direct, slightly fast  
**Pace target:** 145 WPM average with section pacing as provided  

### NotebookLM Performance Instructions
- Read as one founder speaking directly to camera.
- Respect each timestamp and section length.
- Pause briefly between sections.
- No music references, no co-host voice.
- Honest, clear, slightly fast delivery.

---

### [00:00 – 00:03] INTRO (Silent title card)
**Narration:**
- **[SILENCE — 3 seconds]**

---

### [00:03 – 00:23] HOOK (20s | ~48 words | punchy)
Twelve responses. Out of two hundred. That is what I got from a Google Form I spent three hours writing. Twelve people responded. So I thought — what if answering a survey felt like swiping on Tinder? Sounds dumb. But I built it anyway. In one afternoon.

---

### [00:23 – 01:23] STORY (60s | ~145 words | measured)
I was doing user research for something else entirely. Sent out a Google Form. Got twelve responses out of two hundred. Twelve. And I'm sitting there thinking — people aren't lazy, they just hate the format. A wall of text with radio buttons is a punishment. Nobody wants to scroll through twenty questions stacked on a white page.

But a single card with one question? That's different. That's a completely different psychological experience. You swipe, you move forward, you feel like you're doing something meaningful. The question doesn't feel like work. It feels like a choice you're actively making.

I know it sounds obvious in hindsight. It wasn't obvious at the time. At the time it sounded genuinely dumb. I almost didn't build it. I built it in an afternoon just to see if the swipe mechanic felt right. It did. Immediately.

---

### [01:23 – 02:13] REPO WALKTHROUGH (50s | ~121 words | technical/slower)
First repo: swipe-survey. Look at the commit history — it starts with a single App.jsx. That is the entire product. One file.

The core is a card stack component. Each question renders as a card sitting on top of the previous one. You drag it — there is a rotation transform that tracks the drag position — and past a threshold it snaps left or right. That is the whole mechanic.

The entire repo is maybe six files. No Firebase. No Supabase. No auth layer. No backend at all. Just the swipe mechanic working correctly on a phone screen. I shipped that and sent it to a hundred and sixty people. Then I waited.

---

### [02:13 – 02:53] DECISION MOMENT (40s | ~97 words | tension)
A hundred and sixty three people finished it. Not twelve. A hundred and sixty three.

And I remember sitting there looking at that number thinking — okay. This actually works. The swipe mechanic is real. People complete the survey. Now what do I do with that?

Because right now it is a cool demo. It is not a product. There is no backend. There is no data being stored. There is no business model. And I have got four completely different directions I could take this thing. Each one valid. Each one leads somewhere entirely different. I had to pick one.

---

### [02:53 – 03:33] DECISION (40s | ~97 words | deliberate)
The swipe mechanic works. What gets built on top of it?

Option A: Build the Question Engine. Add branching logic — questions that respond based on what you have already answered.

Option B: Go Design Mode. Make it visually stunning. Something people share because it looks incredible.

Option C: Add the Backend. Build proper data tracking, analytics, actual response storage.

Option D: Find a Real Customer. Stop building internally. Go find an institution willing to pay for this.

Four directions. Four completely different companies depending on which one I chose first.

---

### [03:33 – 04:00] OUTRO (27s | ~65 words | warm close)
Drop your answer in the comments — A, B, C, or D. I read every single one, I am not skimming, I am actually reading and considering each response carefully. Whichever gets the most votes is the next episode I publish. You are not just watching this build. You are actively directing it. See you in the next one.

---

## YouTube Interaction Layer (for V01)

### Title
I Built Tinder for Surveys — This Is How It Started

### Description
I sent a survey to 200 people and only 12 replied.
So I rebuilt surveys as swipe cards in one afternoon.
163 people finished the test.

Now there are 4 possible directions:
- A: Question Engine
- B: Design Mode
- C: Backend + Analytics
- D: Real Paying Customer

Comment A, B, C, or D.
Top-voted path becomes the next episode.

### Pinned Comment
Vote your path:
`V01 > Option [A/B/C/D] > Why`

I’ll ship the highest-voted branch as V02.

---

## Branch Episode Plan (V02–V05)
These 4 are the immediate "main" branch videos after V01:
- **V02-A:** Question Engine First
- **V03-B:** Design Mode First
- **V04-C:** Backend First
- **V05-D:** Customer First

Each branch video should end with 4 sub-video choices:
1. Fast implementation
2. Deep architecture
3. Team/process version
4. Recovery/failure-mode version

This preserves your course rule: each main branch expands into 4 sub videos.

---

## Studio/Cohort Repo Authoring Format
For each episode markdown file in the cohort repo, use frontmatter:

```yaml
video_id: "V01"
module_id: "ALCHEMIST-M01"
level: "kickstart" # kickstart | main | sub
branch: "root" # A | B | C | D | root
duration_sec: 240
cta: "Comment A/B/C/D"
next_paths: ["V02-A", "V03-B", "V04-C", "V05-D"]
```

Review checklist:
- Decision point explicit?
- Options mutually exclusive?
- Tradeoff clear?
- Next path CTA included?
- Spoken cadence fits section timing?

---

## Transcript-Ready Note
You said you will share transcripts as base for module voice. Once shared, keep structure identical and only adapt:
- phrasing
- analogies
- pacing emphasis

Do **not** remove decision forks; they are the learning mechanic.
