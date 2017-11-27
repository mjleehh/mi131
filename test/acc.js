import {expect} from 'chai'

import reducer from '../src/reducer'
import {calculate, setOperator} from "../src/actions"

describe('acc', () => {
    it('is null by default', () => {
        const state = reducer(undefined, {type: '@@INIT'})

        expect(state.acc).to.be.null
    })

    it('holds the operator that has been set', () => {
        const state = reducer({number: '298.3'}, setOperator('*'))

        expect(state.acc.operator).to.be.equal('*')
    })

    it('holds number after operator has been set', () => {
        const state = reducer({number: '184.312'}, setOperator('-'))

        expect(state.acc.number).to.be.equal('184.312')
    })

    it('is emptied when calculation is performed', () => {
        const state = reducer({number: '3', acc: {operator: '/', number: '12'}}, calculate())

        expect(state.number).to.be.equal('4')
        expect(state.acc).to.be.null
    })
})
