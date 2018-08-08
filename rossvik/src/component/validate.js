export default class Validete {
    constructor(){
        this.email = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";
    }

    valid_email(){
        if(this.length<4){
            this.classList.toggle('not_valid');
            return false;
        }
    }
}