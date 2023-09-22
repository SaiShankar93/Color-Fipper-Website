let btn = document.getElementById('click');

let hexCode = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
btn.addEventListener("click", function(){
    showRandomColor(hexCode);
})

let showRandomColor = (hexCode) => {
    let code = '#'
    for(let i = 0 ; i < 6 ; i++){
        let randomIndex = Math.floor(Math.random()*16);
        code += hexCode[randomIndex];
    }
    document.body.style.background = code;
}