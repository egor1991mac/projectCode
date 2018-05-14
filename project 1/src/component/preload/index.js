import './style.scss';
import template from './template.jade'



export default (selectorParent,img,header,text,render) =>{
    document.querySelector(selectorParent).innerHTML = template({img,header,text});
    return document.querySelector(selectorParent);
}




