import * as React from 'react'

export class TimeRegister extends React.Component {

	constructor() {
		super()
		this._value = 0
	}

	componentWillMount() {
		this.setState({value: 0})
	}

	onChange(e) {
		let keyCode = e.keyCode
		if ( keyCode == 8 ) {
			this.removeNumber()
			return true
		}

		if ( keyCode >= 48 && keyCode < 57 ) {
			let integer = keyCode - 48
			this.appendNumber(integer)
			return true
		}
		return false
	}

	removeNumber() {
		const lastDigit = Math.round(this._value * 100) % 10
		this._value = Math.round(this._value * 100 - lastDigit) / 1000
		this._value = Math.round(this._value * 100) / 100
		this.setState({value: this._value})
	}

	appendNumber(i) {
		this._value = this._value * 10 + i / 100
		this._value = Math.round(this._value * 100) / 100
		this.setState({value: this._value})
	}

	value() {
		return this._value.toFixed(2).toString()
	}

	render() {
		return (<input onChange={() => {}} onKeyDown={this.onChange.bind(this)} value={this.value()} />)
	}
}
