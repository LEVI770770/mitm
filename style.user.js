// ==UserScript==
// @name         new style of chat in mitmachim top
// @namespace    http://tampermonkey.net/
// @version      0.1
// @updateURL    https://github.com/LEVI770770/mitm/raw/main/style.user.js
// @description  new style of chat in mitmachim top
// @author       levi h
// @match        https://mitmachim.top/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mitmachim.top
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let sy = document.createElement('style');

sy.innerHTML = `[class="modal-content ui-resizable"],[component="chat/main-wrapper"]{
    background-image: url(https://mitmachim.top/assets/uploads/files/1689758993836-%D7%94%D7%95%D7%A8%D7%93%D7%94.png)
}


[data-self="0"][component="chat/message"]{
    background-color: #fff;
    border-radius: 20px 20px 0px 20px;
    margin-left: 50px !important;
}

[data-self="1"][component="chat/message"]{
    background-color: #e7ffdb;
    border-radius: 20px 20px 20px 0px;
    margin-right: 50px !important;
}

.chat-message.mx-2.pe-2.clear{
    margin-bottom: 10px;
    padding: 15px 20px 0px 20px !important;
}


[component="chat/message"] {
    margin-top: 9px;
    padding-right: 17px;
}

[component="chat/message"][data-break="false"] {
    padding-top: 13px;
}

`

document.body.append(sy);

$(document).on('dblclick', '[component="chat/message/body"]', function () {
    const massage = this.innerText;
    const lines = massage.split('\n');
    const [input] = $('[component="chat/input"]');
    input.value += `>${lines.join('>')}\n\n`;
    input.focus()
});

})();
