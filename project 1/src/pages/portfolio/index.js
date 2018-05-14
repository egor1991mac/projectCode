import './style.scss';
import template from './template.jade';
import slider from '../../component/slider';

function importAll(r) {
    let images = {};
    console.log(r.keys());
    r.keys().map((item, index) => {images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../img/project', false, /\.(png)$/));


export default ()=>{
    
    document.querySelector('#content').innerHTML = template();
    slider([{
        name:'4bel.by',
        img: images['4bel.png'],
        href: 'https://4belby.github.io/'
    },
    {
        name:'626.бел',
        img: images['626.png'],
        href: 'http://626.бел/'
    },
    {
        name:'бала.бел',
        img: images['626.png'],
        href: 'http://626.бел/'
    }
    
    ]);
    console.log(images['626.png']);
}

