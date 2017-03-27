import React from 'react'

import ListView from './ListView'

const itemMapper = (key, value) => (
    <li key={key}>
        {value.author}
        {' - '}
        {value.text}
    </li>
)

const TestimonialList = props => (
    <ListView
      dbPath={`/testimonials/${props.params.name}`}
      header="Company testimonials"
      itemMapper={itemMapper}
    />
)

TestimonialList.propTypes = {
    params: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
    }).isRequired,
}

export default TestimonialList
