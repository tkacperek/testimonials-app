import React from 'react'
import { Link } from 'react-router'

import ListView from './ListView'

const itemMapper = key => (
    // <li className="list-group-item" key={key}>
    <Link className="list-group-item" key={key} to={`/company/${key}`}>
        {key}
    </Link>
    // </li>
)

export default () => (
    <div className="container">
        <ListView
          dbPath="/company/"
          header="Companies"
          itemMapper={itemMapper}
        />
    </div>
)
