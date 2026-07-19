import { uid } from "../utils/pairs";

// spice: 'mild' | 'medium' | 'hot'
// type: 'truth' | 'dare'
// partnered: true if the prompt needs a second player (use {partner} in the text)
// duration: seconds to run a countdown for once revealed, or null for no timer
//   (round-based dares like "next two rounds" are left without a duration on purpose —
//   a timer doesn't make sense for those)

export const SPICE_META = {
  mild: { label: "Mild", tagline: "Flirty & fun", color: "#c9973f" },
  medium: { label: "Medium", tagline: "Turning up the heat", color: "#c9673f" },
  hot: { label: "Hot", tagline: "No holding back", color: "#a11f34" },
};

export const SPICE_ORDER = ["mild", "medium", "hot"];

export function createStarterPrompts() {
  return [
    // MILD
    { id: uid(), type: "truth", spice: "mild", partnered: false, duration: null, text: "What's the most adventurous thing you've ever done in the bedroom?" },
    { id: uid(), type: "truth", spice: "mild", partnered: false, duration: null, text: "Who in this room would you most like to kiss right now?" },
    { id: uid(), type: "truth", spice: "mild", partnered: false, duration: null, text: "What's a fantasy you've never told anyone here?" },
    { id: uid(), type: "truth", spice: "mild", partnered: false, duration: null, text: "On a scale of 1-10, how turned on are you right now?" },
    { id: uid(), type: "dare", spice: "mild", partnered: true, duration: 20, text: "Give {partner} a slow, lingering hug for 20 seconds." },
    { id: uid(), type: "dare", spice: "mild", partnered: false, duration: null, text: "Remove one item of clothing of your choice." },
    { id: uid(), type: "dare", spice: "mild", partnered: true, duration: null, text: "Whisper the nicest thing you notice about {partner} in their ear." },
    { id: uid(), type: "dare", spice: "mild", partnered: true, duration: null, text: "Trade one item of clothing with {partner}." },
    { id: uid(), type: "dare", spice: "mild", partnered: true, duration: 30, text: "Hold eye contact with {partner} for 30 seconds — no laughing." },
    { id: uid(), type: "dare", spice: "mild", partnered: false, duration: 15, text: "Give the room a slow, playful strip-tease reveal for 15 seconds." },
    // MEDIUM
    { id: uid(), type: "truth", spice: "medium", partnered: false, duration: null, text: "Describe your favourite fantasy in as much detail as you're comfortable with." },
    { id: uid(), type: "truth", spice: "medium", partnered: false, duration: null, text: "What's something you'd love to try tonight if the mood is right?" },
    { id: uid(), type: "truth", spice: "medium", partnered: false, duration: null, text: "Who here do you think has the best moves, and why?" },
    { id: uid(), type: "dare", spice: "medium", partnered: true, duration: null, text: "Sit on {partner}'s lap for the next two rounds." },
    { id: uid(), type: "dare", spice: "medium", partnered: true, duration: 15, text: "Give {partner} a slow kiss on the neck for 15 seconds." },
    { id: uid(), type: "dare", spice: "medium", partnered: false, duration: null, text: "Remove two items of clothing, one at a time, for the room." },
    { id: uid(), type: "dare", spice: "medium", partnered: true, duration: 30, text: "Feed {partner} something using only your mouth for 30 seconds — no hands." },
    { id: uid(), type: "dare", spice: "medium", partnered: true, duration: 45, text: "Give {partner} a slow shoulder and neck massage for 45 seconds." },
    { id: uid(), type: "dare", spice: "medium", partnered: false, duration: 30, text: "Dance as seductively as you can for the room for 30 seconds." },
    // HOT
    { id: uid(), type: "truth", spice: "hot", partnered: false, duration: null, text: "What's the one thing you're hoping happens later tonight?" },
    { id: uid(), type: "truth", spice: "hot", partnered: false, duration: null, text: "Describe, out loud, exactly what you'd like to do to the person you find most attractive here." },
    { id: uid(), type: "dare", spice: "hot", partnered: true, duration: 60, text: "Give {partner} a lap dance for 60 seconds." },
    { id: uid(), type: "dare", spice: "hot", partnered: true, duration: 60, text: "Make out with {partner} for 60 seconds." },
    { id: uid(), type: "dare", spice: "hot", partnered: false, duration: null, text: "Remove three items of clothing, one at a time, for the room." },
    { id: uid(), type: "dare", spice: "hot", partnered: true, duration: 30, text: "Blindfolded — You have 30 seconds and using touch only, try to identify {partner}." },
    { id: uid(), type: "dare", spice: "hot", partnered: false, duration: 20, text: "Strip down completely for 20 seconds, then get dressed again, leaving one item off." },
    { id: uid(), type: "dare", spice: "hot", partnered: true, duration: 20, text: "With your tongue play with a sensative area of {partner} for 20 seconds." },
  ];
}