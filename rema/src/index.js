import 'bootstrap'
import './template.scss';
import 'slick-carousel/slick/slick.js';
import WOW from 'wowjs'; 


function importAll(r) {
    let images = {};
    
    r.keys().map((item, index) => {images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('./img', false, /\.(png|jpeg|jpg|svg)$/));
const slider = importAll(require.context('./img/slider', false, /\.(png|jpeg|jpg)$/));
const product = importAll(require.context('./img/icon', false, /\.(png|jpeg|jpg)$/));
const videoImg = importAll(require.context('./img/prevideo', false, /\.(png|jpeg|jpg)$/));


document.body.onload = ()=>{
   
    

    
    
    
    let preloader = document.querySelector('#loader');
    if(preloader.classList.contains('done') == false){
        setTimeout(()=>{
            preloader.classList.add('done');
        
       // document.querySelector('.wrapper').innerHTML = content({images,slider,product,videoImg});
        $('.carousel').carousel({
            interval: 5000,
            ride:true
          });
          const wow = new WOW.WOW({ 
            duration:'0.5s',
            offset:"200",
            live: true
            });
        wow.init();
        
        
        let navHref = document.querySelectorAll('#nav a');
        document.querySelector('#open-menu').onclick = function(event){
            
            document.querySelector('.nav-pills').classList.toggle('open-menu');
        };
    
        [].slice.call(navHref).forEach(elem=>{
            
            elem.onclick = function(event){
                [].slice.call(navHref).forEach(elem=>{
                    elem.classList.remove('current');
                });
                
                this.classList.add('current');
              
               // event.preventDefault();
                let atr = elem.getAttribute('href');
                
                let top = document.querySelector(atr).offsetTop;
                $('body,html').animate({scrollTop: top}, 1000);
               
            }
            
        });

      
        },1500);
    }
  
    
    
    
    
}

