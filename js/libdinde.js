document.addEventListener("keydown", function(e) {
    if(e.keyCode == 27) {
        window.history.back();
    }
});

var lang = navigator.userAgent.split("-")[1];

switch(lang) {
    case "bg":
    case "ru":
        document.body.style.fontFamily = "ArialCyrillic";
        if(typeof updates != "undefined") updates.style.fontFamily = "ArialCyrillic";
        if(typeof footer != "undefined") footer.style.fontSize = "120%";
}

function quoicouSend(lol) {
    window.chrome.webview.postMessage(lol);
}

// Create an object to map language codes to language arrays
var languages = {
    en: en,
    fr: fr,
    ru: ru,
    nl: nl,
    bg: bg
};

// window.location.search is a deprecated POS
var phr = languages[navigator.userAgent.split("-")[1]];

// Does anyone know a better way of handling this?
quoicouSend("uquery");
quoicouSend("SetColor");
document.getElementById("gdps").style.display = "none";
document.getElementById("launcher").style.display = "none";
let last = "updates";

function language() {
    var go = document.getElementById('lang').value;
    quoicouSend(`lang://${go}`);
}

function setpos() {
    var rot = document.getElementById('mbpos').value;
    quoicouSend(`rot://${rot}`);
}

function applyupdcheck() {
    var upd = document.getElementById('cupdates').checked;
    var channel = document.getElementById('uchannel').value;
    quoicouSend(`updates://${channel}||${!upd}`);
}

function applycloselauncher() {
    var choice = document.getElementById('clauncher').checked;
    quoicouSend(`cl://${choice}`);
}

function load(page) {
    document.getElementById(last).style.display = "none";
    last = page;
    document.getElementById(page).style.display = "";
    if(page == "updates") quoicouSend("uquery");
}

function music(url = document.getElementById("mlurl").value) {
    if(url == "" || !url.startsWith("https://")) return;
    var wokisme = prompt(phr.destText);
    if(!wokisme) return;
    url = url.replace("https://", "music://");
    url = url + "||" + wokisme;
    quoicouSend(url);
}

var sreset = () => { if(confirm(phr.srResetText)) quoicouSend("reset") }
var cgdps = () => { if(confirm(phr.cgdpsText)) quoicouSend("cgdps") }

if(window.location.search) {
    var url = window.location.search.replace("?", "");
    history.pushState({}, null, location.href.split("&")[0]);
    if(confirm(phr.musicConfirm)) music(url);
}