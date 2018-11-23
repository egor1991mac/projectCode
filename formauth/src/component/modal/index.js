//import './style.scss';
//import template from './template.jade'

export default class Modal {
    constructor(elem,component){
        this.elem = document.querySelector(elem);
        this.component = component || null;
        this.node = this.create_modal();
        this.component_render();
        this.open_modal();
        this.slider_modal();
        this.close_modal();
    }
    create_modal(){
        const node  = document.createElement('div');
        node.id= "modal-page";
        node.classList.add('modal-page');
        this.elem.appendChild(node);
        return node;
    }
    component_render(){
      if(this.component !== null){
          this.node.innerHTML = this.component;
      }
      else{
          this.node.innerHTML = template();
      }
    }
    
    open_modal(){
        setTimeout(() => {
            this.node.classList.toggle('open_modal');
        }, 100);
        
    }
    close_modal(){
        this.node.onclick = function(event){
      
            if(event.target === this){
        
             this.classList.toggle('open_modal');
             this.remove();
            }
        }
        document.querySelector(".close").onclick = function(event){
            this.node.classList.toggle('open_modal');
            $(this.node).removeClass('animated fadeOut');
            this.node.remove();
        }.bind(this);
    }
    slider_modal(){
        const allImg = document.querySelectorAll('.img-block-mini img');
        [].slice.call(allImg).forEach((item,index)=>{
            item.onclick = (event)=>{
                console.log(item);
                document.querySelector('.img-block img').setAttribute('src',item.getAttribute('src')); 
            }
        })
    }
}

