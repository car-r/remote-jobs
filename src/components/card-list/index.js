import React from 'react'
import Card from '../card'
import { CardGrid } from './CardListElements'

const CardList = ({jobs}) => {
    return (
        <CardGrid>
            {jobs.map(job => (
                <Card job={job} key={job.id}/>
            ))}
        </CardGrid>
    )
}

export default CardList
