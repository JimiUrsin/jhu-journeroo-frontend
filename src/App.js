import './App.css';
import { useState, useEffect } from 'react';
import journeyService from './services/journeys'

const JourneyList = () => {
  const [journeys, setJourneys] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const result = await journeyService.getAll()
      
      setJourneys(result.data.content)
    }

    fetchData();
  }, [])

  return (
    JSON.stringify(journeys)
  )
}

const App = () => {
  return (
    <>
      <h1>Journeroo</h1>
      <JourneyList journeys={{}}/>
    </>
  )
}

export default App;
