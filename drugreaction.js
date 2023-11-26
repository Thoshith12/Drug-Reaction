home();

function home() {
    window.location.href = '#home';
}
function search() {
    window.location.href = '#drug';

    var apiKey = "6wQGedfigIKwuiQTnYUr9y4RnX3FXH58RLZseQdy"
    var term = document.getElementById('search')
    $(".display").html("")
    var display = document.querySelector('.display')
    display.innerHTML = `<div class="loader"></div>`

    $.ajax({
        url: "https://api.fda.gov/drug/event.json?api_key=" + apiKey + "&search=" + term.value + "&count=patient.reaction.reactionmeddrapt.exact",
        dataType: "json",
        type: 'GET',

        success: function (data, err) {
            console.log(this.url, data)
            display.innerHTML = `<h2>Possible drug reactions based on FDA testing:-<h2>`

            for (var i = 0; i < 1000; i++) {
                //store side effect
                var result = (data.results[i].term)
                var number = (data.results[i].count)
                if (result == 'DRUG INEFFECTIVE') {
                    result = "DRUG INEFFECTIVE"
                } else if (result === 0) {
                    alert("Try another search")
                } else {
                    var newDiv = '<div class="box"><a href="https://www.google.com/search?q=what is ' + result + '  drug reaction">' + '<p>Reaction: ' + result + '</p><p>' + 'People Effected:' + number + '</p><a></div>'
                    $('.display').append(newDiv)
                }
            }
        }
    })
}