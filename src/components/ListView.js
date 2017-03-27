import React from 'react'
import * as firebase from 'firebase'

import FirebasePaginator from '../modules/firebasePaginator'

class ListView extends React.Component {
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
        this.paginator = new FirebasePaginator(firebase.database().ref(this.props.dbPath))
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
            this.state.currentPageKeys.map(key =>
                this.props.itemMapper(key, this.state.currentPage[key]),
            )
            : <p>The list is empty.</p>

        return (
            <div>
                <h3>{this.props.header}</h3>
                <ul className="list-group">
                    {itemList}
                </ul>
                <ul className="pager">
                    <li className={`${this.paginator.hasPrev ? '' : 'disabled'}`}>
                        <a
                          href={undefined}
                          onClick={this.paginator.hasPrev ? this.getFirst : undefined}
                        >
                            First
                        </a>
                    </li>
                    <li className={`${this.paginator.hasPrev ? '' : 'disabled'}`}>
                        <a
                          href={undefined}
                          onClick={this.paginator.hasPrev ? this.getPrev : undefined}
                        >
                            Previous
                        </a>
                    </li>
                    <li className={`${this.paginator.hasNext ? '' : 'disabled'}`}>
                        <a
                          href={undefined}
                          onClick={this.paginator.hasNext ? this.getNext : undefined}
                        >
                            Next
                        </a>
                    </li>
                    <li className={`${this.paginator.hasNext ? '' : 'disabled'}`}>
                        <a
                          href={undefined}
                          onClick={this.paginator.hasNext ? this.getNext : undefined}
                        >
                            Last
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

ListView.propTypes = {
    dbPath: React.PropTypes.string.isRequired,
    header: React.PropTypes.string.isRequired,
    // takes 2 arguments: key, value
    itemMapper: React.PropTypes.func.isRequired,
}

export default ListView
