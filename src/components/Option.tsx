import {useState} from "react";
import {OptionProps} from "../pages/Quiz";
import cn from "classnames";
import {toast} from "react-toastify";
import {useAppDispatch} from "../hooks";
import {increaseCurrentQuestion, increaseScore} from "../redux/user";
import {motion} from "framer-motion";

interface Props {
  option: OptionProps;
  selectedAnswer: boolean;
  isDisabled: boolean
  setSelectedAnswer: React.Dispatch<React.SetStateAction<boolean>>;
  setEndGame: React.Dispatch<React.SetStateAction<boolean>>;  
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const optionAnimation = {
  initial: {opacity: 0, x: -100},
  animate: {opacity: 1, x: 0, transition: {duration: 0.7}},
  exit: {opacity: 0, x: 100, transition: {duration: 0.7}},
};

function Option({
  option,
  setSelectedAnswer,
  selectedAnswer,
  isDisabled,
  setIsDisabled,
}: Props) {
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState(false); // to show that answer is selected (purple)
  const [success, setSuccess] = useState(false); // to show that answer is correct (green)
  const [fail, setFail] = useState(false); // to show that answer is wrong (red)

  const handleOnClick = () => {
    setSelected(true);
    setSelectedAnswer(true);
    setIsDisabled(true);

    setTimeout(() => {
      if (option.isCorrect == false) {
        toast.error("Your answer is wrong");
        setFail(true);
      } else {
        toast.success("Your answer is correct");
        dispatch(increaseScore());
        setSuccess(true);
      }
      setSelected(false);
      setSelectedAnswer(false);

      setTimeout(() => {
        dispatch(increaseCurrentQuestion());
        setIsDisabled(false);
      }, 2000);
    }, 2000);
  };

  if (selectedAnswer) {
    setTimeout(() => {
      if (option.isCorrect) {
        setSuccess(true);
      }
    }, 2000);
  }

  return (
    <motion.button
      variants={optionAnimation}
      className={cn(
        {"bg-primary": selected},
        {"bg-success": success},
        {"bg-fail": fail},
        " border-2 border-primary border-solid w-full mx-auto p-4 m-2 text-center rounded-lg cursor-pointer"
      )}
      onClick={handleOnClick}
      disabled={isDisabled}
    >
      {option.text}
    </motion.button>
  );
}
export default Option;
