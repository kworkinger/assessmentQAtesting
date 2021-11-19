const {shuffleArray} = require('./utils')

let arr = [81, 29, 44, 12, 18]
describe('shuffleArray should', () => {
    test('returns an array', () => {
        let shuffle = shuffleArray(arr)
        expect(typeof shuffle).toBe("array")
    })
    test('argument and return equal length', () => {
        let shuffle = shuffleArray(arr)
        expect(typeof shuffle.length).toBe("arr.length")
    })
    test('same items in the array', () => {
        let shuffle = shuffleArray(arr)
        expect({shuffle}).toEqual({arr})
    })
    test('items shuffled', () => {
        let shuffle = shuffleArray(arr)
        expect(shuffle).not.toBe(arr)
    })

})