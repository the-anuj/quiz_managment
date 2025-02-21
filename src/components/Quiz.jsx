import React from 'react'
import questions from '../sampleQuestion'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';


const Quiz = () => {
  const [index, setIndex] = useState(1)
  const [checkAnswer, setCheckAnswer] = useState(false)
  const [selectedValue, setSelectedValue]=useState("")
  const [bgColor, setBgColor] = useState("white"); 
  const[bgColorA, setBgcolorA]=useState("white")
  const[bgColorB, setBgcolorB]=useState("white")
  const[bgColorC, setBgcolorC]=useState("white")
  const[bgColorD, setBgcolorD]=useState("white")
  const[activeId, setActiveId]=useState("")
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);



  const navigate = useNavigate();



  const Timer = ({ initialTime }) => {
    const [timeLeft, setTimeLeft] = useState(
        () => parseInt(localStorage.getItem("timeLeft")) || initialTime
    ); 
    const timerRef = useRef(null);

    useEffect(() => {
        if (timeLeft <= 0) return;

        timerRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                const newTime = prev - 1;
                localStorage.setItem("timeLeft", newTime); 
                return newTime;
            });
        }, 1000);

        return () => clearInterval(timerRef.current);
    }, []); 

    useEffect(() => {
        if (timeLeft <= 0 && timerRef.current) {
            clearInterval(timerRef.current);
            localStorage.removeItem("timeLeft"); 
        }
    }, [timeLeft]);

    return <h2 className="text-2xl">Time Left: {timeLeft} seconds</h2>;
};


const filterQuestion1 = questions.filter((question) => (question.id == index))
const filterQuestion = filterQuestion1[0]


  const handleNext = () => {
    localStorage.setItem("timeLeft", 30);
    setSelectedValue("")
    setIndex(index + 1)
    setBgcolorA("white")
    setBgcolorB("white")
    setBgcolorC("white")
    setBgcolorD("white")
    const isCorrect = selectedValue === filterQuestion.answer;
    setAnswers((prev) => [
      ...prev,
      {
        id: filterQuestion.id,
        question: filterQuestion.question,
        selected: selectedValue || "Not Attempted",
        correct: selectedValue ? isCorrect : false, // Mark false if not attempted
      },
    ]);
    console.log(setAnswers);
    

    // Reset selected value & move to next question
    setSelectedValue('');
  }


  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 30000);
  
    return () => clearTimeout(timer); 
  }, [index]);

  
  

  
  // console.log(filterQuestion)

  const handleOnChange=(event,id)=>{
    setSelectedValue(event.target.value)
    setActiveId(id)
    
    console.log("SelectedValue",event.target.value,id)
  }

  
  const handleSubmit = () => {
    console.log("handle on submit", filterQuestion.answer, selectedValue);
    
    let correctOptionKey = "";
    
    Object.keys(filterQuestion.options).forEach((key) => {
        if (filterQuestion.options[key] === filterQuestion.answer) {
            correctOptionKey = key;
        }
    });


    if (correctOptionKey === "a") setBgcolorA("green");
    if (correctOptionKey === "b") setBgcolorB("green");
    if (correctOptionKey === "c") setBgcolorC("green");
    if (correctOptionKey === "d") setBgcolorD("green");

    if (selectedValue !== filterQuestion.answer) {
        if (activeId === "a") setBgcolorA("red");
        if (activeId === "b") setBgcolorB("red");
        if (activeId === "c") setBgcolorC("red");
        if (activeId === "d") setBgcolorD("red");
    }
};

const finalSubmit = () => {
  if(index == questions.length){
    navigate('/result');  

  }
};


  return (
    <> <div className='flex flex-col gap-5 justify-center items-center '><Timer initialTime={30} />
      {filterQuestion && (<div className='flex flex-col items-center justify-center border-blue-200 rounded-2xl w-2xl h-96 bg-blue-200 p-5' key={filterQuestion?.id}>
        <h2 className='text-2xl bold mb-15'>{filterQuestion?.id}. {filterQuestion?.question}</h2>
        <div className='flex flex-row flex-wrap gap-5 justify-between'>
          
          <label className='w-70 text-2xl border-white flex justify-center rounded-2xl cursor-pointer p-3' style={{backgroundColor: bgColorA}} >
            <input type="radio" value={filterQuestion?.options?.a} checked={selectedValue===filterQuestion?.options?.a} onChange={(event)=>handleOnChange(event,"a")} />
            {filterQuestion?.options?.a}</label>
          
          <label className='w-70 text-2xl bg-white border-white flex justify-center rounded-2xl cursor-pointer p-3 ' style={{backgroundColor: bgColorB}}>
            <input type="radio" value={filterQuestion?.options?.b} checked={selectedValue===filterQuestion?.options?.b} onChange={(event)=>handleOnChange(event,"b")}  />
            {filterQuestion?.options?.b}</label>
          
          
          <label className='w-70 text-2xl bg-white border-white flex justify-center rounded-2xl cursor-pointer p-3 'style={{backgroundColor: bgColorC}}>
            <input type="radio" value={filterQuestion?.options?.c} checked={selectedValue===filterQuestion?.options?.c} onChange={(event)=>handleOnChange(event,"c")}  />
            {filterQuestion?.options?.c}</label>
          
          <label className='w-70 text-2xl bg-white border-white flex justify-center rounded-2xl cursor-pointer p-3 'style={{backgroundColor: bgColorD}}>
            <input type="radio" value={filterQuestion?.options?.d} checked={selectedValue===filterQuestion?.options?.d} onChange={(event)=>handleOnChange(event,"d")}  />
            {filterQuestion?.options?.d} </label>
        </div>
        <div className='flex flex-row justify-end w-full mt-5 gap-10 mr-5'>
        <button 
  className={`border-green-400 rounded-2xl font-bold px-4 py-2 mr-39 bg-green-400 ${
    !selectedValue ? "opacity-50 cursor-not-allowed" : ""
  }`}
  onClick={()=>{handleSubmit(); finalSubmit();}}
  disabled={!selectedValue}  // Disable if no option is selected
>
  Submit
</button>
          <button className='border-blue-600 rounded-2xl font-bold px-4 py-2 bg-blue-600' onClick={()=>{handleNext(); finalSubmit();}}>Next</button>
        </div>
      </div>)}
    </div>

    </>
  )
}

export default Quiz