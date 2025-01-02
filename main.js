function login() {
  window.location.href = "login.html";
}
function Register() {
  window.location.href = "login.html#";
}

function copy(text) {
  
  const inputTemp = document.createElement('input');
  inputTemp.value = text;
  
  document.body.appendChild(inputTemp);
  
  inputTemp.select();
  document.execCommand('copy');
  
  document.body.removeChild(inputTemp);
  
  
}


function goto(url) {

  
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }
  window.location.href = url;
 

}

