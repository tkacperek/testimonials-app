import React from 'react'

import { Link } from 'react-router'

const Menu = props => (
    <div>
        <p>{props.header}</p>
        <ul>
            {
                props.items.map(item => (
                    <li key={item.to}>
                        <Link
                          to={item.to}
                          activeClassName="active"
                          {...item.props}
                        >
                            {item.text}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
)

Menu.propTypes = {
    header: React.PropTypes.string,
    items: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            to: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired,
            props: React.PropTypes.object,
        }),
    ).isRequired,
}

Menu.defaultProps = {
    header: 'Menu',
}

export default Menu
