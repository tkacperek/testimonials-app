import React from 'react'

import AddView from './AddView'
import firebase from '../modules/firebase'

const fields = [
    { name: 'name', label: 'Name', type: 'text' },
]

const handler = (data) => {
    firebase.addCompany(data)
        // TODO
        .then(() => console.log('success'))
        .catch(error => console.log(error))
}

export default () => (
    <AddView
      header="Add company"
      handler={handler}
      fields={fields}
    />
)
