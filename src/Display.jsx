import React from 'react'

export default class Display extends React.Component {
    render() {
        const {acc, number} = this.props

        let accUi = acc ? `${acc.number} ${acc.operator}` : 'none'

        return <div>
            <div>
                {accUi}
            </div>
            <div>
                {number}
            </div>
        </div>
    }
}
