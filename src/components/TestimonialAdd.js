import React from 'react'

import AddView from './AddView'
import firebase from '../modules/firebase'

const fields = [
    { name: 'author', label: 'Author', type: 'text' },
    { name: 'text', label: 'Text', type: 'text' },
]


const TestimonialAdd = (props) => {
    const handler = (data) => {
        firebase.addTestimonial(props.params.name, data)
            // TODO
            .then(() => console.log('success'))
            .catch(error => console.log(error))
    }
    return (
        <AddView
          header="Add testimonial"
          handler={handler}
          fields={fields}
        />
    )
}

TestimonialAdd.propTypes = {
    params: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
    }).isRequired,
}

export default TestimonialAdd
