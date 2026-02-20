const form = document.getElementById("myForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function(e){
  e.preventDefault();

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if(response.ok){
      showMessage("Cererea dvs a fost trimisa cu succes. Va multumim", "success");
      form.reset();
    } else {
      showMessage("Eroare la trimitere. Incercati din nou", "error");
    }
  })
  .catch(() => {
    showMessage("Eroare la trimitere. Verificati conexiunea", "error");
  });
});

// funcție pentru afișarea mesajului cu fade-out
function showMessage(text, type) {
  msg.textContent = text;
  msg.className = `msg show ${type}`;
  
  // dispare după 5 secunde
  setTimeout(() => {
    msg.className = "msg"; // revine la starea inițială
  }, 5000);
}

window.addEventListener("load", function() {
  const welcome = document.getElementById("welcome-msg");
  
  // afișează mesajul
  welcome.classList.add("show");
  
  // dispare după 3 secunde
  setTimeout(() => {
    welcome.classList.remove("show");
  }, 3000);
});