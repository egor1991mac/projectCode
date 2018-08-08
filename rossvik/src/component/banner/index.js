import './style.scss';
import template from './template.jade';



export default class form{
    
    constructor(selector,text){
        this.elem = document.querySelector(selector);
        this.text = text;
        this.node = this.create_elem();
        this.elem_render();
    }
    create_elem(){
        const node  = document.createElement('div');
        node.id = 'text_banner';
        this.elem.appendChild(node);
        return node;
    }
    elem_render(){
        let i =0;

        let interval = setInterval(()=>{
            if(i<this.text.length){
                this.node.innerText = this.text[i];   
                $(this.node).addClass('animated fadeInLeft');
                i++;
                
                setTimeout(()=>{
                    $(this.node).removeClass('animated fadeInLeft');
                    
                },1000); 
            }
            else if(i==this.text.length){
                this.node
            }
            else {
                i = 0;
            }
        },4000);
        
    }
   
}
