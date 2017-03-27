import React from 'react'
import * as firebase from 'firebase'

import FirebasePaginator from '../modules/firebasePaginator'

class TestimonialList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: {},
            currentPageKeys: [],
        }
        this.getFirst = this.getFirst.bind(this)
        this.getLast = this.getLast.bind(this)
        this.getPrev = this.getPrev.bind(this)
        this.getNext = this.getNext.bind(this)
        this.updateStateWithPaginator = this.updateStateWithPaginator.bind(this)
    }

    componentWillMount() {
        this.paginator = new FirebasePaginator(firebase.database().ref(`/testimonials/${this.props.params.name}`))
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
            currentPage: this.paginator.currentPage,
            currentPageKeys: this.paginator.currentPageKeys,
        })
    }

    render() {
        const itemList = this.state.currentPageKeys.length ?
            this.state.currentPageKeys.map(key => (
                <li key={key}>
                    {this.state.currentPage[key].author}
                    {' - '}
                    {this.state.currentPage[key].text}
                </li>
            ))
            : <p>The list is empty.</p>

        return (
            <div>
                <p>Company testimonials</p>
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

TestimonialList.propTypes = {
    params: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
    }).isRequired,
}

export default TestimonialList
