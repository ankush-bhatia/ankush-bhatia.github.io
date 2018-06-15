function getGreetings() {
    var currentDate = new Date()
    var hrs = currentDate.getHours()
    var greet;
    if (hrs < 12) {
        greet = "Good Morning!"
    } else if (hrs >= 12 && hrs <= 17) {
        greet = "Good Afternoon!"
    } else {
        greet = "Good Evening!"
    }
    document.getElementById('greetings').innerHTML = greet
}