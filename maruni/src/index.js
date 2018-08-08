import 'bootstrap'
import './template.scss';
import 'slick-carousel/slick/slick.js';
import WOW from 'wowjs'; 
import content from './content.jade';
import Modal from './component/modal';

function importAll(r) {
    let images = {};
    
    r.keys().map((item, index) => {images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('./img', false, /\.(png|jpeg|jpg|svg)$/));
const slider = importAll(require.context('./img/slider', false, /\.(png|jpeg|jpg|svg)$/));
const product = importAll(require.context('./img/icon', false, /\.(png|jpeg|jpg"svg)$/));
const videoImg = importAll(require.context('./img/prevideo', false, /\.(png|jpeg|jpg|svg)$/));
const video = [
    '<iframe id="fancybox-frame1529420209866" name="fancybox-frame1529420209866" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" scrolling="auto" src="//www.youtube.com/embed/g0gmGMU1ipI?autoplay=1&amp;autohide=1&amp;fs=1&amp;rel=0&amp;hd=1&amp;wmode=opaque&amp;enablejsapi=1"></iframe>',
    '<iframe id="fancybox-frame1529420243795" name="fancybox-frame1529420243795" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" scrolling="auto" src="//www.youtube.com/embed/nNa8pqkLwNg?autoplay=1&amp;autohide=1&amp;fs=1&amp;rel=0&amp;hd=1&amp;wmode=opaque&amp;enablejsapi=1"></iframe>',
    '<iframe id="fancybox-frame1529420270634" name="fancybox-frame1529420270634" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" scrolling="auto" src="//www.youtube.com/embed/3OH3a3vi8fQ?autoplay=1&amp;autohide=1&amp;fs=1&amp;rel=0&amp;hd=1&amp;wmode=opaque&amp;enablejsapi=1"></iframe>',
    '<iframe id="fancybox-frame1529420292272" name="fancybox-frame1529420292272" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" scrolling="auto" src="//www.youtube.com/embed/Z4EgClMNI3o?autoplay=1&amp;autohide=1&amp;fs=1&amp;rel=0&amp;hd=1&amp;wmode=opaque&amp;enablejsapi=1"></iframe>',
    '<iframe id="fancybox-frame1529420323705" name="fancybox-frame1529420323705" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" scrolling="auto" src="//www.youtube.com/embed/UD8LRou9cH8?autoplay=1&amp;autohide=1&amp;fs=1&amp;rel=0&amp;hd=1&amp;wmode=opaque&amp;enablejsapi=1"></iframe>',
    '<iframe id="fancybox-frame1529420350399" name="fancybox-frame1529420350399" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" scrolling="auto" src="//www.youtube.com/embed/k8RpOyuu--s?autoplay=1&amp;autohide=1&amp;fs=1&amp;rel=0&amp;hd=1&amp;wmode=opaque&amp;enablejsapi=1"></iframe>'

]
document.body.onload = ()=>{
   
    

    
    
    
    let preloader = document.querySelector('#loader');
    if(preloader.classList.contains('done') == false){
        setTimeout(()=>{
            preloader.classList.add('done');
        
    
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
       
        document.querySelector('.open-video-container').onclick = () =>{
            event.preventDefault();
            document.querySelector('.content-video').classList.toggle('active');
        }
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
              
                event.preventDefault();
                let atr = elem.getAttribute('href');
                
                let top = document.querySelector(atr).offsetTop;
                $('body,html').animate({scrollTop: top}, 1000);
               
            }
            
        });

        let modalLink = document.querySelectorAll('.content-video .href');
        [].slice.call(modalLink).forEach((item,index)=>{
            item.onclick = (event)=>{
                let modal = new Modal('body',video[index]);
            
            }
        })
        },1500);
    }
  
    
    
    
    
}

