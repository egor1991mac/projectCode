import './style.scss';
import template from './template.jade'

export default (selectorParent,pages,data) =>{
    
    document.querySelector(selectorParent).innerHTML = template({items:data});
    current(pages);
    return document.querySelector(selectorParent);
}

const current = (pages) =>{
  let root = document.querySelectorAll('.href');
  [].slice.call(root).forEach((item,index)=>{
    if(index === 0){
      item.classList.add('current');
      item.classList.remove('not_current');
      let render = pages.filter((val)=> val.name == item.getAttribute('href'));
      console.log(document.querySelector('#content'));
      document.querySelector('#content').classList.add('content_open');
      render[0].template();
        
    }  
      item.onclick = (event) =>{
       
        [].slice.call(root).forEach((item)=>{
            item.classList.remove('current');
            item.classList.add('not_current');
            document.querySelector('#content').classList.remove('content_open');
            document.querySelector('#content').classList.add('content_close');
            
        });
        item.classList.remove('not_current');
        item.classList.toggle('current');
        setTimeout(()=>{
        let render = pages.filter((val)=> val.name == item.getAttribute('href'));
        document.querySelector('#content').classList.remove('content_close');
        document.querySelector('#content').classList.add('content_open');
          render[0].template();
      },1000);
      }
      
  })
  

}

