import 'bootstrap'
import './template.scss';


function resizeText (elem){
    let container = document.querySelector(elem);
    // высота и ширина контейнера
    let containerWidth = container.offsetWidth;
    let containerHeight = container.offsetHeight;
    // высота и ширина текста
    let textWidth = parseFloat(container.children[0].offsetWidth);
    let textHeight = container.children[0].offsetHeight;
    // площади контейнера и текста 
    let textBlockS  = parseFloat(textWidth*textHeight);
    let containerS = textHeight*containerWidth;
    // параметр различия в размерах (во сколько раз больше)
    let k = textBlockS/containerS;
    
    let l = 1/k;
    // размер шрифта
    console.log(textBlockS,containerS,l);
    let  _fontSize = parseInt(getComputedStyle(document.body, '').fontSize);
    // увеличиваем размер шрифта до размера блока
    //return container.children[0].style.fontSize = _fontSize*l+'px';
}
document.body.onload = ()=>{

   let _fontSize = resizeText('.col-8');
    
}