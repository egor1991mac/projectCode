import './style.scss';
import template from './template.jade';
import gm from '../img/contact/gmail.png';
import life from '../img/contact/life.png';
import velcom from '../img/contact/velcom.png';
import viber from '../img/contact/viber.png';
export default ()=>{
    document.querySelector('#content').innerHTML = template({gm,life,velcom,viber});
}