const {shuffleArray} = require('./utils')

let arr = [81, 29, 44, 12, 18]
describe('shuffleArray should', () => {
    test('returns an array', () => {
        expect(Array.isArray(shuffleArray(arr))).toBe(true)
    })
    test('argument and return equal length', () => {
        let shuffle = shuffleArray(arr)
        expect(shuffle.length).toBe(arr.length)
    })
    test('same items in the array', () => {
        let shuffle = shuffleArray(arr)
        expect(shuffle).toEqual(expect.arrayContaining(arr))
    })
    test('items shuffled', () => {
        let shuffle = shuffleArray(arr)
        expect(shuffle).not.toBe(arr)
    })

})