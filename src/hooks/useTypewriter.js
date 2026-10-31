import { useEffect, useState } from "react";
const PHRASES = [
  "React.js Frontend Developer",
  "MERN Stack Developer",
  "UI/UX Focused Engineer",
  "AI & LLM Integration Explorer"
];
export function useTypewriter(phrases = PHRASES, typeMs = 55, deleteMs = 28) {
  const [text, setText] = useState(phrases[0]);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("holding");
  useEffect(() => {
    const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    let timer;
    if (phase === "holding") {
      timer = setTimeout(() => setPhase("deleting"), 1900);
    } else if (phase === "deleting") {
      const current = phrases[index];
      if (text.length > 0) {
        timer = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteMs);
      } else {
        const next = (index + 1) % phrases.length;
        setIndex(next);
        setPhase("typing");
      }
    } else {
      const next = phrases[index];
      if (text.length < next.length) {
        timer = setTimeout(() => setText(next.slice(0, text.length + 1)), typeMs);
      } else {
        setPhase("holding");
      }
    }
    return () => clearTimeout(timer);
  }, [text, index, phase, phrases, typeMs, deleteMs]);
  return text;
}
