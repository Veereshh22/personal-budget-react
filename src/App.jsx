// import { useState } from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import Footer from './Footer/Footer'
import HeroPage from './HeroPage/HeroPage'
import HomePage from './HomePage/HomePage'
import Menu from './Menu/Menu'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutPage from './AboutPage/AboutPage'
import LoginPage from './LoginPage/LoginPage'

function App() {
  const [myBudgetData, setMyBudgetData] = useState([]);
 const [chartData, setChartData] = useState([]);

 useEffect(() => {
  axios.get('http://localhost:3000/budget')
  .then((res) => {
      console.log("mydata", res.data);
      const { myBudget } = res.data;
      console.log("myBudgrt", myBudget);
      const dataSource = {
          datasets: [
              {
                  data: myBudget.map(item => item.budget),
                  backgroundColor: [
                      '#dc143c',
                      '#ff8c00',
                      '#ffd700',
                      '#32cd32',
                      '#4169e1',
                      '#ee139e',
                      '#ff6347',
                      '#191970',
                      '#da70d6',
                  ],


              }
          ],
          labels: myBudget.map(item => item.title)
      };
      setMyBudgetData(myBudget);
      setChartData(dataSource)


  })
  .catch((err) => {
      console.log("error in fetcing data", err)
  })
}, [])
 

  return (
    <Router>
     <Menu/>
     <HeroPage/>
     <>
      <Routes>
        <Route path='/' element = {<HomePage myBudgetData={myBudgetData} chartData={chartData}/>}/>
        <Route path='/about' element = {<AboutPage/>}/>
        <Route path='/login' element = {<LoginPage/>}/>

      </Routes>
     </>
     
     <Footer/>
    </Router>
  )
}

export default App
