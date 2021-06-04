function isItHappyHour(currentHour) {
    if (typeof currentHour !== "number" && currentHour !== undefined) {
        return NaN
    }

    if (currentHour === undefined) {
        const currentDate = new Date()
        currentHour = currentDate.getHours()

        if (currentHour > 16 && currentHour < 20) {
            return "It's happy hour!"
        } else {
            return "Sorry! It's not happy hour!"
        }   
    } else {
        if (currentHour > 16 && currentHour < 20) {
            return "It's happy hour!"
        } else {
            return "Sorry! It's not happy hour!"
        }
    }
}

module.exports = {
    isItHappyHour
}