if(!navigator.userAgent.startsWith("UneTesla")) alert("This file needs to be opened on DindeGDPS"); // freakshow

console.log(`%c     .--.
    /} p \             /}
    \`~)-) /           /\` }
    ( / /          /\`}.' }     A WISE TURKEY ONCE SAID:
      / / .-'""-.  / ' }-'}          "DO NOT PASTE ANYTHING HERE IF YOU
    / (.'       \/ '.'}_.}                DO NOT KNOW WHAT YOU ARE DOING"
    |            \`}   .}._}
    |     .-=-';   } ' }_.}
    \    \`.-=-;'  } '.}.-}
    '.   -=-'    ;,}._.}
      \`-,_  __.'\` '-._}
    jgs   \`|||
          .=='=,
  `, "font-family:monospace; color: blue");

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 150)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})