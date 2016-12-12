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
console.log('state', state);
    return {
        phones: state.shop.phonesInShop,
        computers: state.shop.computersInShop,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...shopActions,
    }, dispatch);
}
class Shop extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
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
