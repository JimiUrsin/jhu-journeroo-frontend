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
    <table>
      <thead>
        <tr>
          <th>Departure station name</th>
          <th>Return station name</th>
          <th>Departure time</th>
          <th>Return time</th>
        </tr>
      </thead>
      <tbody>
        {journeys.map((journey) =>
          <tr key={journey.id}>
            <td>{journey.departureStationName}</td>
            <td>{journey.returnStationName}</td>
            <td>{new Date(journey.departureTimestamp).toLocaleString()}</td>
            <td>{new Date(journey.returnTimestamp).toLocaleString()}</td>
          </tr>
        )}
      </tbody>
    </table>
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
