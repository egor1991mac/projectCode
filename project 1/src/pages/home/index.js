
import template from './template.jade';
import './style.scss';
import '../template.scss';
import '../normalize.scss';
import 'bootstrap';
import Nav from '../../component/navigation';
import my_foto from '../img/my_foto.jpg';
import Preload from '../../component/preload';
import contact from '../contact';
import aboute from '../aboute';
import skills from '../skills';
import portfolio from '../portfolio';


window.onload = () =>{
   
    const render = () =>{
    let pages = [{name:'aboute',template:aboute},{name:'contact',template:contact},
    {name:'portfolio',template:portfolio},{name:'skills',template:skills}];
    let preload = Preload('#preload',my_foto,'Привет!','Меня зовут Егор. Я рад приветствовать вас на своей страничке.');
    let content = document.querySelector('.content_page');
    let nav = Nav("#nav",pages,
    [
        {icon:'contact_phone',name:'contact',href:'contact'},
        {icon:'account_circle', name:'aboute',href:'aboute'},
        {icon:'grade', name:'skills',href:'skills'},
        {icon:'movie', name:'portfolio',href:'portfolio'},   
    ]);
    content.style.opacity = "0";
    nav.style.opacity = "0";
    let scroll = 0;
    
    
    window.onwheel = (event) => {
     if(event.deltaY>=0) {
         scroll-=100;
         preload.style.opacity= 1 + scroll/1000;
         if(scroll <= -window.innerHeight){
            content.classList.remove('render_close');
            content.classList.add('render_open');
            nav.classList.remove('render_close');
            nav.classList.add('render_open');
            scroll = -window.innerHeight;
           }
     }
     else {
         scroll+=100;
         preload.style.opacity= 1 + scroll/1000;
         content.classList.remove('render_open');
         content.classList.add('render_close');
         nav.classList.remove('render_open');
         nav.classList.add('render_close');
         if(scroll>=0){
            scroll = 0;
         }
     }
     preload.style.top = scroll + "px";
    };
    
   document.querySelector('.scroll-downs').onclick = (event)=>{
        scroll = -1920;
        preload.style.top = scroll + 'px';
        content.classList.remove('render_close');
        content.classList.add('render_open');
        nav.classList.remove('render_close');
        nav.classList.add('render_open');
   }
 }


render();
}