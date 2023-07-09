const btn = document.querySelector('#btn');
btn.addEventListener('click',function(){
    const colors = 'rgb('+ randomColor(225)+','+randomColor(225)+','+randomColor(225)+')'
    document.body.style.backgroundColor =colors;
    //console.log(colors)
})
function randomColor(number){
    return Math.floor(Math.random() * (number + 1)); 

}