const nameChecker = require('../nameChecker')
const assert = require('assert')

describe('nameChecker test cases', () => {
    it('should output "Brutus is valid!"', () => {
        const expected = 'Brutus is valid!'
        const actual = nameChecker('Brutus')

        assert.equal(expected, actual)
    }),

    it('should output "Invalid name"', () => {
        const expected = 'Invalid name'
        const actual = nameChecker('Frank')

        assert.equal(expected, actual)
    }),

    it('should output "Remus is valid!"', () => {
        const expected = 'Remus is valid!'
        const actual = nameChecker('Remus')

        assert.equal(expected, actual)
    })
})
