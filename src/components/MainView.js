import React from 'react'

import Menu from './Menu'
import { mainMenu } from '../modules/menus'

const MainView = props => (
    <div>
        <Menu
          header="Testimonials App"
          items={mainMenu}
        />
        {props.children}
    </div>
)

MainView.propTypes = {
    children: React.PropTypes.node.isRequired,
}

export default MainView
