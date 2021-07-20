import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'
import Header from './components/header';
import CardList from './components/card-list';

function App() {
  const [jobs, setJobs] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    // fetch jobs from Remotive API with async await syntax and axios
    const fetchJobs = async () => {
      const result = await axios(
        'https://remotive.io/api/remote-jobs?limit=50'
      )
      console.log(result.data.jobs)
      setJobs(result.data.jobs)
    }
    // run fetchJobs
    fetchJobs()
  }, [])

  const filteredSearch = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase())
  )

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="App">
      <Header placeholder="search jobs" handleChange={handleChange}/>
      <CardList jobs={filteredSearch}/>
    </div>
  );
}

export default App;
