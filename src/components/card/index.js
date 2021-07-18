import React from 'react'
import { JobCard, JobSalary, JobTitle } from './CardElements'

const Card = ({job}) => {
    return (
        <JobCard>
            <JobTitle>{job.title}</JobTitle>
            <JobSalary>{job.salary}</JobSalary>
        </JobCard>
    )
}

export default Card
