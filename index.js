var markMass = markMass = prompt('What is mass of Mark?' );
var markHeight = markHeight = prompt('What is height of Mark?' );
var johnMass = johnMass = prompt('What is mass of John?' );
var johnHeight = johnHeight = prompt('What is height of John?' ); 
var markBMI = markMass / (markHeight ** 2); 
var johnBMI = johnMass / (johnHeight ** 2);

if(markBMI > johnBMI){
  alert('BMI of Mark is bigger than BMI of John)');
}
else {
  alert('BMI of John is bigger than BMI of Mark)');
}