<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8" />
        <title>Minha Calculadora</title>
    </head>
    <body>
    
        <input type="text" readonly value="0" data-js="visor" >

        <div class="buttons-numbers">
            <button data-js="button-number" value="0">0</button>
            <button data-js="button-number" value="1">1</button>
            <button data-js="button-number" value="2">2</button>
            <button data-js="button-number" value="3">3</button>
            <button data-js="button-number" value="4">4</button>
            <button data-js="button-number" value="5">5</button>
            <button data-js="button-number" value="6">6</button>
            <button data-js="button-number" value="7">7</button>
            <button data-js="button-number" value="8">8</button>
            <button data-js="button-number" value="9">9</button>   
        </div>

        <div class="operations">
            <button data-js="button-operation" value="+">+</button>
            <button data-js="button-operation" value="-">-</button>
            <button data-js="button-operation" value="*">*</button>
            <button data-js="button-operation" value="/">/</button>
            <button data-js="button-equal" value="=">=</button>
            <button data-js="button-ce" value="ce">CE</button>
        </div>


        <script src="calculadora.js"></script>
        
    </body>
</html>
