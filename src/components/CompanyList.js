import React from 'react'
import { Link } from 'react-router'

import ListView from './ListView'

const itemMapper = key => (
    <li key={key}>
        <Link to={`/company/${key}`}>
            {key}
        </Link>
    </li>
)

export default () => (
    <ListView
      dbPath="/company/"
      header="Companies"
      itemMapper={itemMapper}
    />
)
