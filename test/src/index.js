import 'bootstrap'
import './template.scss';
import './animate.css';
//import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$(document).ready(function(){
    
    
    window.onscroll = ()=>{
        let position = window.pageYOffset || document.documentElement.scrollTop;
        let nav = document.querySelector('#nav');
        let sub_nav = document.querySelector('#sub-menu');
        let widthPage = window.innerWidth;
        let navTop = nav.offsetHeight;
    
        if ( position > nav.offsetTop && widthPage<=968){
            nav.parentNode.classList.add('fixed-top');
            nav.classList.add('scroll');
            sub_nav.classList.add('fixed-top');
            
            nav.style.top =  sub_nav.offsetHeight + 'px';
        }
        else{
            nav.parentNode.classList.remove('fixed-top');
            nav.classList.remove('scroll');
            sub_nav.classList.remove('fixed-top');
            nav.style.top =  0;
          //  nav.parentNode.style.background = "none";
            nav.style.paddingTop= 0;
        }
    }

    let search = document.querySelector('#sub-menu .search svg');
    

    /*search.onclick = function(event){
        event.stopPropagation();
        this.classList.toggle('activeted');   
        this.parentNode.children[0].children[0].classList.toggle('active');
    }.bind(search);

    document.addEventListener('click', function(event){
        
        if(event.target.parentNode.classList.contains('search') !== true && event.target.tagName !== 'svg' && event.target.tagName !== 'INPUT'){
            console.log('seacrh'); 
            this.classList.remove('activeted');   
            this.parentNode.children[0].children[0].classList.remove('active');
        }
        
     }.bind(search));*/

     let sub_nav = document.querySelectorAll('#sub-menu li');
     document.querySelector('#sub-menu .close').onclick =(event)=>{
         console.log(this);
         event.stopPropagation();
        document.querySelector('svg').classList.toggle('activeted');
        document.querySelector('form').classList.toggle('active');
     }
     [].slice.call(sub_nav).forEach(element => {
            element.onclick = function(event){
                event.stopPropagation();
                let sub_nav_activeted = document.querySelectorAll('#sub-menu .activeted');
                if(sub_nav_activeted.length !== 0){
                    [].slice.call(sub_nav_activeted).forEach(item=>{
                        item.classList.toggle('activeted');
                        item.nextElementSibling.classList.toggle('active');
                    })
                }
                this.querySelector('svg').classList.toggle('activeted');
                this.querySelector('form').classList.toggle('active');
                
            }.bind(element);
     });
     document.addEventListener('click', function(event){
          event.stopPropagation();
       [].slice.call(sub_nav).forEach(element=>{
          
            if(element.children[0].classList.contains('activeted')){
                element.children[0].classList.remove('activeted');
                element.children[1].classList.remove('active');
            }
       })
        
    }.bind(sub_nav));
    
    let openMenu = document.querySelector('.icon-menu');

    
    openMenu.onclick = () =>{
        document.querySelector('.list-nav').classList.toggle('menu-active');
    }
    
   

    
    
    document.querySelector('#collection .link').addEventListener('click',(event)=>{
        event.stopPropagation();
        let collectionLink = document.querySelectorAll('#collection .link li');
        let collection = document.querySelectorAll('#collection .owl-carousel');
        
        let index = [].indexOf.call(collectionLink,event.target);
        
        [].slice.call(collection).forEach(item=>{
            item.classList.remove('activeted');
        });
        [].slice.call(collectionLink).forEach(item=>{
            item.classList.remove('active');
        })
        collectionLink[index].classList.toggle('active');
        collectionLink[index].classList.toggle('fadeIn');
        collection[index].classList.toggle('activeted');
        collection[index].classList.toggle('fadeIn');
       
    });

    $('#collection .owl-carousel').owlCarousel({
        autoplay:true,
        dots:true,
        autoplayTimeout: 3000,
        loop:true,
        responsive:{
            0:{
                items:1,
                margin: 1
            },
            600:{
                items:2,
                margin:38
                
            },
            1000:{
                items:3,
                margin:70
               
                
            }
        }
    });
    $('#services .owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout: 3000,
        responsive:{
            0:{
                items:1,
                margin: 1
            }
        }
    });
 
    $('#say .owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        dotClass:'dot',
        dotsEach:true,
        nav:false,
        //margin:70,
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:true,
                animateOut: 'slideOutDown',
                animateIn: 'flipInX',
            },
            600:{
                items:2,
                animateOut: 'slideOutDown',
                animateIn: 'flipInX',
                dots:true,
            },
            1000:{
                items:2,
                animateOut: 'slideOutDown',
                animateIn: 'flipInX',
                dots:true,
                
            }
        }
    });
    var owlC = $('#collection .owl-carousel');
    owlC.owlCarousel();
    $('#collection .next').click(function() {
        console.log('next');
        owlC.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('#collection .prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        console.log('prev');
        owlC.trigger('prev.owl.carousel', [300]);
    })

    var owlS = $('#services .owl-carousel');
    
    owlS.owlCarousel();
    $('#services .next').click(function() {
        console.log('next');
        owlS.trigger('next.owl.carousel');
    });
    $('#services .prev').click(function() {
        console.log('prev');
        // Parameters has to be in square bracket '[]'
        owlS.trigger('prev.owl.carousel', [300]);
    })
  });