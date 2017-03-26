import React from 'react'

class AddView extends React.Component {
    constructor(props) {
        super(props)
        const state = {
            fields: {},
        }
        this.props.fields.forEach((field) => {
            state.fields[field.name] = ''
        })
        this.state = state

        this.handleSave = this.handleSave.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        const newState = { fields: Object.assign({}, this.state.fields) }
        newState.fields[event.target.id] = event.target.value
        this.setState(newState)
    }

    handleSave(event) {
        event.preventDefault()
        this.props.handler(this.state.fields)
    }

    render() {
        return (
            <div>
                <p>{this.props.header}</p>
                <ul>
                    {
                        this.props.fields.map(field => (
                            <li key={field.name}>
                                <label htmlFor={field.name}>{field.label} </label>
                                <input
                                  {...field}
                                  id={field.name}
                                  value={this.state.fields[field.name]}
                                  onChange={this.handleInputChange}
                                />
                            </li>
                        ))
                    }
                </ul>
                <input type="submit" value="Save" onClick={this.handleSave} />
            </div>
        )
    }
}

AddView.propTypes = {
    header: React.PropTypes.string.isRequired,
    handler: React.PropTypes.func.isRequired,
    fields: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            label: React.PropTypes.string.isRequired,
            type: React.PropTypes.string.isRequired,
        }),
    ).isRequired,
}

export default AddView
