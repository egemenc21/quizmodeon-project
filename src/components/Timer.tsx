import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../hooks";
import {increaseCurrentQuestion, selectCurrentQuestion} from "../redux/user";

interface TimerProps {
  selectedAnswer: {id: number; text: string; isCorrect: boolean} | null;
}

export default function Timer({
  selectedAnswer,
}: TimerProps) {
  const [timer, setTimer] = useState(25);
  const [pause, setPause] = useState(false);
  const currentQuestion = useAppSelector(selectCurrentQuestion)
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (timer === 0) dispatch(increaseCurrentQuestion());
    const interval = setInterval(() => {
      if (!pause) {
        setTimer((prev) => prev - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, pause]);

  // When answer is selected, timer stops for a moment
  useEffect(() => {
    if (selectedAnswer != null) setPause(true);
  }, [selectedAnswer]);

  // On each question, timer resets
  useEffect(() => {
    setTimer(25);
    setPause(false);
  }, [currentQuestion]);

  return (
    <span className="flex justify-center items-center w-[70px] h-[70px] mb-4 text-primary border-2 text-xl border-primary rounded-full border-solid">
      {timer}
    </span>
  );
}
