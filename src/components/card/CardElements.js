import styled from "styled-components";

export const JobCard = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 1.5em;
    border-radius: 1em;
    width: 350px;
    margin: 0 auto;

    @media screen and (max-width: 450px) {
        width: 300px;
        margin: 0 auto;
    }
`

export const JobTitle = styled.p`
    font-size: 1.35rem;
    font-weight: bold;
    margin-bottom: .75em;

    @media screen and (max-width: 450px) {
        font-size: 1.3rem;
    }
`

export const CompanyContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.75em;
`


export const JobCompany = styled.p`
    font-weight: bold;
    margin: 0;
    margin-bottom: 0.35em;
`

export const JobLocation = styled.p`
    margin-bottom: 1em;
    margin: 0;
    font-size: 0.9rem;
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

    @media screen and (max-width: 450px) {
        font-size: 0.8rem;
    }

`

export const JobType = styled.p`
    font-weight: bold;
    grid-area: type-data;
    font-size: 1.1rem;
    text-transform: capitalize;

    @media screen and (max-width: 450px) {
        font-size: 1rem;
    }
`

export const JobStatsSalary = styled.p`
    font-size: .9rem;
    grid-area: salary;
    margin-bottom: .5em;
    text-transform: uppercase;

    @media screen and (max-width: 450px) {
        font-size: 0.8rem;
    }
`

export const JobSalary = styled.p`
    font-weight: bold;
    grid-area: salary-data;
    font-size: 1.1rem;

    @media screen and (max-width: 450px) {
        font-size: 1rem;
    }
`



