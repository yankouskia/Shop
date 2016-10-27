'use strict';

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { reset } from 'redux-form';

export default class AddItem extends Component {

    static propTypes = {
        dispatch: React.PropTypes.func,
        fields: React.PropTypes.object.isRequired,
        items: React.PropTypes.array,
        addItem: React.PropTypes.func,
    };

    constructor(props) {
        super(props);
    }

    onAdd = (event) => {
        if (this.props.fields.name.value) {
            this.props.addItem(this.props.fields);
            this.props.dispatch(reset('addItem'));
        }
        event.preventDefault();
    };

    render() {
        const {
            fields: { name },
        } = this.props;

        return (
            <form onSubmit={this.onAdd}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter something"
                        {...name}
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-default" onClick={this.onAdd}>
                        Add item
                    </button>
                </div>
            </form>
        );
    }
}

AddItem = reduxForm({
    form: 'addItem',
    fields: ['name'],
    destroyOnUnmount: false,
})(AddItem);

//export default AddItem;
