import assert from 'assert'
import { Foo } from '../src/foo'
import { TimeRegister } from '../src/TimeRegister'

describe("Foo", () => {

	it("should greet appropriatley", () => {
		assert.equal(new Foo().hello(), "Hi")
	})
})

describe("TimeRegister", () => {

	it("should listen for events", () => {
		let r = new TimeRegister()
		r.onChange({keyCode: 54})
		assert.equal(r.value(), "0.06")
	})
	
	it("should pad number with zeros", () => {
		let r = new TimeRegister()
		r.onChange({keyCode: 54})
		r.onChange({keyCode: 48})
		r.onChange({keyCode: 48})
		assert.equal(r.value(), "6.00")
	})

	it("should correctly accept large numbers", () => {
		let r = new TimeRegister()
		r.onChange({keyCode: 54})
		r.onChange({keyCode: 51})
		r.onChange({keyCode: 56})
		r.onChange({keyCode: 53})
		assert.equal(r.value(), "63.85")
	})

	it("should correctly accept backspace", () => {
		let r = new TimeRegister()
		r.onChange({keyCode: 54})
		r.onChange({keyCode: 51})
		r.onChange({keyCode: 56})
		r.onChange({keyCode: 53})
		r.onChange({keyCode: 8})
		assert.equal(r.value(), "6.38")
	})
})
