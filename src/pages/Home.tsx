import { useState } from "react"
import { useAppDispatch } from "../hooks"
import { setUser } from "../redux/user"
import { useNavigate } from "react-router"
import Button, { BUTTON_TYPE_CLASSES } from "../components/Button"


function Home() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [userName, setUserName] = useState('')
    
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(setUser(userName))
        if(userName !== '') navigate('/quiz')
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target    
        setUserName(value)
        
      }
  return ( 
    <div className="bg-secondary text-black w-full h-[100vh] flex flex-col justify-center  items-center gap-5">
        <img src="https://cmo-templates.s3.amazonaws.com/quizmodeon/brand/logo.png" alt="Quiz Mode On" className="w-[150px]"/>
     <div>
        Enter your name to start your quiz!!
     </div>
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <label className="rounded-sm"> 
            <input type="text" onChange={handleChange} className="p-2 text-black focus:outline-none focus:ring focus:border-blue-100 rounded-md "/>
        </label>
    
        <Button buttonType={BUTTON_TYPE_CLASSES.base}>Start</Button>
    </form>
    </div>
  )
}

export default Home;