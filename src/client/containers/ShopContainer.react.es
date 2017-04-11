import React, { Component, PropTypes } from 'react';
import {
    Accordion,
    Panel,
    Well,
    ListGroupItem,
    ListGroup
} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PhoneList from 'components/PhoneList.react';
import ComputerList from 'components/ComputerList.react';

import * as shopActions from 'actions/shop';

function mapStateToProps(state) {
    return {
        phones: state.phones.phonesInShop,
        computers: state.computers.computersInShop,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...shopActions,
    }, dispatch);
}
class Shop extends Component {
    render() {
        return (
            <section>
                <PhoneList phones={this.props.phones}/>
                <ComputerList computers={this.props.computers}/>
            </section>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
