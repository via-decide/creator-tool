import { analyzeVideo } from './feedback-engine/video-analyzer.js';
import { generateFeedback } from './feedback-engine/feedback-report.js';

function runAnalysis(transcript) {
  const data = analyzeVideo(transcript);
  const feedback = generateFeedback(data);

  console.log(feedback);
}

export { runAnalysis };
