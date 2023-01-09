import './App.css';
import { useState, useEffect } from 'react';
import journeyService from './services/journeys'

const JourneyList = () => {
  const [journeys, setJourneys] = useState([])  
  const [page, setPage] = useState(0)
  const [amtPages, setAmtPages] = useState("0")

  useEffect(() => {
    if (page === 0) {
      const fetchData = async () => {
        const result = await journeyService.getAll()
        console.log(result)
  
        setJourneys(result.data.content)
        setAmtPages(result.data.totalPages)
      }

      fetchData();
    } else {
      const fetchData = async () => {
        const result = await journeyService.getPage(page)

        setJourneys(result.data)
      }

      fetchData();
    }
  }, [page])

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1)
    }
  }

  const nextPage = () => {
    if (page < amtPages - 1) {
      setPage(page + 1)
    }
  }

  return (
    <div>
      <div>
        Page {page + 1} of {amtPages}
      </div>
      <div>
        <button onClick={prevPage}>Previous page</button>
        <button onClick={nextPage}>Next page</button>
      </div>
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
    </div>
  )
}

const App = () => {
  return (
    <>
      <h1>Journeroo</h1>
      <JourneyList/>
    </>
  )
}

export default App;
