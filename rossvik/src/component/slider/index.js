import './style.scss';
import template from './template.jade'



export default (item_slide) =>{
    document.querySelector('#slider').innerHTML = template(
      {items:item_slide}
    );
 
    let slids = [].slice.call(document.querySelectorAll('.slide'));
    slids.forEach(item=>item.style.height=Math.floor(slids[0].offsetWidth)+"px");
    let startPosition = 0;
    let countCall = 2; 
    let prev = () =>{
        let currentPosition = startPosition;
        
        if(currentPosition <0){
            let positionMove = setInterval(()=>{  
                
                if(currentPosition<startPosition+slids[0].offsetWidth && -currentPosition>10){
                    currentPosition+=3;
                    
                    slids.forEach(item=>{
                        item.style.left = currentPosition + 'px';
                    });
                }
                else{
                    startPosition = currentPosition;
                    clearInterval(positionMove);
                }   
                },0);
        }
        else{
            
            slids.forEach(item=>{
                item.style.left = 0;
            });
        }
    }

    let next = () =>{
        let currentPosition = startPosition;
        if(currentPosition > -slids[0].offsetWidth*(slids.length-countCall)+50){
            let positionMove = setInterval(()=>{  
                if(currentPosition>startPosition-slids[0].offsetWidth){
                currentPosition-=3;
                slids.forEach(item=>{
                    item.style.left = currentPosition + 'px';
                });
                }
                else{
                    startPosition = currentPosition;
                    clearInterval(positionMove);
                }   
            },0);
        }
        else {
            slids.forEach(item=>{
                item.style.right = -slids[0].offsetWidth*(slids.length-countCall);
                startPosition = -slids[0].offsetWidth*(slids.length-countCall);
            });
        }
    }    
   
    
   
    document.querySelector('.arrow_prev').onclick = prev;
    document.querySelector('.arrow_next').onclick = next;
    
    }


  
