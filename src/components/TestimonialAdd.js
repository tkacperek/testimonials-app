import React from 'react'
import AddView from './AddView'

const fields = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'text', label: 'Text', type: 'text' },
]

const handler = () => {
// const handler = (data) => {
    // TODO
}

export default () => (
    <AddView
      header="Add testimonial"
      handler={handler}
      fields={fields}
    />
)
