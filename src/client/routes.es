'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* containers */
import App from 'containers/AppContainer.react';
import Home from 'containers/HomeContainer.react';
import List from 'containers/ListContainer.react';
import Phones from 'containers/PhonesContainer.react';
import Example from 'containers/ExampleContainer.react';
import Computers from 'containers/ComputersContainer.react';
import Shop from 'containers/ShopContainer.react';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="list" component={List} />
		<Route path="phones" component={Phones} />
		<Route path="computers" component={Computers} />
		<Route path="example" component={Example} />
		<Route path="shop" component={Shop} />
		<Route status={404} path="*" component={Home} />
	</Route>
);
