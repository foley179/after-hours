import { uid } from "../utils/pairs";

// Forfeits should be things anyone in the room can actually do on the spot —
// no skill, no performance anxiety, no "opt in" required. Keep additions
// in that spirit rather than anything performative like dancing/singing.

export function createStarterForfeits() {
  return [
    { id: uid(), text: "Take a drink." },
    { id: uid(), text: "Remove one item of clothing." },
    { id: uid(), text: "Take a playful spank." },
    { id: uid(), text: "Give everyone in the room a compliment." },
    { id: uid(), text: "Let the group pick a dare." },
  ];
}