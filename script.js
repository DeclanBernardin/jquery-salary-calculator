$(document).ready(Initialize);

function Initialize(){

    $('#submitButton').on('click', addEmployee)
    $('#submitButton').on('click', addMonthlyCost)
}

function addEmployee(){
    $('#body').append(`<tr><td>` + $('#firstName').val() + `</td>
    <td>` + $('#lastName').val() + `</td>
    <td>` + $('#id').val() + `</td>
    <td>` + $('#title').val() + `</td>
    <td>` + $('#annualSalary').val() + `</td>
    <td> <button id= "deleteButton">Delete</button> </td></tr>`);

    $('#firstName').val('')
    $('#lastName').val('')
    $('#id').val('')
    $('#title').val('')
    $('#annualSalary').val('')
}



function addMonthlyCost(){
    //Take the annual salary divide it by 12 
    
     
   
    //Then add that number to the monthly cost
}
