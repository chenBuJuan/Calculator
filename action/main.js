~function() {
    var oBtns = document.getElementsByClassName('keyBtn');

    for(var i = 0; i < oBtns.length; i++)
        oBtns[i].addEventListener('click', down);
}();

function down() {
    var oTxt = document.getElementById('ioText');

    if(this.innerText == 'AC') {
        oTxt.innerText = '';
        oTxt.ans = 0;
        return;
    }

    if(this.innerText == 'CE') {
        if(oTxt.innerText){
            Array.prototype.shift.call(this.innerText);
            return;
        }
        else
            return;
    }

    if(this.innerText == 'ANS'){
        oTxt.innerText += oTxt.ans;
        return;
    }

    if(['+', '-', '*', '/', '%'].indexOf(this.innerText) >= 0){
        oTxt.innerText += ' ' + this.innerText + '  ';
        return;
    }
    
    if(this.innerText == '='){
        oTxt.innerText = eval(oTxt.innerText);
        oTxt.ans = oTxt.innerText;
        return;
    }

    oTxt.innerHTML += this.innerHTML;
}