function quoicouSend(lol) {
    window.chrome.webview.postMessage(lol);
}

// Does anyone know a better way of handling this?
quoicouSend("uquery");
quoicouSend("SetColor");
document.getElementById("gdps").style.display = "none";
document.getElementById("launcher").style.display = "none";
let last = "updates";

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

function music() {
    var url = document.getElementById("mlurl").value;
    if(url == "" || !url.startsWith("https://")) return;
    var wokisme = prompt("Choose the destination GDPS (gd20, gd21, gd22, ...)");
    if(!wokisme) return;
    url = url.replace("https://", "music://");
    url = url + "||" + wokisme;
    quoicouSend(url);
}

var sreset = () => { if(confirm("Are you SURE you want to reset your settings to default? This action is IRREVERSIBLE\nDimisAIO will not take any accountability.")) quoicouSend("reset") }
var cgdps = () => { if(confirm("By enabling this, the dgdps:// protocol will be enabled. DimisAIO will not take any responsibility if you enable this option!\nDo you want to enable it?")) quoicouSend("cgdps") }