import React from 'react'

import ListView from './ListView'

const itemMapper = (key, value) => (
    <li className="list-group-item" key={key}>
        <h4 className="list-group-item-heading">{value.author}</h4>
        <p className="list-group-item-text" >{value.text}</p>
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
