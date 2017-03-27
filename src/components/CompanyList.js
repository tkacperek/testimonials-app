import React from 'react'
import { Link } from 'react-router'

import ListView from './ListView'

const itemMapper = key => (
    <Link className="list-group-item" key={key} to={`/company/${key}`}>
        {key}
    </Link>
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
