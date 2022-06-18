import {useEffect, useState} from 'react'
import logo from './logo.svg'
import './App.css'
import { gql, useQuery } from "@apollo/client";
import { Persons } from "./Persons";
import {PersonForm} from "./PersonForm";

const ALL_PERSONS = gql `
    query {
        allPersons {
            id
            name
            phone
            age
            address{
                street
                city
            }   
        }
    }
`

function App() {
    const {data, loading, error} = useQuery(ALL_PERSONS)

    if (error) return <span style='color: red'>{error}</span>

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {loading
              ? <p>Loading...</p>
              : <Persons persons={data?.allPersons} />
          }
          <PersonForm/>
      </header>
    </div>
  )
}

export default App
