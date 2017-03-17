(function (window, document) {
    'use strict';
    var keyCodeElem = document.querySelector('.key-code');
    var keyCodeName = document.querySelector('.key-name');
    var keyConfig = {
        'Space': 'spacebar',
        'MetaLeft': 'Command Left ⌘',
        'MetaRight': 'Command Right ⌘',
        'AltLeft': 'Alt Left',
        'AltRight': 'Alt Right'
    }

    function getKeyCode(e) {
        for (var key in e) {
            var keyElem = document.querySelector('[data-event="' + key + '"] span');
            if (keyElem) {
                var value = e[key]
                value = (value === ' ') ? 'spacebar' : value;
                keyElem.innerHTML = value instanceof Array ? value.length : value;
            }
        }
        keyCodeElem.classList.add('active');
        keyCodeElem.innerHTML = e.keyCode;
        keyCodeName.innerHTML = keyConfig[e.code] ? keyConfig[e.code] : e.key;
    }

    window.addEventListener('keydown', getKeyCode);
}(window, document, undefined))