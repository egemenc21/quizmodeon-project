import {selectUser} from "../redux/user";
import {useAppSelector} from "../hooks";
import Navigation from "../components/Navigation";
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import data from "../data/questions.json";
import Option from "../components/Option";
import Timer from "../components/Timer";

export interface OptionProps {
  id: number;
  text: string;
  isCorrect: boolean;
}

export interface QuestionProps {
  id: number;
  text: string;
  options: OptionProps[];
}
const Answers = [
  {
    id: 0,
    text: "",
    isCorrect: false,
  },
];

function Quiz() {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [selectedAnswers, setSelectedAnswers] = useState<{ id: number; text: string; isCorrect: boolean; }[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<{
    id: number;
    text: string;
    isCorrect: boolean;
  } | null>(null);
  const [score, setScore] = useState(0);
  const [endGame, setEndGame] = useState(false);
  const [onClick, setOnClick] = useState(false);

  useEffect(() => {
    if (user === "") navigate("/");
    if (currentQuestion === questions.length) setEndGame(true);
    // setSelectedAnswers((prev) => [...prev, selectedAnswer!]);

    // console.log(selectedAnswers)
  }, [user, navigate, currentQuestion]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCurrentQuestion((prev) => prev + 1);

  //     console.log(currentQuestion,'passed')
  //   }, 10000);
  // }, [])

  const questions: QuestionProps[] = data.questions;
  const question = questions[currentQuestion];

  console.log({selectedAnswer, currentQuestion});

  return (
    <section className="bg-secondary w-full h-[100vh]">
      <Navigation user={user} />
      <img
        src="https://cmo-templates.s3.amazonaws.com/quizmodeon/brand/logo.png"
        alt="Quiz Mode On"
        className="w-[150px] mx-auto pt-5"
      />
      <Timer
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />
      {endGame ? (
        <h1 className="p-4 text-2xl text-center">
          Your score is : <br /> {score} / {questions.length}
        </h1>
      ) : null}
      <div className="text-center">
        {question?.text} {currentQuestion}
      </div>
      {question?.options.map((option) => (
        <Option
          key={option.id}
          option={option}
          setSelectedAnswer={setSelectedAnswer}
          setCurrentQuestion={setCurrentQuestion}
          selectedAnswer={selectedAnswer}
          setScore={setScore}
          setEndGame={setEndGame}
          onClick={onClick}
          setOnClick={setOnClick}
        />
      ))}
    </section>
  );
}

export default Quiz;
