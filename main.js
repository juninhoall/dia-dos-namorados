const yes = document.getElementById("yes")
const no = document.getElementById("no")

yes.addEventListener("click", function
    () {
    alert("Mensagem fofinha aqui..!!")
    }
)
no.addEventListener("mouseenter", function() {
    const mudarPosicaoTop = Math.random() * 100;
    const mudarPosicaoLeft = Math.random() * 100;
    no.style.position = "absolute";
    no.style.zIndex = "1"
    no.style.top =  mudarPosicaoTop + "vh";
    no.style.left =  `${mudarPosicaoLeft}px`;
    setTimeout(function() {

    }, 1000)
})
