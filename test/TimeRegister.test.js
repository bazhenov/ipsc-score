import assert from 'assert'
import { TimeRegister } from '../src/TimeRegister'
import { mount } from 'enzyme'
import React from 'react'

let keyDown = (wrapper, e) => {
	wrapper.find("input").simulate('keyDown', e)
}

describe("TimeRegister", () => {

	it("should listen for events", () => {
		let r = mount(<TimeRegister />)
		keyDown(r, {keyCode: 54})
		assert.equal(r.instance().value(), "0.06")
	})
	
	it("should pad number with zeros", () => {
		let r = mount(<TimeRegister />)
		keyDown(r, {keyCode: 54})
		keyDown(r, {keyCode: 48})
		keyDown(r, {keyCode: 48})
		assert.equal(r.instance().value(), "6.00")
	})

	it("should correctly accept large numbers", () => {
		let r = mount(<TimeRegister />)
		keyDown(r, {keyCode: 54})
		keyDown(r, {keyCode: 51})
		keyDown(r, {keyCode: 56})
		keyDown(r, {keyCode: 53})
		assert.equal(r.instance().value(), "63.85")
	})

	it("should correctly accept backspace", () => {
		let r = mount(<TimeRegister />)
		keyDown(r, {keyCode: 54})
		keyDown(r, {keyCode: 51})
		keyDown(r, {keyCode: 56})
		keyDown(r, {keyCode: 53})
		keyDown(r, {keyCode: 8})
		assert.equal(r.instance().value(), "6.38")
	})
})
