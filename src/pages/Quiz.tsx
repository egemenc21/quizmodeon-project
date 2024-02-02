import {selectUser, selectScore, selectCurrentQuestion} from "../redux/user";
import {useAppSelector} from "../hooks";
import Navigation from "../components/Navigation";
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import data from "../data/questions.json";
import Option from "../components/Option";
import Timer from "../components/Timer";
import EndScreen from "../components/EndScreen";
import {motion} from "framer-motion";

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

const variant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeIn",
    },
  },
  
};

function Quiz() {
  const [endGame, setEndGame] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(false);


  const user = useAppSelector(selectUser);
  const currentQuestion = useAppSelector(selectCurrentQuestion);
  const score = useAppSelector(selectScore);
 

  const navigate = useNavigate();
  const questions: QuestionProps[] = data.questions;
  const question = questions[currentQuestion];


  useEffect(() => {
    if (user === "") navigate("/"); // if user is not authenticated, navigate to the log-in page  
    if (currentQuestion === questions.length) setEndGame(true);
  }, [user, navigate, currentQuestion, setEndGame, questions.length]);

  return (
    <section className="bg-secondary w-full h-[100vh]">
      <Navigation user={user} score={score} />
      <img
        src="https://cmo-templates.s3.amazonaws.com/quizmodeon/brand/logo.png"
        alt="Quiz Mode On"
        className="w-[150px] mx-auto pt-5"
      />

      {endGame ? (
        <EndScreen questions={questions} />
      ) : (
        <div className="w-[90%] md:w-[60%] mx-auto">
          <Timer selectedAnswer={selectedAnswer} />
          <h2 className="text-center py-2">{question?.text}</h2>          
            <motion.div
              variants={variant}
              initial="initial"
              animate="animate"
              className="flex flex-col justify-center "
            >
              {question?.options.map((option) => (
                <Option
                  key={option.id}
                  option={option}
                  setSelectedAnswer={setSelectedAnswer}
                  selectedAnswer={selectedAnswer}
                  setEndGame={setEndGame}
                  isDisabled={isDisabled}
                  setIsDisabled={setIsDisabled}
                />
              ))}
            </motion.div>          
        </div>
      )}
    </section>
  );
}

export default Quiz;
