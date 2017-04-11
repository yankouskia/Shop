import React, { Component } from 'react';
import {
    Accordion,
    Panel,
    Well,
    ListGroupItem,
    ListGroup,
    Button,
    Row,
    Col,
    ButtonToolbar
} from 'react-bootstrap';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as computersActions from 'actions/computers';
import * as shopActions from 'actions/shop';

function mapStateToProps(state) {
    return {
        computers: state.shop.computersInShop,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...computersActions,
        ...shopActions
    }, dispatch);
}

class ComputerList extends Component {
    constructor(props) {
        super(props);
    }
    removeComputerFromShop(computer, e) {
        e.stopPropagation();
        e.preventDefault();
        console.log(this.props);
        let computersInShop = this.props.computers.filter(computerInShop => computerInShop !== computer);
        localStorage.setItem('computersInShop', JSON.stringify(computersInShop));
        this.props.removeComputerFromShop(computer);
    }
    render() {
        return (
          <div>
              <Well>Here is computers</Well>
              <div>
                  <Accordion>
                  {
                      this.props.computers.sort((left, right) => {return left.mark.toLowerCase() > right.mark.toLowerCase() ? 1 : -1}).map((computer, index) => {

                      const panelHeader = (
                          <Row>
                              <Col xs={8}><h3>${computer.mark} ${computer.model}; Operating System: ${computer.operatingSystem}; Memory(GB): ${computer.memory}</h3></Col>
                              <Col xs={4}>
                                  <ButtonToolbar className="pull-right">
                                      <Button bsStyle="success" onClick={(evt) => this.removeComputerFromShop(computer, evt)}>Remove from cart</Button>
                                  </ButtonToolbar>
                              </Col>
                          </Row>
                      );
                      return <Panel bsStyle="success" header={panelHeader} eventKey={panelHeader} key={index}>
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
          </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComputerList);
