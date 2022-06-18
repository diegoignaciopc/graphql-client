import {useState} from "react";
import { gql, useMutation} from "@apollo/client";

const CREATE_PERSON = gql`
mutation createPerson($name: String!, $phone: String!, $age: String, $id: String!, $street: String!, $city: String!) {
  addPerson (
    name: $name
    phone: $phone
    age: $age
    id: $id
    street: $street
    city: $city
    ) {
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

export const PersonForm = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [age, setAge] = useState('')

    const [createPerson] = useMutation(CREATE_PERSON)

    const handleSubmit = e => {
        e.preventDefault()

        setName('')
        setPhone('')
        setStreet('')
        setCity('')
        setAge('')
    }

    return (
        <div>
            <h2>Create a new Person</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder="name" value={name} onChange={evt => setName(evt.target.value)}/>
                <input placeholder="name" value={name} onChange={evt => setName(evt.target.value)}/>
                <input placeholder="name" value={name} onChange={evt => setName(evt.target.value)}/>
                <input placeholder="name" value={name} onChange={evt => setName(evt.target.value)}/>
                <input placeholder="name" value={name} onChange={evt => setName(evt.target.value)}/>
            </form>
        </div>
    )
}