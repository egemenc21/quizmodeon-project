import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import 'react-toastify/dist/ReactToastify.css';
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='quiz/' element={<Quiz/>}/>
      </Routes>
    </>
  )
}

export default App
