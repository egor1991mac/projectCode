import 'bootstrap';
import './template.scss';
//import { elementAt } from '../node_modules/rxjs/operator/elementAt';

import 'owl.carousel';
function startSlider(sliderNumber,caption,sliderItems){
    let index = 1;
    [].slice.call(caption).forEach(item=>{
    
        
        item.onclick = function(event){
              index = [].indexOf.call(caption,event.target);
              
              [].slice.call(sliderItems).forEach((element,i)=>{
                caption[i].classList.remove('active');  
                element.classList.remove('activeted');
                element.classList.add('d-none');
             });
             this.classList.add('active');
             sliderItems[index].classList.remove('d-none');
             sliderItems[index].classList.add('activeted');
            
             caption[index].classList.add('active');
             let numberSlide = index+1;
             sliderNumber.innerText = '0'+numberSlide;
             if(sliderItems>4){
               document.querySelector('header .caption ul li').style.transform = `translateY(${-index/2*60}px)`;
              index++;
             }
             
            }.bind(item);
         });
    
    return setInterval(function(){
        
       
        if(index == sliderItems.length){
            index=0;
            //document.querySelector('.layout-slide').removeChild(sliderItems[0]);
            if(sliderItems.length>4){
                document.querySelector('.caption ul').style.transform = `translateY(${-index/2*60}px)`;
            }
            
            sliderNumber.nextElementSibling.classList.remove('active');
            setTimeout(()=>{
                sliderNumber.nextElementSibling.classList.add('active');
            },300);
       
            for(let i = 0; i<sliderItems.length; i++){
                
                sliderItems[i].classList.remove('activeted');
                
                caption[i].classList.remove('active');
                
                sliderItems[i].classList.add('d-none');
    
            }
            
       
            sliderItems[index].classList.remove('d-none');
            sliderItems[index].classList.add('activeted');
            //caption[index].classList.remove('not_active');
            caption[index].classList.add('active');
            let numberSlide = index+1;
            sliderNumber.innerText = '0'+numberSlide;
            index++;
            }
        else{
            sliderNumber.nextElementSibling.classList.remove('active');
            setTimeout(()=>{
                sliderNumber.nextElementSibling.classList.add('active');
            },300);
       
            for(let i = 0; i<sliderItems.length; i++){
                
                sliderItems[i].classList.remove('activeted');
                
                caption[i].classList.remove('active');
                
                sliderItems[i].classList.add('d-none');
    
            }
            
       
        sliderItems[index].classList.remove('d-none');
        sliderItems[index].classList.add('activeted');
        //caption[index].classList.remove('not_active');
        caption[index].classList.add('active');
        let numberSlide = index+1;
        sliderNumber.innerText = '0'+numberSlide;
        index++;
        }
       
       
        if(index % 2 == 0){
            document.querySelector('.activeted .line').style.animationName ="slide2_text_line_fadeIn";
            //document.querySelector('.caption ul').style.transtion = "translateY 0.3s";
            if(sliderItems.length>4){
            document.querySelector('header .caption ul').style.transform = `translateY(${-index/2*60}px)`;
            }
        }
       
    },3000);
    
}
function removeClass(profileModal){
    for (let index = 1; index < profileModal.children[0].children.length; index++) {
        if(!profileModal.children[0].children[index].classList.contains('d-none')){
         profileModal.children[0].children[index].classList.toggle('d-none');
        }
        
    }
    
}

document.body.onload = () =>{

    let sliderItems = document.querySelectorAll('#slider .item');
    let sliderNumber = document.querySelector('.slide-number .number');
    let caption = document.querySelectorAll('header .caption ul li');
    let profileOpen = document.querySelector('header   .button-profile');
    let profileModal = document.querySelector('#modal');
    let profileItem = document.querySelectorAll('#modal .item')
    let profileControl = profileModal.children[0].children[0];
    let signInform = document.querySelector('#signIn');
    let signInOpen = document.querySelector("footer .sign_up");

    signInOpen.onclick = () =>{
        
        signInform.classList.toggle('d-none');
    }
    signInform.addEventListener('click',function(event){
        if(event.target.id === 'signIn'){
            signInform.classList.add('d-none');
        }
    })
    profileControl.children[2].onclick = (event) =>{
         profileModal.classList.toggle('active');
    }
    
    profileControl.children[0].onclick = (event) =>{
        let arr = [].slice.call(profileItem);
        let indexItem;
        arr.forEach((item,index)=>{
            if(!item.classList.contains('d-none') && index != 0){
                indexItem = index;
                item.classList.toggle('d-none');
            }
            
        })
        if(indexItem != undefined){
            arr[indexItem-1].classList.toggle('d-none');
        }
        
    }
    profileControl.children[1].onclick = (event) =>{
        let arr = [].slice.call(profileItem);
        let indexItem;
        arr.forEach((item,index)=>{
            if(!item.classList.contains('d-none') && index != arr.length-1){
                indexItem = index;
                item.classList.toggle('d-none');
            }
            
        })
        if(indexItem != undefined){
            arr[indexItem+1].classList.toggle('d-none');
        }
        
    }
    profileModal.addEventListener('click',function(event){ 
        if(event.target.id === 'modal'){
            this.classList.toggle('active');
        }
    })
    profileOpen.onclick = function(event){
       let profileNumber = sliderNumber.innerText.split('').splice(1,1);
       profileModal.classList.toggle('active');
       
       removeClass(profileModal,profileNumber);
       
       profileModal.children[0].children[profileNumber].classList.remove('d-none');
    }

    
        
 
    
    let slider = startSlider(sliderNumber,caption,sliderItems);

 
    let owlCr = $('#news .right_block .owl-carousel');
    let owlCl = $('#news .left_block .owl-carousel')
    owlCr.owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            }
        }
        //margin:70,
        
    });
    owlCl.owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            }
        }
        //margin:70,
        
    });
   
 
let hamburger = document.querySelector('.hamburger img');
let closeHambureger = document.querySelector('.hamburger .close');
let hideMenu =document.querySelector('.hide-nav');
let searchIcon = document.querySelector('nav .search img');
let searchForm = document.querySelector('nav .search form');
let buttonPlay = document.querySelector('#slider .button-play');
 
hamburger.onclick = (event) =>{
    event.stopPropagation();
    hideMenu.classList.toggle('active');
 }
 closeHambureger.onclick = (event) =>{
    event.stopPropagation();
    hideMenu.classList.toggle('active');
 }
 searchIcon.onclick = (event) =>{
    event.stopPropagation();
    searchForm.classList.toggle('active');
 }
 document.addEventListener('click',function(event){
    event.stopPropagation();
    if(event.target.tagName !== 'INPUT'){
        searchForm.classList.remove('active');
    }
    
 });

 

 buttonPlay.onclick = function(event){
        if(this.children[0].getAttribute('data-play') == 'play'){
            this.children[0].classList.add('d-none');
            this.children[1].classList.remove('d-none');
            //let src = this.children[0].getAttribute('src');
            //let newSrc = src.replace('pause','play');
            //this.children[0].setAttribute('src',newSrc);
            this.children[0].setAttribute('data-play','pause');
            clearInterval(slider);
        }
        else{
            this.children[0].classList.remove('d-none');
            this.children[1].classList.add('d-none');
            let src = this.children[0].getAttribute('src');
            //let newSrc = src.replace('play','pause');
            //this.children[0].setAttribute('src',newSrc);
            this.children[0].setAttribute('data-play','play');
            slider = startSlider(sliderNumber,caption,sliderItems);
        }
 }.bind(buttonPlay);
 

}