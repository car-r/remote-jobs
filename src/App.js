import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'
import Header from './components/header';
import CardList from './components/card-list';

function App() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    // fetch jobs from Remotive API with async await syntax and axios
    const fetchJobs = async () => {
      const result = await axios(
        'https://remotive.io/api/remote-jobs?limit=20'
      )
      console.log(result.data.jobs)
      setJobs(result.data.jobs)
    }
    // run fetchJobs
    fetchJobs()
  }, [])

  return (
    <div>
      <Header />
      <CardList jobs={jobs}/>
    </div>
  );
}

export default App;
