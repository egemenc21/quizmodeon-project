import {useState} from "react";
import {OptionProps} from "../pages/Quiz";
import cn from "classnames";
import {toast} from "react-toastify";
interface Props {
  option: OptionProps;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  selectedAnswer:{
    id: number;
    text: string;
    isCorrect: boolean;
  } | null
  setSelectedAnswer: React.Dispatch<
    React.SetStateAction<{
      id: number;
      text: string;
      isCorrect: boolean;
    } | null>
  >;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setEndGame: React.Dispatch<React.SetStateAction<boolean>>;
  
}

function Option({
  option,
  setSelectedAnswer,
  setCurrentQuestion,
  setScore,
  selectedAnswer,
  onClick,
setOnClick,
}: Props) {
  const [selected, setSelected] = useState(false);
  const [success, setSuccess] = useState(false) //to show that answer is correct
  const [fail, setFail] = useState(false) // to show that answer is wrong


  const handleOnClick = () => {
    setSelected(true);
    setOnClick(true);
    setSelectedAnswer({
      id: option.id,
      text: option.text,
      isCorrect: option.isCorrect,
    });

    setTimeout(() => {
      if (option.isCorrect == false) {
        toast.error("Your answer is wrong");
        setFail(true) 
      } else {
        toast.success("Your answer is correct");
        setScore((prev) => prev + 1);
        setSuccess(true)
      }
      setSelected(false);    
      setSelectedAnswer(null) 
      setOnClick(false)

      setTimeout(() => {
        setCurrentQuestion((prev) => prev + 1)
      }, 2000);     
     
    }, 2000);
    
  };
  
  if(onClick === true){
  setTimeout(() => {
    if(option.isCorrect) {setSuccess(true)}  
    
  }, 2000);
 }

  return (
    <button
      className={cn(
        {"bg-primary": selected},
        {"bg-success": success},
        {"bg-fail": fail},
        "border-2 border-primary border-solid w-[80%] xl:w-2/3 mx-auto p-4 m-2 text-center rounded-lg cursor-pointer"
      )}
      onClick={handleOnClick}
      disabled={selectedAnswer !== null}
    >
      {option.text}
    </button>
  );
}
export default Option;
