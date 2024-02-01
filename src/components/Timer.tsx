import { useEffect, useState } from "react";

interface TimerProps {
    setCurrentQuestion:(value: React.SetStateAction<number>) => void
    currentQuestion:number
}

export default function Timer({ setCurrentQuestion, currentQuestion }:TimerProps) {
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    if (timer === 0) return setCurrentQuestion((prev) => prev + 1);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setCurrentQuestion]);

  useEffect(() => {
    setTimer(15);
  }, [currentQuestion]);
  return timer;
}