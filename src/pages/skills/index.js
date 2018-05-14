import './style.scss';
import template from './template.jade';
function importAll(r) {
    let images = {};
    console.log(r.keys());
    r.keys().map((item, index) => {images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../img/skills', false, /\.(png)$/));

export default ()=>{
    document.querySelector('#content').innerHTML =  template({images});
}