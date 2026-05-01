const STYLE_KEYWORDS = {
  watercolor: ['watercolor', 'water color', 'aquarelle'],
  photorealistic: ['photorealistic', 'realistic', 'photo', 'photograph'],
  anime: ['anime', 'manga'],
  pixel: ['pixel art', '8-bit', '16-bit', 'pixel'],
  sketch: ['sketch', 'pencil', 'line art', 'drawing'],
  oil: ['oil painting', 'oil paint', 'classical'],
  cyberpunk: ['cyberpunk', 'neon', 'futuristic'],
  minimalist: ['minimalist', 'minimal', 'flat'],
  cinematic: ['cinematic', 'film', 'movie still']
};

const ASPECT_KEYWORDS = {
  '16:9': ['landscape', 'wide', 'panoramic', '16:9', 'widescreen'],
  '9:16': ['portrait', 'vertical', '9:16', 'phone'],
  '1:1': ['square', '1:1', 'instagram']
};

const NEGATIVE_DEFAULTS = ['blurry', 'low quality', 'distorted', 'watermark'];

function detectByKeywords(text, table, fallback) {
  const lower = text.toLowerCase();
  for (const [key, needles] of Object.entries(table)) {
    if (needles.some((n) => lower.includes(n))) return key;
  }
  return fallback;
}

function extractSubject(text) {
  return text
    .replace(/^(an?|the)\s+/i, '')
    .split(/[,.;]/)[0]
    .trim()
    .slice(0, 120);
}

function seedFromString(text) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h) % 1000000;
}

export function buildImageBrief(rawIdea, opts = {}) {
  if (!rawIdea || typeof rawIdea !== 'string' || !rawIdea.trim()) return null;
  const text = rawIdea.trim();
  const style = opts.style || detectByKeywords(text, STYLE_KEYWORDS, 'photorealistic');
  const aspect = opts.aspect || detectByKeywords(text, ASPECT_KEYWORDS, '1:1');
  const subject = extractSubject(text);
  const negatives = Array.isArray(opts.negatives) ? opts.negatives : NEGATIVE_DEFAULTS;
  const finalPrompt = `${subject}, ${style} style, ${aspect} aspect, high detail`;
  return {
    type: 'image',
    subject,
    style,
    aspect,
    details: text,
    negatives,
    finalPrompt,
    format: opts.format || 'png',
    seed: seedFromString(text)
  };
}

export function structureImagePrompt(rawIdea, opts = {}) {
  const brief = buildImageBrief(rawIdea, opts);
  return brief ? brief.finalPrompt : null;
}
