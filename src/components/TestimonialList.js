import React from 'react'

import firebase from '../modules/firebase'

const pageSize = 3

class TestimonialList extends React.Component {
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
        firebase.getTestimonialListInit(this.props.params.name, (data) => {
            const newItems = Object.keys(data || {})
            this.setState({
                itemData: data,
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
                <p>Company testimonials</p>
                <ul>
                    {
                        this.state.page.map(item => (
                            <li key={item}>
                                {this.state.itemData[item].author} - {this.state.itemData[item].text}
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

export default TestimonialList
