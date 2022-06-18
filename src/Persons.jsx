import React, {useEffect, useState} from "react";
import {gql, useLazyQuery} from "@apollo/client";

const FIND_PERSON = gql`
query findPersonByName($nameToSearch: String!) {
  findPerson(name: $nameToSearch) {
    name
    phone
    age
    id
    address {
        street
        city
    }
  }
}
`

export const Persons = ({ persons }) => {
    const [getPerson, result] = useLazyQuery(FIND_PERSON)
    const [person, setPerson] = useState(null)

    const showPerson = name => {
        getPerson({ variables: { nameToSearch: name}})
    }

    useEffect(() => {
        if (result.data) {
            setPerson(result.data.findPerson)
        }
    },[ result])

    if (person) {
        return (
            <div>
                <h2>{person.name}</h2>
            </div>
        )
    }

    if (persons === null) return null
    return (
        <div>
            <h2>Persons</h2>
            {persons.map(p =>
                <div
                    key={person.id}
                    onClick={()=> { showPerson(person.name)}}>
                    {person.name}
                </div>
            )}
        </div>
    )
}