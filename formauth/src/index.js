import 'bootstrap';
import './template.scss';
import 'owl.carousel';
import {validate, date, number, string, util, isValid} from 'valid.js';
import 'jquery-mask-plugin';
import datepickerFactory from 'jquery-datepicker';
//import { elementAt } from '../node_modules/rxjs/operator/elementAt';
datepickerFactory($);
class Tabs {
    constructor(link,tab,button,radio,checkbox,placeHolder,input,date){
        this.links = link || null;
        this.tabs = tab || null;
        this.button = button || null;
        this.radio = radio || null;
        this.checkbox = checkbox || null;
        this.placeHolder = placeHolder || null;
        this.input = input || null;
        this.isValidTab = [];
        this.DatePicker = ((date) =>{
            $(date).datepicker({
                onSelect: function(){
                    this.previousElementSibling.classList.add('active');
                }
            });
        })(date)
    }
    removeAllclass(array){
        array.forEach(elem=>{
            [].slice.call(elem).forEach((item)=>{
                if(item.classList.contains('active')){
                    item.classList.remove('active');
                  
                }
            })
        })
        
    }
    addActive(){
        [].slice.call(this.button).forEach((item,index)=>{
            item.onclick = (e) =>{
                
                const tabInput = item.closest('.tab').querySelectorAll('input[required]');
                this.isValidTab=[];
                [].slice.call(tabInput).forEach(elem=>{
                    if(elem.value.length != 0) {
                        this.isValidTab.push(true);
                        elem.parentNode.classList.remove('required');
                       
                        elem.getAttribute('type') != 'checkbox' 
                            ? elem.parentNode.classList.remove('required')
                            : elem.nextElementSibling.style.color = "black";
                        
                    } else{
                        this.isValidTab.push(false)
                        elem.getAttribute('type') != 'checkbox' 
                            ? elem.parentNode.classList.add('required')
                            : elem.nextElementSibling.style.color = "red";
                    }
                    
                })
               
                if(this.isValidTab.indexOf(false) == -1){
                
                        if(index == this.tabs.length - 1){
                            alert('регистрация успешна');
                        }
                        else{
                            this.removeAllclass([this.links,this.tabs]);
                            this.tabs[index+1].classList.add('active');
                            this.links[index+1].classList.add('active');
                            switch(index) {
                                case 0:  
                                    this.links[0].parentNode.classList.remove('firstTabLink');
                                    this.links[0].parentNode.classList.add('secondTabLink');
                                  break;
                              
                                case 1: 
                                    this.links[0].parentNode.classList.remove('secondTabLink');
                                    this.links[0].parentNode.classList.add('thirdTabLink');
                                  break;
                              
                              }
                        }
                     
                    }
                else{
                    //console.log(item);
                    
                }
            }
        })
    }
    selectRadio(){
        if(this.radio){
            [].slice.call(this.radio).forEach(item=>{
                
                item.onclick = (e) =>{
                    this.removeAllclass([this.radio]);
                    item.classList.toggle('active');
                    
                    if(item.classList.contains('active')){
                        item.nextElementSibling.checked = true;
                    }
                    else{
                        item.nextElementSibling.checked = false;
                    }
                }
                
            })
        }
    }
    HandleCheckbox(){
        this.checkbox.onclick = (e) =>{
            this.checkbox.classList.toggle('active');
            if(this.checkbox.classList.contains('active')){
                this.checkbox.nextElementSibling.value = 'on';
             this.checkbox.nextElementSibling.nextElementSibling.style.color="black";
            }
            else this.checkbox.nextElementSibling.value = '';
        }
    }
    HandlePlaceHolder(){
        [].slice.call(this.placeHolder).forEach(item=>{
            
            item.nextElementSibling.onclick = (e) =>{
                item.classList.add('active'); 
                
                if(e.target.parentNode.classList.contains('required')){
                    e.target.parentNode.classList.remove('required');
                } 
            }
            item.nextElementSibling.onkeydown = (e) =>{
                item.classList.add('active'); 
                
            }
            
            item.nextElementSibling.onmouseout = (e) =>{
                if(item.nextElementSibling.value == '' && item.nextElementSibling.getAttribute('vdata') != 'vdata'){
                    item.classList.remove('active');
                }
            }
            
        })
    }
    Validate(){
        let password='';
        [].slice.call(this.input).forEach(item=>{
            
            item.oninput = (e) =>{
                    switch (item.getAttribute('vdata')) {
                        case 'vtext':
                            if(/\d/.test(e.target.value)){
                                this.isValidTab[0] = false;
                                e.target.value = e.target.value.slice(0,-1);
                                item.parentNode.classList.add('error');

                                
                            }
                            else{
                                this.isValidTab[0] = true;
                                item.maxLength = 20;
                                item.parentNode.classList.remove('error');
                             
                            }
                        break;
                        
                        case 'vemail':
                            if(!isValid(e.target.value,util.isEmail)){
                                item.parentNode.classList.add('error');
                                this.isValidTab[0] = false;
                            }
                            else{
                                item.parentNode.classList.remove('error');
                                this.isValidTab[0] = true;
                            }
                            break;
                        case 'vphone':
                            $(item).mask('(00) 0000-0000');
                            break;
                        
                        case 'vpassword':
                            password = e.target.value;
                            !/^[A-Za-z0-9]+$/.test(e.target.value) && e.target.value.length != 0 ?item.parentNode.classList.add('error') : item.parentNode.classList.remove('error');
                            
                            break;
    
                        case 'vpassword2':
                           
                            if(password.length != 0){
            
                                if(password != e.target.value){
                                    item.parentNode.classList.add('error');
                                    this.isValidTab[0] = false;
                                }
                                
                                else{
                                    item.parentNode.classList.remove('error');
                                    this.isValidTab[0] =true;
                                }

                            }
                            else{
                                event.target.value="";
                                item.parentNode.classList.remove('error');
                                this.isValidTab[0] = true;
                            }
                            
                          
                            break;
                        case 'vcode':
                           e.target.value.length < 4 ? item.parentNode.classList.add('error') 
                           : item.parentNode.classList.remove('error'); 
                            break;
                  
                       
                    }
                }
                
            
        })
    }
 
}

document.body.onload = () =>{
    const links = document.querySelectorAll('.linkTab a');
    const tab = document.querySelectorAll('.tab');
    const button = document.querySelectorAll('button');
    const radio = document.querySelectorAll('.radio');
    const checkbox = document.querySelector('.checkbox');
    const placeHolder = document.querySelectorAll('.placeholder');
    const input = document.querySelectorAll('input');
    const datePicker = document.querySelectorAll('input[vdata="vdata"]');
    
    const TABS = new Tabs(links,tab,button,radio,checkbox,placeHolder,input,datePicker);

    

    TABS.addActive();
    TABS.selectRadio();
    TABS.HandleCheckbox();
    TABS.HandlePlaceHolder();
    TABS.Validate();


}