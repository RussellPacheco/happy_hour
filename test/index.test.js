const { expect } = require("chai")
const { isItHappyHour } = require("../happyHour")

describe("happyhour", () => {
    it("Should throw if not a number", () => {
        const invalidHappyHour = isItHappyHour("yes")
        expect(invalidHappyHour).to.be.NaN
    })

    it("Should return it isnt happy hour when not between 5 -7pm", () => {
        const notHappyHour = isItHappyHour(22)
        expect(notHappyHour).to.equal("Sorry! It's not happy hour!")
    })

    it("Should return it is happy hour when between 5-7pm", () => {
        const happyHour = isItHappyHour(17)
        expect(happyHour).to.equal("It's happy hour!")
    })
})

