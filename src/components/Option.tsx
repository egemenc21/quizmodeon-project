import {useState} from "react";
import {OptionProps} from "../pages/Quiz";
import cn from "classnames";
import {toast} from "react-toastify";
import {useAppDispatch} from "../hooks";
import {increaseCurrentQuestion, increaseScore} from "../redux/user";
interface Props {
  option: OptionProps;
  selectedAnswer: {
    id: number;
    text: string;
    isCorrect: boolean;
  } | null;
  setSelectedAnswer: React.Dispatch<
    React.SetStateAction<{
      id: number;
      text: string;
      isCorrect: boolean;
    } | null>
  >;
  setEndGame: React.Dispatch<React.SetStateAction<boolean>>;
}

function Option({
  option,
  setSelectedAnswer,
  selectedAnswer,
}: Props) {
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState(false); // to show that answer is selected (purple)
  const [success, setSuccess] = useState(false); // to show that answer is correct (green)
  const [fail, setFail] = useState(false); // to show that answer is wrong (red)

  const handleOnClick = () => {
    setSelected(true);
    setSelectedAnswer({
      id: option.id,
      text: option.text,
      isCorrect: option.isCorrect,
    });

    setTimeout(() => {
      if (option.isCorrect == false) {
        toast.error("Your answer is wrong");
        setFail(true);
      } else {
        toast.success("Your answer is correct");
        dispatch(increaseScore())

        setSuccess(true);
      }
      setSelected(false);
      setSelectedAnswer(null);

      setTimeout(() => {
        dispatch(increaseCurrentQuestion())
      }, 3000);
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
    <button
      className={cn(
        {"bg-primary": selected},
        {"bg-success": success},
        {"bg-fail": fail},
        " border-2 border-primary border-solid w-full mx-auto p-4 m-2 text-center rounded-lg cursor-pointer"
      )}
      onClick={handleOnClick}
      disabled={selectedAnswer !== null}
    >
      {option.text}
    </button>
  );
}
export default Option;
