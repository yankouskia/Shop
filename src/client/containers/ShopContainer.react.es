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
        //let phones = this.props.phones;
        return (
            <section>
            <Well>Here is phones</Well>
        <div>

        <Accordion>
        {
            this.props.phones.sort((left, right) => {return left.mark.toLowerCase() > right.mark.toLowerCase() ? 1 : -1}).map((phone, index) => {
            const header = `${phone.mark} ${phone.model}; System: ${phone.operatingSystem}; Color: ${phone.color}  `;

            return <Panel bsStyle="success" header={header} eventKey={header} key={index}>                                    <ListGroup>
                <ListGroupItem header="RAM" bsStyle="info">{phone.ram}</ListGroupItem>
            <ListGroupItem header="Camera" bsStyle="info">{phone.camera}</ListGroupItem>
            <ListGroupItem header="Color" bsStyle="info">{phone.color}</ListGroupItem>
            <ListGroupItem header="Number of cores" bsStyle="info">{phone.coresNumber}</ListGroupItem>
            <ListGroupItem header="gps" bsStyle="info">{phone.gps}</ListGroupItem>
            <ListGroupItem header="wi-fi" bsStyle="info">{phone.wifi}</ListGroupItem>
            <ListGroupItem header="diagonal" bsStyle="info">{phone.diagonal}</ListGroupItem>
            <ListGroupItem header="Operating system" bsStyle="info">{phone.operatingSystem}</ListGroupItem>
            <ListGroupItem header="Price, dollars($)" bsStyle="info">{phone.price}</ListGroupItem>
            </ListGroup>
            </Panel>
        })
    }
    </Accordion>
        </div>

        <Well>Here is computers</Well>
        <div>
        <Accordion>
        {
            this.props.computers.sort((left, right) => {return left.mark.toLowerCase() > right.mark.toLowerCase() ? 1 : -1}).map((computer, index) => {
            const header = `${computer.mark} ${computer.model}; Operating System: ${computer.operatingSystem}; Memory(GB): ${computer.memory}`;

            return <Panel bsStyle="success" header={header} eventKey={header} key={index}>
                <ListGroup>
                <ListGroupItem header="Color" bsStyle="info">{computer.color}</ListGroupItem>
            <ListGroupItem header="wi-fi" bsStyle="info">{computer.wifi}</ListGroupItem>
            <ListGroupItem header="Is Laptop ?" bsStyle="info">{computer.isLaptop ? 'Yes' : 'No'}</ListGroupItem>
            <ListGroupItem header="Diagonal of monitor" bsStyle="info">{computer.diagonal}</ListGroupItem>
            <ListGroupItem header="Number of cores" bsStyle="info">{computer.coresNumber}</ListGroupItem>
            <ListGroupItem header="Number of USB2 ports" bsStyle="info">{computer.usb2}</ListGroupItem>
            <ListGroupItem header="Number of USB3 ports" bsStyle="info">{computer.usb3}</ListGroupItem>
            <ListGroupItem header="RAM" bsStyle="info">{computer.ram}</ListGroupItem>
            <ListGroupItem header="Memory" bsStyle="info">{computer.memory}</ListGroupItem>
            <ListGroupItem header="Type of videocard" bsStyle="info">{computer.videocard}</ListGroupItem>
            <ListGroupItem header="Video Memory" bsStyle="info">{computer.videomemory}</ListGroupItem>
            <ListGroupItem header="Operating System" bsStyle="info">{computer.operatingSystem}</ListGroupItem>
            <ListGroupItem header="Price" bsStyle="info">{computer.price}</ListGroupItem>
            </ListGroup>
            </Panel>
        })
    }
    </Accordion>
        </div>
        </section>
    );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
