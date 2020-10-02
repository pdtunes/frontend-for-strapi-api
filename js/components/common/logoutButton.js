import { clearStorage } from "../../utils/storage.js"

export default function logoutbutton(){
    const button = document.querySelector("#logout")
    if (button ) {  
        button.onclick = function() {
            const doLogOut = confirm("Are you sure, you want yo log out")
            if(doLogOut){
            clearStorage()
        location.href = "./"
    }
        }

}
};
