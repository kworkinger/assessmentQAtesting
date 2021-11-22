
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

test("Clicking 'Draw' button displays div with id='choices'", async () => {
    await driver.findElement(By.id("draw")).click()
    await driver.sleep(500)
    const choices = await driver.findElement(By.id("choices"))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})

test("Check that adding duo displays id='player duo'", async () => {
    await driver.findElement(By.id("draw")).click()
    await driver.sleep(500)
    await driver.findElement(By.xpath('//button[text()="Add to Duo"])[1]')).click()

    const playerDuo = await driver.findElement(By.id("player-duo"))
    const displayed = await playerDuo.isDisplayed()
    expect(displayed).toBe(true)
})

test("Removed bot goes back to choices", async () => {
    await driver.findElement(By.id("draw")).click()
    await driver.sleep
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