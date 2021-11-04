var selectedRow = null;
function onenviar(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}


function readFormData(){
    var formData = {};
    formData["nome"] = document.getElementById("nome").value;
    formData["sobrenome"] = document.getElementById("sobrenome").value;
    formData["cpf"] = document.getElementById("cpf").value;
    formData["telefone"] = document.getElementById("telefone").value;
    return formData;
}


function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.nome;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.sobrenome;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.cpf;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.telefone;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='onEdit(this)'>Editar</button> <button onClick='onDelete(this)'>Deletar</button>`
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('nome').value = selectedRow.cells[0].innerHTML;
    document.getElementById('sobrenome').value = selectedRow.cells[1].innerHTML;
    document.getElementById('cpf').value = selectedRow.cells[2].innerHTML;
    document.getElementById('telefone').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.nome;
    selectedRow.cells[1].innerHTML = formData.sobrenome;
    selectedRow.cells[2].innerHTML = formData.cpf;
    selectedRow.cells[3].innerHTML = formData.telefone;

}



function onDelete(td){
    if(confirm('Você quer deletar este registro?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}


function resetForm(){
    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('telefone').value = '';
}