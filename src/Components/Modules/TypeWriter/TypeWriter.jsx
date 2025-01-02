import { useEffect, useState } from "react";

export default function TypeWriter({ texts, speed = 100, delay = 2000 }) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delay);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, prev.length - 1));
        setCharIndex((prev) => prev - 1);
      }, speed);
    } else {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev + texts[currentIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, speed);
    }

    if (!isDeleting && texts[currentIndex].length === currentText.length) {
      setIsWaiting(true);
    }

    if (currentText === "" && isDeleting) {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, charIndex, isWaiting, isDeleting]);

  return <span>{currentText}</span>;
}
