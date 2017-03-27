import React from 'react'

import { Link } from 'react-router'

const Menu = (props) => {
    const navClass = `navbar navbar-${props.inverseColors ? 'inverse' : 'default'} navbar-static-top`
    return (
        <nav className={navClass}>
            <div className="container-fluid">
                <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle collapsed"
                      data-toggle="collapse"
                      data-target="#bs-example-navbar-collapse-1"
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <Link
                      className="navbar-brand"
                      activeClassName="active"
                      to="/"
                    >
                        {props.header}
                    </Link>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
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
            </div>
        </nav>
    )
}


Menu.propTypes = {
    header: React.PropTypes.string,
    items: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            to: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired,
            props: React.PropTypes.object,
        }),
    ).isRequired,
    inverseColors: React.PropTypes.bool,
}

Menu.defaultProps = {
    header: 'Menu',
    inverseColors: false,
}

export default Menu
