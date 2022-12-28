function talk() {
    var know = {
        "What's your name?": "Hello, my name is Aline.",
        "How are you?": "I'm fine :)",
        "Do you have a pet?": "Yes, I have a dog.",
        "Your followers": "I have my family of 5000 members, i don't have follower ,have supportive Famiy ",
        "ok": "Thank you so much",
        "Bye": "Okay! Will meet soon."
    };

    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    } else {
        document.getElementById('chatLog').innerHTML = "Sorry, I didn't understand <br>";
    }}