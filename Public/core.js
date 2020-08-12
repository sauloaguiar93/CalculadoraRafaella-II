function calcular(){
    var nleu = document.getElementById('nleucocitos').value;

    if(nleu == null || nleu == 0){
        alert('Por favor, adicione um valor válido.');
    }else{
        var resp = (nleu * 10 * 21)/4;
        document.getElementById('resultado').style.display = "";
        document.getElementById('resultado').innerHTML = "<b>Resultado: </b>" + resp + "/mm³";
    }
}

function ocultar(){
    document.getElementById("resultado").style.display = "none";
}