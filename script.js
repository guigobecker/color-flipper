function mudarCor(){
    let vermelho = Math.floor(Math.random() * 256);
    let verde = Math.floor(Math.random() * 256);
    let azul = Math.floor(Math.random() * 256);
    let cor = "rgb(" + vermelho + "," + verde + "," + azul + ")";
    document.getElementById("colorFlipper").style.backgroundColor = cor;
}