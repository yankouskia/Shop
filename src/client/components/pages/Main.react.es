'use strict';

import React from 'react';
import {
	Input,
	Button,
	Grid,
	Row,
	Col,
	Accordion,
	Panel,
	Navbar,
	DropdownButton,
	MenuItem
} from 'react-bootstrap';

const innerDropdown = (
  <DropdownButton title="Action" id="input-dropdown-addon">
    <MenuItem key="1">mark</MenuItem>
    <MenuItem key="2">model</MenuItem>
    <MenuItem key="3">color</MenuItem>
    <MenuItem key="4">wifi</MenuItem>
    <MenuItem key="5">gps</MenuItem>
    <MenuItem key="6">ram</MenuItem>
    <MenuItem key="7">memory</MenuItem>
    <MenuItem key="8">camera</MenuItem>
  </DropdownButton>
);

export default class MainPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>

				<Accordion>					
					<Panel bsStyle="success" header="What can you find here?" eventKey="1">
						All you want :)
					</Panel>
					<Panel bsStyle="danger" header="Why our shop?" eventKey="2">
						Best personal, the lowest prices
					</Panel>
					<Panel bsStyle="primary" header="Developing" eventKey="3">
						Best programmers
					</Panel>
				</Accordion>
			</div>
		);
	}
}
