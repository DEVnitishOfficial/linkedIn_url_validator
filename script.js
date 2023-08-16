// let urlRegex = /^(https:\/\/www.linkedin.com\/in\/)[a-z A-Z 0-9 \_\-]{4,29}[(a-z A-Z 0-9)]$/
const urlRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
const opScreen = document.getElementById('output')
let url = "";

document.getElementById('urlValidation').addEventListener('input',(e)=>{
    url = e.target.value;
    opScreen.innerText = "";
})

document.getElementById('btn').addEventListener('click', ()=> {

    if(url != ""){

       if(urlRegex.test(url)){
        opScreen.innerText = "Your LinkedIn URL is Valid" ;
        opScreen.style.color = "green" ;
       }
       else{
        opScreen.innerText = "Your LinkedIn URL is not Valid" ;
        opScreen.style.color = "red" ;
       }
    }
    else{
        alert('please entre the url !!!')
    }
})