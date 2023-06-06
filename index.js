let deadline = Date.parse('2023-08-02T08:00+02:00');
let intervalID = null;

window.onload = () => {
    intervalID = setInterval(update_countdown, 1000);
    update_countdown();
}

function update_countdown() {
    var now = new Date().getTime();
    var t = deadline - now;

    if (t < 0) {
        clearInterval(intervalID);
        document.getElementById('countdown').innerHTML = null;
        document.getElementById('text').innerHTML = "Skumfang's Europe Adventures are afoot!!!";
        return;
    }

    var days = Math.floor(t / 1000 / 60 / 60 / 24);
    t -= days * 1000 * 60 * 60 * 24;
    var hours = Math.floor(t / 1000 / 60 / 60);
    t -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(t / 1000 / 60);
    t -= minutes * 1000 * 60;
    var seconds = Math.floor(t / 1000);
    document.getElementById('countdown').innerHTML = `<span class="num">${days}</span> days,<br><span class="num">${hours}</span> hours,<br><span class="num">${minutes}</span> minutes and<br><span class="num">${seconds}</span> seconds`;
}
