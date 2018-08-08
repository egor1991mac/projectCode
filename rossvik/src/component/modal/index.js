//import './style.scss';
import template from './template.jade'

export default class Modal {
    constructor(elem,component){
        this.elem = document.querySelector(elem); 
        this.component = component;
        this.node = this.create_modal();
       
    }
    create_modal(){
        const node  = document.createElement('div');
        node.classList.add('modal');
        this.elem.appendChild(node);
        return node;
    }
    component_render(){
        if(this.component != null){
            this.component(`#${this.node.id}`);
        }
        else{
            this.node.innerHTML = template();
        }
    }
    template_render(images){
       console.log(images);
       this.node.innerHTML = this.component({images});
    }
    
    open_modal(){
        //console.log(this);
        this.node.classList.toggle('open_modal');
       // $(this.node).toggle('animated fadeOut');
    }
    close_modal(){
        this.node.onclick = function(event){
      
            if(event.target === this){
        
             this.classList.toggle('open_modal');
          
            }
        }
        console.log();
        document.querySelector(`#${this.elem.id} .close`).onclick = function(event){
          
            this.node.classList.toggle('open_modal');
            $(this.node).removeClass('animated fadeOut');
        }.bind(this);
    }
}

