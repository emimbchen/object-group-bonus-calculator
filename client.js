var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];
var tableState = false;

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT
var Employee = function( employeeIn ){
  this.name = employeeIn.name;
  this.bonusPercentage = bonusCalc(employeeIn);
  this.totalBonus = parseInt(employeeIn.annualSalary) * this.bonusPercentage;
  this.totalCompensation = parseInt(employeeIn.annualSalary) + this.totalBonus;
};

function bonusCalc(employee){
  var bonus=0;
  switch(employee.reviewRating){
    case 3:
    bonus = 0.04;
    break;
    case 4:
    bonus = 0.06;
    break;
    case 5:
    bonus = 0.10;
    break;
    default:
    bonus = 0;
  }
  if(employee.employeeNumber.length===4){
    bonus+= 0.05;
  }
  if(parseInt(employee.annualSalary)>65000){
    bonus-=0.01;
  }
  if(bonus<0){
    bonus=0;
  }
  else if(bonus>0.13){
    bonus=0.13;
  }
  return bonus;
}
console.log(employees);
function displayTable(){
if(tableState === false){
  for (var i = 0; i < employees.length; i++){
    var employeeData = employeeBonus(employees[i]);
    console.log(employeeData);
    var tableRow = "<tr class=\"dataRows\" ><td>" + employeeData.name + "</td><td>" + employeeData.bonusPercentage + "</td><td>" + employeeData.totalCompensation + "</td><td>" + employeeData.totalBonus + "</td></tr>";
    $('table').append(tableRow);
  }
  tableState = true;
  $('td').hide();
}
if ($('td').is(':hidden')) {
  $('td').slideDown();
}
}
function employeeBonus(employeeIn){
  var bonusEmployee = new Employee(employeeIn);
  return bonusEmployee;
}
function main (){
  $('button').on('click', displayTable);

}
$(document).ready(main);
