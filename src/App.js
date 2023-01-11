import './App.css';
import { useState, useEffect } from 'react';
import journeyService from './services/journeys'

const JourneyList = () => {
  const [journeys, setJourneys] = useState([])  
  const [page, setPage] = useState(0)
  const [amtPages, setAmtPages] = useState("0")
  const [pageInput, setPageInput] = useState("")

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

  const jumpToPage = () => {
    const userInput = Number.parseInt(pageInput) - 1 // This is fine, NaN - 1 = NaN
    if (isNaN(userInput) 
    ||  userInput < 0
    ||  userInput >= amtPages) return

    setPage(userInput)
  }

  const handlePageInputChange = (event) => {setPageInput(event.target.value)}

  return (
    <div>
      <div>
        Page {page + 1} of {amtPages}
      </div>
      <div>
        <button onClick={prevPage}>Previous page</button>
        <button onClick={nextPage}>Next page</button>
      </div>
      <div>
        Jump to page:
        <input type="text" onInput={handlePageInputChange}></input>
        <button onClick={jumpToPage}>Jump!</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Departure station name</th>
            <th>Return station name</th>
            <th>Distance travelled (m)</th>
            <th>Journey duration (s)</th>
            <th>Departure time</th>
            <th>Return time</th>
          </tr>
        </thead>
        <tbody>
          {journeys.map((journey) =>
            <tr key={journey.id}>
              <td>{journey.departureStationName}</td>
              <td>{journey.returnStationName}</td>
              <td>{journey.distance}</td>
              <td>{journey.duration}</td>
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
