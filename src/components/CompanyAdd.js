import React from 'react'

import AddView from './AddView'
import firebase from '../modules/firebase'

const fields = [
    { name: 'name', label: 'Name', type: 'text' },
]

const handler = data => firebase.addCompany(data)

export default () => (
    <div className="container">
        <AddView
          header="Add company"
          handler={handler}
          fields={fields}
        />
    </div>
)
