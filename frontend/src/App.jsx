import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import DetailedPage from './Pages/DetailedPage.jsx'
import NewReport from './Pages/NewReport.jsx'

const App = () => {
  return (
    <div className='min-h-[100vh] pt-10 pb-10 pl-40 pr-40 bg-primary bg-[#14213D]'>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/detail' element={<DetailedPage/>} />
        <Route path='/new' element={<NewReport/>} />
      </Routes>
    </div>
  )
}

export default App
