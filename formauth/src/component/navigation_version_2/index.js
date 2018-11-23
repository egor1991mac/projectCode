import './style.scss';
import template from './template.jade'
import { isThisSecond } from 'date-fns';
class rounded_Menu {
  constructor(selectorOneElem,selectorAllElem,pages,render_selector,component){
    this.selectorAllElem = selectorAllElem;
    this.elem = document.querySelector(selectorOneElem) || null;
    this.allElem = document.querySelectorAll(selectorAllElem) || null;
    this.position =0;
    this.render_selector = render_selector;
    this.pages = pages;
    this.elem.children[1].classList.add('current');
    this.elem.children[1].children[0].classList.add('current');
  }
  wheel_down(i=1){
    let setinterval = setInterval(()=>{
      
      if(this.position<this.elem.children[0].offsetHeight){
      
      this.position+=i;
      this.elem.style.top = `${this.position}px`;
      }
      else {
        this.infinity_scroll_down();
        this.current_item();
        this.position = 0;    
        this.elem.style.top = `${this.position}px`;
        clearInterval(setinterval);
      }
    });
    
    
  }
  
  wheel_up(i=1){
    let setinterval = setInterval(()=>{
      
      if(this.position > -this.elem.children[0].offsetHeight){
      
      this.position-=i;
      this.elem.style.top = `${this.position}px`;
      }
      else {
        this.infinity_scroll_up();
        this.current_item();
        this.position = 0;   
        this.elem.style.top = `${this.position}px`; 
        clearInterval(setinterval);
      }
     
      
    });
  }
  infinity_scroll_down(){
   
   if(this.position %this.elem.children[0].offsetHeight == 0){
    this.elem.insertBefore(this.elem.lastChild,this.elem.firstChild);
    }
  }
  infinity_scroll_up(){
    
    if(this.position %this.elem.children[0].offsetHeight == 0){
    let first =  this.elem.children[0];
    this.elem.appendChild(first);
    }
  }
  current_item(){
  
    for(let i =0; i<this.elem.children.length;i++){
      if(i !=1){
        this.elem.children[i].classList.remove('current');
        this.elem.children[i].children[0].classList.remove('current');
      } else{
        this.elem.children[i].classList.add('current');
        this.elem.children[i].children[0].classList.add('current');
      } 
    }
  }
  render_page(element){
    let page = this.pages.filter(item=>
      item.name == element.getAttribute('href') && [].indexOf.call(element.classList,'current')!=-1);
      if(page[0]){
        page[0].template();
      }
  }

  

  
 
}

export default (selectorParent,pages,data) =>{
   
    document.querySelector(selectorParent).innerHTML = template({items:data});
    
    let menu = new rounded_Menu('.navigation_items','.href',pages);
    
    let timer;
    
    menu.elem.onwheel = (event)=>{
        
        if(timer){
          clearTimeout(timer);
        }
        timer = setTimeout(function(){
           
          if(event.deltaY>0){
              menu.wheel_up(2);
            }
          else{
            menu.wheel_down(2);
          }
          },200);  
      }
    
      [].slice.call(menu.allElem).forEach((element,index) => {
        element.onclick = (event)=>{
          menu.render_page(element);
        }
      });
}
   
