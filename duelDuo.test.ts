
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Wins counter shows up', async () => {
    const wins = await driver.findElement(By.id('wins'))
    const displayed = await wins.isDisplayed()
    expect(displayed).toBe(true)
})

// describe('counters working', async () => {
//     test('wins counter works', async () => {
//     const results = await driver.findElement(By.id('results')).getText
//     const wins = await driver.findElement(By.id('wins'))
//     if(results === "You Won"){
//     expect(results).toBe("Wins: 1")
//     }
//     })

//     test('losses counter works', async () => {
//     const results = await driver.findElement(By.id('results')).getText
//     const losses = await driver.findElement(By.id('losses'))
//     if(results === "You Lost"){
//         expect(results).toBe("Losses: 1")
//     }
//     })
// })