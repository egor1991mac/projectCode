import 'bootstrap';
import './template.scss';
import './modal-page2/style.scss';
import VideoBg from './video/bg1.mp4';
import 'vide';
import Modal from './component/modal';
import ProgressBar from 'progressbar.js';
import Contact from './component/contactForm';

//import './component/style.css';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import WOW from 'wowjs'; 
import AndrewT from './modal-page2/andrew.jade';
import BlackCatT from './modal-page2/black-cat.jade';
import BmwT from './modal-page2/bmw.jade';
import PtichkiDressT from './modal-page2/PtichkiDress.jade';
import FlorArtT from './modal-page2/flor-art.jade';
import MonsikT from './modal-page2/monsik.jade';
import OblakaT from './modal-page2/v-oblakah.jade';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('./img', false, /\.(png|jpeg|jpg)$/));


document.body.onload = ()=>{
   
    

    
    
    
    let preloader = document.querySelector('#loader');
    if(preloader.classList.contains('done') == false){
        setTimeout(()=>preloader.classList.add('done'),1500);
       // document.querySelector('.wrapper').children.remove();
        //document.querySelector('.wrapper').innerHTML = content({images});
        
        $('#nav').fadeOut();
        $('.wrapper').vide(VideoBg,
        {
            volume: 1,
            playbackRate: 1,
            muted: true,
            loop: true,
            autoplay: true,
            position: '50% 50%', // Similar to the CSS `background-position` property.
            posterType: 'detect', // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
            resizing: true, // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
            bgColor: 'transparent', // Allow custom background-color for Vide div,
            className: 'video-class'
        });
        new Contact('#contactForm');
        
    }
  
    document.querySelector('#contactUsForm button').onclick = function() {
        let dataInput = $('#contactUsForm').serialize();
        console.log(dataInput);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: dataInput
        }).done(function() {
           // $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            //$("#form").trigger("reset");
        });
    
    };

    setTimeout(()=>{
    

    document.querySelector('#scroller .box').onclick = (event)=>{
        

        let top = $('#aboute').offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
        $('#nav').fadeIn(1000);
        
    };
    window.onscroll=()=>{
        $('#nav').fadeIn(1000);
    }

    //-nav
    let navHref = document.querySelectorAll('#nav a');
    let position = window.scrollY;

    document.querySelector('#open-menu').onclick = function(event){
        document.querySelector('#nav ul').classList.toggle('open-menu');
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
        
    })
    
   
   
    
    //--progress
    let line1 = new ProgressBar.Line('.itemProgress1', {
        color: '#dc3545',
        strokeWidth: 1,
        trailWidth: 1,
        text: {
            style: {
              color: '#999',
              position: 'absolute',
              right: '0',
              top: '-25px',
              padding: 0,
              margin: 0,
              transform: null
            }
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
   
    let line2 = new ProgressBar.Line('.itemProgress2', {
        color: '#dc3545',
        strokeWidth: 1,
        trailWidth: 1,
        text: {
            style: {
              color: '#999',
              position: 'absolute',
              right: '0',
              top: '-25px',
              padding: 0,
              margin: 0,
              transform: null
            }
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
   
    let line3 = new ProgressBar.Line('.itemProgress3', {
        color: '#dc3545',
        strokeWidth: 1,
        trailWidth: 1,
        text: {
            style: {
              // Text color.
              // Default: same as stroke color (options.color)
              color: '#999',
              position: 'absolute',
              right: '0',
              top: '-25px',
              padding: 20,
              margin: 5,
              transform: null
            }
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
 
    let line4 = new ProgressBar.Line('.itemProgress4', {
        color: '#dc3545',
        strokeWidth: 1,
        trailWidth: 1,
        text: {
            style: {
              color: '#999',
              position: 'absolute',
              right: '0',
              top: '-25px',
              padding: 0,
              margin: 0,
              transform: null
            }
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
    
    
    let grid = document.querySelector('.grid');

    let msnry = new Masonry( grid, {
    
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    //percentPosition: true
    });
    imagesLoaded(grid).on( 'progress', function() {
    msnry.layout();
    });
    
    let gridItems = document.querySelectorAll('.grid-item');
    let gridItemsHref = document.querySelectorAll('.href');
    

    [].slice.call(gridItemsHref).forEach(item=>{
        
        item.onclick = (event)=>{
          let atr = event.target.getAttribute('data');
          [].slice.call(gridItemsHref).forEach(elem=>{
            elem.classList.remove('active');
          });

          [].slice.call(gridItems).forEach(elem => {
            msnry.remove(elem);
            msnry.layout();
            setTimeout(()=>{
                event.target.classList.add('active');
                if(elem.getAttribute('data')== atr){
                    grid.appendChild(elem);
                    msnry.appended( elem);
                    msnry.layout(); 
                }
                if( atr == 'all' ){
                    elem.classList.add('active');
                    grid.appendChild(elem);
                    msnry.appended( elem);
                    msnry.layout();
                }
              
            },1000);
            
        })
        }
    });
    const wow = new WOW.WOW({ 
    duration:'0.5s',
    offset:"200",
    live: true,
    callback:     function(box) {
    if(box.parentNode.getAttribute('id') == 'effective'){
        setTimeout(()=>{
            line1.animate(1, {
                duration: 800
            })
            line2.animate(0.8, {
                duration: 800
            })
            line3.animate(0.5, {
                duration: 800
            })
            line4.animate(0.8, {
                duration: 800
            }) 
        },500);
        
    }
  }, });
  wow.init();

  //--modal

  let modal = 
    {
        'modal-andrew':AndrewT,
        'modal-monsik':MonsikT,
        'modal-bmw':BmwT,
        'modal-black-cat':BlackCatT,
        'modal-ptichki-dress':PtichkiDressT,
        'modal-v-oblakah':OblakaT,
        'modal-flor-art':FlorArtT
    };

  let modalImg = [];
  [].slice.call(gridItems).forEach((item,index)=>{
      item.onclick = function(event){
        let atr = this.getAttribute('data-name-modal');
        new Modal("body",modal[`${atr}`]({images}));
       
    }
  })
 
},1000);

}

