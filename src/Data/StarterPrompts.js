import { uid } from "../utils/pairs";

// spice: 'mild' | 'medium' | 'hot'
// type: 'truth' | 'dare'
// partnered: true if the prompt needs a second player (use {partner} in the text)

export const SPICE_META = {
  mild: { label: "Mild", tagline: "Flirty & fun", color: "#c9973f" },
  medium: { label: "Medium", tagline: "Turning up the heat", color: "#c9673f" },
  hot: { label: "Hot", tagline: "No holding back", color: "#a11f34" },
};

export const SPICE_ORDER = ["mild", "medium", "hot"];

export const STARTER_PROMPTS = [
  // MILD
  { id: uid(), type: "truth", spice: "mild", partnered: false, text: "What's the most adventurous thing you've ever done in the bedroom?" },
  { id: uid(), type: "truth", spice: "mild", partnered: false, text: "Who in this room would you most like to kiss right now?" },
  { id: uid(), type: "truth", spice: "mild", partnered: false, text: "What's a fantasy you've never told anyone here?" },
  { id: uid(), type: "truth", spice: "mild", partnered: false, text: "On a scale of 1-10, how turned on are you right now?" },
  { id: uid(), type: "dare", spice: "mild", partnered: true, text: "Give {partner} a slow, lingering hug — no letting go for 20 seconds." },
  { id: uid(), type: "dare", spice: "mild", partnered: false, text: "Remove one item of clothing of your choice." },
  { id: uid(), type: "dare", spice: "mild", partnered: true, text: "Whisper the nicest thing you notice about {partner} in their ear." },
  { id: uid(), type: "dare", spice: "mild", partnered: true, text: "Trade one item of clothing with {partner}." },
  // MEDIUM
  { id: uid(), type: "truth", spice: "medium", partnered: false, text: "Describe your favourite fantasy in as much detail as you're comfortable with." },
  { id: uid(), type: "truth", spice: "medium", partnered: false, text: "What's something you'd love to try tonight if the mood is right?" },
  { id: uid(), type: "truth", spice: "medium", partnered: false, text: "Who here do you think has the best moves, and why?" },
  { id: uid(), type: "dare", spice: "medium", partnered: true, text: "Sit on {partner}'s lap for the next two rounds." },
  { id: uid(), type: "dare", spice: "medium", partnered: true, text: "Give {partner} a slow kiss on the neck." },
  { id: uid(), type: "dare", spice: "medium", partnered: false, text: "Remove two items of clothing, one at a time, for the room." },
  { id: uid(), type: "dare", spice: "medium", partnered: true, text: "Feed {partner} something using only your mouth — no hands." },
  // HOT
  { id: uid(), type: "truth", spice: "hot", partnered: false, text: "What's the one thing you're hoping happens later tonight?" },
  { id: uid(), type: "truth", spice: "hot", partnered: false, text: "Describe, out loud, exactly what you'd like to do to the person you find most attractive here." },
  { id: uid(), type: "dare", spice: "hot", partnered: true, text: "Give {partner} a 60-second lap dance." },
  { id: uid(), type: "dare", spice: "hot", partnered: true, text: "Make out with {partner} for a full two minutes." },
  { id: uid(), type: "dare", spice: "hot", partnered: false, text: "Strip down to whatever you're comfortable with and stay that way for three rounds." },
  { id: uid(), type: "dare", spice: "hot", partnered: true, text: "Blindfolded — try to identify {partner} by touch alone." },
];