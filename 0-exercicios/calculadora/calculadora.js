(function(win, doc){
    'use strict';
    
    var $visor = doc.querySelector('[data-js="visor"]');
    var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
    var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');
    var $butonCE = doc.querySelector('[data-js="button-ce"]');

    Array.prototype.forEach.call($buttonsNumbers, function(button){
        button.addEventListener('click', handleClickNumber, false);
    });

    Array.prototype.forEach.call($buttonsOperations, function(button){
        button.addEventListener('click', handleClickOperation, false);

    });

    $butonCE.addEventListener('click', handleClickCE, false);

    function handleClickNumber(){
        $visor.value += this.value;
    }

    function handleClickCE(){
        $visor.value = 0;
    }

    function handleClickOperation(){
        
        $visor.value += this.value;
    }
    

})(window, document);