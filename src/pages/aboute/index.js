import './style.scss';
import template from './template.jade';
export default ()=>{
    document.querySelector('#content').innerHTML = template();
}