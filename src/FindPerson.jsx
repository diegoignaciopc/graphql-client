import React from "react";
import { gql, useLazyQuery} from "@apollo/client";

const FIND_PERSONS = gql`
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
export const PersonForm = () => {
    const [getPerson, result] = useLazyQuery(FIND_PERSONS)
}