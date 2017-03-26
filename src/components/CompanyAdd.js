import React from 'react'
import AddView from './AddView'

const fields = [
    { name: 'name', label: 'Name', type: 'text' },
]

const handler = () => {
// const handler = (data) => {
    // TODO
}

export default () => (
    <AddView
      header="Add company"
      handler={handler}
      fields={fields}
    />
)
