function isItHappyHour() {
    const currentDate = new Date()
    const currentHour = currentDate.getHours()

    if (currentHour > 17 && currentHour < 19) {
        return "It's happy hour!"
    } else {
        return "Sorry! It's not happy hour!"
    } 
}