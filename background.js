console.log("background running");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    console.log("button clicked");
    console.log(tab);

    let msg = {
        txt: "hello"
    }
    chrome.tabs.sendMessage(tab.id, msg);
    chrome.tabs.insertCSS(tab.id, {
        file: "style.css"
    });
    chrome.tabs.executeScript(tab.id, {
        file:"snake.js"
    });
    chrome.tabs.executeScript(tab.id, {
        file:"game.js"
    });
}