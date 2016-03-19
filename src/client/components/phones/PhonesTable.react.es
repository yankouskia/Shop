'use strict';

import React from 'react';
import PhonesActions from 'actions/phones_actions';
import {
	Accordion,
	Panel,
	Well,
	ListGroupItem,
	ListGroup,
	Grid,
	Row,
	Col,
	Image,
	Button,
	ButtonGroup,
	Pager,
	PageItem,
	Input,
	Pagination,
	Badge
} from 'react-bootstrap';

export default class PhonesTable extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const phones = [
			{
				mark: 'iPhone',
				model: '6s',
				ram: 2,
				camera: 8,
				color: 'grey'
			}, {
				mark: 'Samsung',
				model: 'Galaxy S3',
				ram: 2,
				camera: 7,
				color: 'black'
			}
		];

		return (
			<div>
				<Well>It is moch! Later here will be real list of phones</Well>
				
				<Panel collapsible defaultExpanded header="Panel heading">
    			All phones in this shop.
					<Grid className='container-fluid'>
						<Col>
						<Row>
							{
								phones.map((phone, index) => {
									const header = `${phone.mark} - ${phone.model}`;
									return <Col xs={14} md={12} header={header} eventKey={header} key={index}>
											<div>
												<Image src="/assets/thumbnail.png" responsive> </Image>
												<Input type="checkbox" label="Add to compare" checked readOnly /> 
											</div>	
											<Panel header='About' bsStyle="info">
												<Well bsSize="large">
													Apple iOS, экран 4.7" IPS (750x1334), ОЗУ 	1 ГБ, флэш-память 16 ГБ, камера 8 Мп, 	аккумулятор 1810 мАч, цвет темно-серый
													<p>Comments <Badge>120</Badge></p>
												</Well>
												<ListGroup>
													<ListGroupItem header="RAM" bsStyle="info">{phone.ram}</ListGroupItem>
													<ListGroupItem header="Camera" bsStyle="info">{phone.camera}</ListGroupItem>
													<ListGroupItem header="Color" bsStyle="info">{phone.color}</ListGroupItem>
												</ListGroup>
												<ButtonGroup>
													<Button>Buy</Button>
													<Button>Reviews</Button>
													<Button>Add to the card</Button>
												</ButtonGroup>
											</Panel>
									</Col>
								})
							}	
							
						</Row>
						</Col>
						<Col xs={4} md={2}>
								<Button>Compare</Button>
							</Col>	
					</Grid>	
					<Pager>
						<PageItem disabled previous href="#">&larr; Previous</PageItem>
						<PageItem next href="#">Next &rarr;</PageItem>
					</Pager>					
				</Panel>
			</div>
		);
	}
}
