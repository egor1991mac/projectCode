import './style.scss';
import template from './template.jade';
import validate from 'jquery-validation';
import mask from 'jquery-mask-plugin';

$.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-zа-яA-ZА-Я\s]+$/i.test(value);
  }, "Letters only please"); 

export default class form{
    
    constructor(selector,sendFunction,rules){
        this.elem = document.querySelector(selector);
        this.node = this.create_elem();
        this.rules = rules ? rules : this.validateRules(sendFunction || function(){alert('send function')});
        this.elem_render();
        this.validateForm();
           
    }
    create_elem(){
        const node  = document.createElement('div');
        node.id= "contactUs";
        this.elem.appendChild(node);
        return node;
    }
    elem_render(){
        this.node.innerHTML = template();
    }
    validateForm(){
        let form = $(this.node.children[0]).validate(this.rules);
    }
    validateRules(sendFunction){
           return  {
            errorElement: "label",
            highlight: function(element) {
                $(element).next().addClass('error');
            },
            unhighlight: function(element) {
                $(element).next().removeClass("error");
            },
            onkeyup:function(elem,event){
                if($(elem).valid()==true){
                    $(elem).addClass('succes');
                }
                else $(elem).removeClass('succes');
                
            },
            submitHandler:function(form,event){
                event.preventDefault();
                sendFunction();
            },
              
              rules:{
                email:{
                    required:true,
                    email:true 
                },
                name:{
                    required:true,
                    minlength:3,
                    maxlength:14,
                    lettersonly:true
                },
                phone:{
                    required:true,
                    number:true
                }
            },
            messages:{
                email:{
                    required:'Это поле обязательно для заполнения',
                    email:'Значение в поле не соответсвует формату e-mail',
                   
                    },
                name:{
                    required:'Это поле обязательно для заполнения',
                    minlength: $.validator.format("Минимальное число знаков {0}"),
                    maxlength: $.validator.format("Максимальное число знаков {0}"),
                    lettersonly: 'Вводите только буквы'
                    },
                phone:{
                    required:'Это поле обязательно для заполнения',
                    number:'Значение в поле не соответсвует формату телефона'
                    },
            }
            
        };
        
     }
     


    
    
    
    }

