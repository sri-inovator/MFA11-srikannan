
/*get the number of characters*/
let charl;
function charLength() {

    let charLength = document.getElementById('length').value;
    charl=charLength
    document.getElementById('result').innerHTML = charLength;
    // let pass = document.getElementById("password_result")
    // pass_.innerHTML=charLength
    // let pass = Math.floor(Math.random()*'result')
    return charLength;
}


document.getElementById('length').addEventListener('change', charLength)



// let pass = document.getElementById('password_result')
// let charl= document.getElementById('length').value

let up=[ A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z]
let lo=[a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]



document.getElementById('uppercase').onclick = function() {
    var markedCheckbox1 = document.querySelectorAll('input[type="checkbox"]:checked');
    for(i=0;i<=charl;i++){
        let char=Math.floor(Math.random()*charl)
        
        
    }
}

document.getElementById('lowercase').onclick = function() {
    var markedCheckbox2 = document.querySelectorAll('input[type="checkbox"]:checked');
    for(i=0;i<=charl;i++){
        let char=Math.floor(Math.random()*charl)
        
    }
}

document.getElementById('numbers').onclick = function() {
    var markedCheckbox3 = document.querySelectorAll('input[type="checkbox"]:checked');
    for(i=0;i<=charl;i++){
        let char=Math.floor(Math.random()*charl)
        
    }
}























