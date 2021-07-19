import styled from "styled-components";

export const JobCard = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 1.5em;
    border-radius: 1em;
    width: 24rem;
    margin: 0 auto;
`

export const JobTitle = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: .5em;
`

export const CompanyContainer = styled.div`
    display: flex;
    margin-bottom: 1.75em;
    align-items: center;

`

export const CompanyText = styled.p`
    margin: 0;
    padding-right: 0.5em;
`

export const CompanySpan = styled.span`
    padding-right: 0.25em;
    padding-left: 0.5em;
    font-weight: 400;
    font-size: 1rem;
    margin: 0;
`

export const JobCompany = styled.p`
    font-weight: bold;
    margin-bottom: 1em;
    margin: 0;
    padding-right: 0.5em;
    
`

export const JobLocation = styled.p`
    margin-bottom: 1em;
    margin: 0;
`

export const JobStatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: auto;
`

export const JobStatsGrid = styled.div`
    display: grid;
    grid-template-areas: 
    "type salary"
    "type-data salary-data";
    
`

export const JobStatsType = styled.p`
    font-size: .9rem;
    grid-area: type;
    margin-bottom: .5em;
    text-transform: uppercase;
`

export const JobType = styled.p`
    font-weight: bold;
    grid-area: type-data;
    font-size: 1.1rem;
    text-transform: capitalize;
`

export const JobStatsSalary = styled.p`
    font-size: .9rem;
    grid-area: salary;
    margin-bottom: .5em;
    text-transform: uppercase;
`

export const JobSalary = styled.p`
    font-weight: bold;
    grid-area: salary-data;
    font-size: 1.1rem;
`



