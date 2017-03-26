import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

import './static/css/index.css'
import firebase from './modules/firebase'
import routes from './modules/routes'

firebase.init()

render(
    <Router routes={routes} history={browserHistory} />,
    document.getElementById('root'),
)

/* TODO
    - slider generator
    - slider
    - CompanyList, TestimonialList are disgusting, fix them
    - paginate database requests
    - 1 config file
    - error feedback
    - clean add forms, redirect
    - clear other todo tags :P
    - css
*/
