import * as React from 'react'
import { render } from 'react-dom'

export class Layout extends React.Component {

	handleClick(e) {
		this.setState({items: [1,2,3,4,45]})
	}

	componentWillMount() {
		this.setState(this.props)
	}

	render() {
		let items = this.state.items
		return (
			<div>
				<h1 onClick={this.handleClick.bind(this)} style={{color: 'red'}}><b>Hello</b></h1>
				<ul>
					{items.map(i => <li key={i}>{i}</li>)}
				</ul>
				{this.props.children}
			</div>
		)
	}
}

render(<Layout items={["John", "Doe", "Oleg"]}/>, document.getElementById("app"))
