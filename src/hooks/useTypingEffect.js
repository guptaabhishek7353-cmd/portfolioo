import { useEffect, useMemo, useState } from "react";

export function useTypingEffect(words, speed = 85, pause = 1300) {
  const phrases = useMemo(() => words.filter(Boolean), [words]);
  const [index, setIndex] = useState(0);
  const [letter, setLetter] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!phrases.length) return undefined;

    const current = phrases[index % phrases.length];
    const timeout = window.setTimeout(
      () => {
        if (!deleting && letter < current.length) {
          setLetter((value) => value + 1);
          return;
        }

        if (!deleting && letter === current.length) {
          setDeleting(true);
          return;
        }

        if (deleting && letter > 0) {
          setLetter((value) => value - 1);
          return;
        }

        setDeleting(false);
        setIndex((value) => (value + 1) % phrases.length);
      },
      !deleting && letter === current.length ? pause : deleting ? speed / 2 : speed
    );

    return () => window.clearTimeout(timeout);
  }, [deleting, index, letter, pause, phrases, speed]);

  if (!phrases.length) return "";
  return phrases[index % phrases.length].slice(0, letter);
}
