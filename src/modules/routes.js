import React from 'react'
import { Route, IndexRoute } from 'react-router'

import MainView from '../components/MainView'
import CompanyAdd from '../components/CompanyAdd'
import CompanyList from '../components/CompanyList'
import CompanyView from '../components/CompanyView'
import SliderView from '../components/SliderView'
import TestimonialAdd from '../components/TestimonialAdd'
import TestimonialList from '../components/TestimonialList'

export default (
    <Route path="/" component={MainView}>
        <IndexRoute component={CompanyList} />
        <Route path="/add_company" component={CompanyAdd} />
        <Route path="/company/:name" component={CompanyView}>
            <IndexRoute component={TestimonialList} />
            <Route path="/company/:name/add_testimonial" component={TestimonialAdd} />
            <Route path="/company/:name/get_slider" component={SliderView} />
        </Route>
    </Route>
)
