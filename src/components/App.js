import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component{
	
	constructor(){
		super()

		this.state = {
			filters: [],
			currentFilter: null,
			fruit: []
		}
	}

	componentWillMount() {
		this.fetchFilters();
		this.fetchFruit();
	};

	fetchFruit = () => {
		fetch('/api/fruit')
        .then(response => response.json())
        .then(fruit => this.setState({ fruit }));
	};

	handleFilterChange = event => {
		console.log('new filter: ', event.target.value);
		this.setState({ currentFilter: event.target.value });
	};

	fetchFilters = () => {
		fetch('/api/fruit_types')
		.then(response => response.json())
		.then(filters => this.setState({ filters }));
	};

	render(){
		return <FruitBasket fruit={this.state.fruit} currentFilter={this.state.currentFilter} filters = {this.state.filters} updateFilterCallback={this.handleFilterChange}/>;
	}
}

export default App;


  