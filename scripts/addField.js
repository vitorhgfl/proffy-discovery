//Procurar o botão
document.querySelector("#add-time") 

//Quando clicar no botão
.addEventListener('click', cloneField)

//Executar uma ação
function cloneField(){
    //Duplicar campos. que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //Pegar os campos, que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //Para cada campo limpar

    fields.forEach(function(field) {
        //Pegar o field do momento
        field.value = ""        
    });
    

    //Colocar na página. onde?
    document.querySelector('#schedule-item').appendChild(newFieldContainer)
}

//NODE PODE DAR PROBLEMA

