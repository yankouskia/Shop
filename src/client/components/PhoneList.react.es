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
import * as phonesActions from 'actions/phones';

function mapStateToProps(state) {
    return {
        phones: state.phones.phonesInShop,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...phonesActions,
    }, dispatch);
}


class PhoneList extends Component {
    constructor(props) {
        super(props);
    }
    removePhoneFromShop(phone, e) {
        e.stopPropagation();
        e.preventDefault();
        this.props.removePhoneFromShop(phone);
    }
    checkPhone(phone) {
      console.log(this.props.phones.indexOf(phone), (this.props.phones.indexOf(phone) !== -1))
      //  return (this.props.phones.indexOf(phone) !== -1)
    }
    render() {
        return (
          <div>
              <Well>Here is phones</Well>
              <div>
                  <Accordion>
                      {
                          this.props.phones.sort((left, right) => {return left.mark.toLowerCase() > right.mark.toLowerCase() ? 1 : -1}).map((phone, index) => {
                          const panelHeader = (
                              <Row>
                                  <Col xs={8}><h3>${phone.mark} ${phone.model}; System: ${phone.operatingSystem}; Color: ${phone.color}</h3></Col>
                                  <Col xs={4}>
                                      <ButtonToolbar className="pull-right">
                                          <Button bsStyle="success" onClick={(evt) => this.removePhoneFromShop(phone, evt)}>Remove from cart</Button>
                                      </ButtonToolbar>
                                  </Col>
                              </Row>
                          );
                              return <Panel bsStyle="success" header={panelHeader} eventKey={panelHeader} key={index}>
                                <ListGroup>
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
          </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneList);
