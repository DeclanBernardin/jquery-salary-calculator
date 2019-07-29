$(document).ready(Initialize);

let costAnnual = 0;
let costMonthly = 0;

function Initialize(){
    $('#submitButton').on('click', addEmployee)
}

let employeeArray = []
let idArray = []

function addEmployee(){
    $('#body').append(`<tr><td>` + $('#firstName').val() + `</td>
    <td>` + $('#lastName').val() + `</td>
    <td>` + $('#id').val() + `</td>
    <td>` + $('#title').val() + `</td>
    <td>` + $('#annualSalary').val() + `</td>
    <td> <button id= "deleteButton" class="btn btn-dark">Delete</button> </td></tr>`);

    let annualSalary = parseFloat($('#annualSalary').val());
    costAnnual += annualSalary;
    costMonthly = costAnnual / 12;
        if(costMonthly > 20000){
            $('#total').css('color', 'red')
        }
    $('#total').text(costMonthly)  
    
    function newEmployee(nameIn, lastIn, idIn, titleIn, salaryIn, monthIn){
        let employeeObject = {
            first: nameIn,
            last: lastIn,
            id: idIn,
            title: titleIn,
            annual: salaryIn,
            monthly : monthIn
        };
        employeeArray.push(employeeObject);
    }

    let name = $('#firstName').val();
    let last = $('#lastName').val();
    let id1 = $('#id').val();
    let title1 = $('#title').val();
    let salary = $('#annualSalary').val();
    let month = salary / 12;

    newEmployee(name, last, id1, title1, salary, month);

    idArray.push($('#id').val());
    console.log(idArray);

    $('#firstName').val('')
    $('#lastName').val('')
    $('#id').val('')
    $('#title').val('')
    $('#annualSalary').val('')

   

    $('#deleteButton').on('click', deleteEmployee)
}


function deleteEmployee(){
    for (let i = 0; i < idArray.length; i++){
        if (employeeArray[i].id === idArray[i]){
           $('tr').children().empty(); 
            
          console.log('test');
          
        }
        
    }


}


