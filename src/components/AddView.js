import React from 'react'

class AddView extends React.Component {
    constructor(props) {
        super(props)
        const state = {
            fields: {},
            error: false,
            success: false,
        }
        this.props.fields.forEach((field) => {
            state.fields[field.name] = ''
        })
        this.state = state

        this.handleSave = this.handleSave.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    clearFields() {
        const fields = Object.assign({}, this.state.fields)
        Object.keys(fields).forEach((key) => {
            fields[key] = ''
        })
        this.setState({ fields, error: false, success: true })
    }

    handleInputChange(event) {
        const newState = { fields: Object.assign({}, this.state.fields) }
        newState.fields[event.target.id] = event.target.value
        this.setState(newState)
    }

    handleSave(event) {
        event.preventDefault()
        this.props.handler(this.state.fields)
            .then(() => {
                this.clearFields()
            }, () => {
                this.setState({ error: true, success: false })
            })
    }

    render() {
        return (
            <div>
                <h3>{this.props.header}</h3>
                { this.state.error &&
                    <div className="alert alert-danger alert-dismissable">
                        <a href={undefined} className="close" data-dismiss="alert">&times;</a>
                        <strong>Error!</strong> {'Couldn\'t save data to the database.'}
                    </div>
                }
                { this.state.success &&
                    <div className="alert alert-success alert-dismissable">
                        <a href={undefined} className="close" data-dismiss="alert">&times;</a>
                        <strong>Success!</strong> {'Data has been saved.'}
                    </div>
                }
                <form>
                    {
                        this.props.fields.map(field => (
                            <div key={field.name} className="form-group">
                                <label htmlFor={field.name}>{field.label} </label>
                                <input
                                  {...field}
                                  id={field.name}
                                  className="form-control"
                                  value={this.state.fields[field.name]}
                                  onChange={this.handleInputChange}
                                />
                            </div>
                        ))
                    }
                </form>
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
