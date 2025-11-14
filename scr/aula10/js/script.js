function displayRadioValue(){
    var elemento = document.getElementsByName('gender');

    for(i = 0; i < elemento.length; i++){
        if(elemento[i].checked)
            document.getElementById("result").innerHTML 
            = "Genero: " + elemento[i].value;
        
    }
}

function getOption(){
    selectElement = document.querySelector('#select1');
    output = selectElement.value;
    document.querySelector('.output').textContent = output;
}