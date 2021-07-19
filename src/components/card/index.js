import React from 'react'
import { CompanyContainer, JobCard, JobCompany, JobLocation, JobSalary, JobStatsContainer, JobStatsGrid, JobStatsSalary, JobStatsType, JobTitle, JobType } from './CardElements'

const Card = ({job}) => {
    return (
        <JobCard>
            <JobTitle>{job.title}</JobTitle>
                <CompanyContainer>
                    <JobCompany>{job.company_name} </JobCompany>
                    
                    {job.candidate_required_location.length > 1 ? (
                        <JobLocation>{job.candidate_required_location}</JobLocation>
                    ) : <JobLocation>Inquire for location</JobLocation> }
                    
                </CompanyContainer>   

            <JobStatsContainer>
                <JobStatsGrid>
                    <JobStatsType>Type</JobStatsType>
                    {job.job_type === 'full_time' ? (
                        <JobType>Full Time</JobType>
                    ) : <JobType>{job.job_type}</JobType> }
                    
                    <JobStatsSalary>Salary</JobStatsSalary>
                    {job.salary.length > 1 ? (
                        <JobSalary>{job.salary}</JobSalary>
                    ) : <JobSalary>N/A</JobSalary> }
                
                </JobStatsGrid>
            </JobStatsContainer>
        </JobCard>
    )
}

export default Card
