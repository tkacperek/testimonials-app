import React from 'react'
import { Link } from 'react-router'
import * as firebase from 'firebase'

import FirebasePaginator from '../modules/firebasePaginator'

class CompanyList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPageKeys: [],
        }
        this.getFirst = this.getFirst.bind(this)
        this.getLast = this.getLast.bind(this)
        this.getPrev = this.getPrev.bind(this)
        this.getNext = this.getNext.bind(this)
        this.updateStateWithPaginator = this.updateStateWithPaginator.bind(this)
    }

    componentWillMount() {
        this.paginator = new FirebasePaginator(firebase.database().ref('/company/'))
        this.getFirst()
    }

    getFirst() {
        this.paginator.getFirst()
            .then(this.updateStateWithPaginator)
    }

    getLast() {
        this.paginator.getLast()
            .then(this.updateStateWithPaginator)
    }

    getPrev() {
        this.paginator.getPrev()
            .then(this.updateStateWithPaginator)
    }

    getNext() {
        this.paginator.getNext()
            .then(this.updateStateWithPaginator)
    }

    updateStateWithPaginator() {
        this.setState({
            currentPageKeys: this.paginator.currentPageKeys,
        })
    }

    render() {
        const itemList = this.state.currentPageKeys.length ?
            this.state.currentPageKeys.map(key => (
                <li key={key}>
                    <Link to={`/company/${key}`}>
                        {key}
                    </Link>
                </li>
            ))
            : <p>The list is empty.</p>

        return (
            <div>
                <p>Companies</p>
                <ul>
                    {itemList}
                </ul>
                <button disabled={!this.paginator.hasPrev} onClick={this.getFirst}>First</button>
                <button disabled={!this.paginator.hasPrev} onClick={this.getPrev}>Previous</button>
                <button disabled={!this.paginator.hasNext} onClick={this.getNext}>Next</button>
                <button disabled={!this.paginator.hasNext} onClick={this.getLast}>Last</button>
            </div>
        )
    }
}

export default CompanyList
