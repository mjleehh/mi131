import {expect} from 'chai'

import reducer from '../src/reducer'
import {addDigit, removeDigit, setDot} from "../src/actions"

describe('number', () => {
    it('is 0 by default', () => {
        const state = reducer(undefined, {type: '@@INIT'})

        expect(state.number).to.be.equal('0')
    })

    it('can have digits added', () => {
        const state = reducer({number: '732'}, addDigit(3))

        expect(state.number).to.be.equal('7323')
    })

    it('has no trailing 0', () => {
        const state = reducer({number: '0'}, addDigit(9))

        expect(state.number).to.be.equal('9')
    })

    it('can have a dot set', () => {
        const state = reducer({number: '332'}, setDot())

        expect(state.number).to.be.equal('332.')
    })

    it('can have digits added after dot', () => {
        const state = reducer({number: '26.3'}, addDigit(2))

        expect(state.number).to.be.equal('26.32')
    })

    it('can have digits added after dot', () => {
        const state = reducer({number: '26.3'}, addDigit(2))

        expect(state.number).to.be.equal('26.32')
    })

    it('can have digits reomved', () => {
        const state = reducer({number: '289'}, removeDigit())

        expect(state.number).to.be.equal('28')
    })


    it('can have dot reomved', () => {
        const state = reducer({number: '86.'}, removeDigit())

        expect(state.number).to.be.equal('86')
    })

    it('can have digits reomved after dot', () => {
        const state = reducer({number: '6.32'}, removeDigit())

        expect(state.number).to.be.equal('6.3')
    })

    it('can have all digits removed', () => {
        const state = reducer({number: '7'}, removeDigit())

        expect(state.number).to.be.equal('0')
    })
})