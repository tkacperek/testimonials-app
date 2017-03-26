import React from 'react'

import Menu from './Menu'
import { getMenuForCompany } from '../modules/menus'

const CompanyView = props => (
    <div>
        <Menu
          header={`Company: ${props.params.name}`}
          items={getMenuForCompany(props.params.name)}
        />
        {props.children}
    </div>
)

CompanyView.propTypes = {
    children: React.PropTypes.node.isRequired,
    params: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
    }).isRequired,
}

export default CompanyView
