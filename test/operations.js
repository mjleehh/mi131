import {expect} from 'chai'

import reducer from '../src/reducer'
import {addDigit, calculate, removeDigit, setDot, setOperator} from "../src/actions"

describe('operations', () => {
    it('number and operator are stored on acc when acc is empty', () => {
        const state = reducer({number: '33', acc: null}, setOperator('-'))

        expect(state.number).to.be.equal('0')
        expect(state.acc).to.be.deep.equal({operator: '-', number: '33'})
    })

    it('acc is applied and replaced with new value and operator when acc is not empty', () => {
        const state = reducer({number: '3', acc: {operator: '+', number: '44'}}, setOperator('*'))

        expect(state.number).to.be.equal('0')
        expect(state.acc).to.be.deep.equal({operator: '*', number: '47'})
    })

    it('can calculate', () => {
        const state = reducer({number: '77', acc: {operator: '-', number: '180'}}, calculate())

        expect(state.number).to.be.equal('103')
        expect(state.acc).to.be.null
    })

    it('has no state change when calculate is called on emtpy acc', () => {
        const state = reducer({number: '27', acc: null}, calculate())

        expect(state).to.be.deep.equal({number: '27', acc: null})
    })

    it('can perform +', () => {
        const state = reducer({number: '7', acc: {operator: '+', number: '1432'}}, calculate())

        expect(state.number).to.be.equal('1439')
    })

    it('can perform -', () => {
        const state = reducer({number: '34.2', acc: {operator: '-', number: '17.3'}}, calculate())

        expect(parseFloat(state.number)).to.be.closeTo(-16.9, 0.000001)
    })


    it('can perform *', () => {
        const state = reducer({number: '98.23', acc: {operator: '*', number: '3.2'}}, calculate())

        expect(state.number).to.be.equal('314.336')
    })

    it('can perform /', () => {
        const state = reducer({number: '4', acc: {operator: '/', number: '1'}}, calculate())

        expect(state.number).to.be.equal('0.25')
    })
})