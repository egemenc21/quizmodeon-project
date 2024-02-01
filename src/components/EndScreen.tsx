import {useAppDispatch, useAppSelector} from "../hooks";
import {QuestionProps} from "../pages/Quiz";
import {
  resetCurrentQuestion,
  resetScore,
  selectScore,  
  setUser,
} from "../redux/user";
import Button, {BUTTON_TYPE_CLASSES} from "./Button";

interface Props {
  questions: QuestionProps[];
}

function EndScreen({questions}: Props) {
  const score = useAppSelector(selectScore);
  const dispatch = useAppDispatch();
  const handleOnClick = () => {
    dispatch(setUser(""));
    dispatch(resetScore());
    dispatch(resetCurrentQuestion());
  };
  return (
    <section className="flex flex-col justify-center items-center space-y-5 mx-auto pt-[50px]">
      <h1 className="p-4 text-2xl text-center">
        Your score is : <br /> {score} / {questions.length}
      </h1>

      <Button
        type="button"
        buttonType={BUTTON_TYPE_CLASSES.base}
        onClick={handleOnClick}
      >
        Start Again
      </Button>
    </section>
  );
}

export default EndScreen;
