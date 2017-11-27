export default function performOperation(acc, b) {
    const {number} = acc
    const lhs = parseFloat(number)
    const rhs = parseFloat(b)

    switch (acc.operator) {
        case '+':
            return `${lhs + rhs}`
        case '-':
            return `${lhs - rhs}`
        case '*':
            return `${lhs * rhs}`
        case '/':
            return `${lhs / rhs}`
    }
    throw `invalid operator ${acc.operator}`
}
