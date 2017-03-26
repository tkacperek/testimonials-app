import React from 'react'
import { Link } from 'react-router'

import firebase from '../modules/firebase'

const pageSize = 3

class CompanyList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            page: [],
            firstVisible: null,
            showPrev: false,
            showNext: false,
        }
        this.handlePrev = this.handlePrev.bind(this)
        this.handleNext = this.handleNext.bind(this)
    }

    componentWillMount() {
        firebase.getCompanyListInit((data) => {
            const newItems = Object.keys(data)
            this.setState({
                items: newItems,
                firstVisible: 0,
                showPrev: false,
                showNext: this.showNext(0, newItems.length),
                page: newItems.slice(0, pageSize),
            })
        }, () => {
            // TODO
            console.log('company list error')
        })
    }

    showPrev(first) {
        return first > 0
    }

    showNext(first, size) {
        const itemsSize = size || this.state.items.length
        return first + pageSize < itemsSize
    }

    handlePrev() {
        const newVal = Math.max(0, this.state.firstVisible - pageSize)
        this.setState({
            firstVisible: newVal,
            showPrev: this.showPrev(newVal),
            showNext: this.showNext(newVal),
            page: this.state.items.slice(newVal, newVal + pageSize),
        })
    }

    handleNext() {
        const newVal = this.state.firstVisible + pageSize
        this.setState({
            firstVisible: newVal,
            showPrev: this.showPrev(newVal),
            showNext: this.showNext(newVal),
            page: this.state.items.slice(newVal, newVal + pageSize),
        })
    }

    render() {
        return (
            <div>
                <p>Companies</p>
                <ul>
                    {
                        this.state.page.map(item => (
                            <li key={item}>
                                <Link to={`/company/${item}`}>
                                    {item}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                { this.state.showPrev &&
                    <button onClick={this.handlePrev}>Previous</button>
                }
                { this.state.showNext &&
                    <button onClick={this.handleNext}>Next</button>
                }
            </div>
        )
    }
}

export default CompanyList
