(function(win, doc){
    'use strict';
    
    console.time ('Calculando o tempo do for');
    for (var i = 0; i < 20000; i++) {
        console.log ('Calculando...');
    }
    console.timeEnd('Calculando o tempo do for');
    

})();