$(document).ready(Initialize);

let costAnnual = 0;
let costMonthly = 0;

function Initialize(){
    $('#submitButton').on('click', addEmployee)
}

function addEmployee(){
    let newRow = $(`<tr><td>` + $('#firstName').val() + `</td>
        <td>` + $('#lastName').val() + `</td>
        <td>` + $('#id').val() + `</td>
        <td>` + $('#title').val() + `</td>
        <td id="individualSalary">` + $('#annualSalary').val() + `</td>
        <td> <button id="deleteButton" class="btn btn-dark">Delete</button> </td></tr>`);
    $(newRow).find('#deleteButton').on('click', deleteEmployee);
    $('#body').append(newRow);

    let annualSalary = parseFloat($('#annualSalary').val());
    costAnnual += annualSalary;
    costMonthly = costAnnual.toFixed(2) / 12;
    if (costMonthly > 20000) {
    $('#total').css('color', 'red');
    } else {
    $('#total').css('color', 'black');
    }
    $('#total').text(costMonthly.toFixed(2)); 
    

    $('#firstName').val('')
    $('#lastName').val('')
    $('#id').val('')
    $('#title').val('')
    $('#annualSalary').val('')
}

function deleteEmployee(){
    let rowElement = $(this).parent().parent();

    let salaryAmountText = $(rowElement).children('#individualSalary').text();
    let salaryAmount = parseFloat(salaryAmountText);
    costAnnual -= salaryAmount;

    costMonthly = costAnnual.toFixed(2) / 12;
    $('#total').text(costMonthly.toFixed(2)); 

    rowElement.remove();
    
}


