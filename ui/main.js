console.log('Loaded!');
var element=document.getElementById('main-text')
;
element.innerHTML='New value';
var img=document.getElementById('img');
var marginleft=0;
function moveright(){
    marginleft=marginleft+10;
    img.style.marginleft=marginleft+'px';
}
img.onclick=function(){
    img.style.marginleft='100px';
    
};