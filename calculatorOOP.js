class Calculator{
        constructor(div_current,div_previous){

        this.div_current =div_current
        this.div_previous =div_previous
        this.clear();
    }
clear(){
 this.current =''
 this.previous='0'
 this.operation= undefined
} 
delete(){
    this.current = this.current.toString().slice(0,-1);
    // this.previous =this.previous.toString().slice(0,-1); 
}
getNumberFromUser(number){
if(number === '.' && this.current.includes('.')) return    
this.current = this.current.toString() + number.toString()
}
chooseOperation(operation){
 if(this.current ==='')return
 if(this.previous !==''){// while we have a number in the previous section
     this.compute()
 }   
 this.operation =operation
 this.previous =this.current //appending the  current number to  the previous variable
 this.current ='' // make the current empty
}
compute(){
 const current =parseFloat(this.current)
 let previous =parseFloat(this.previous)
 if(isNaN(current) || isNaN(previous))
 var answer;
 switch (this.operation) {
     case '+' :
           answer = previous + current
          break;
     case '-' :
            answer = previous - current
            break;  
     case 'x' :
             answer = previous * current
             break;  
     case '÷' :
           if(current ===0){
              answer =str;
            alert("Math error");
           }else{
             answer =previous / current
           }
           break;
     case '%' :
              answer = previous / 100
          break;  
     case '√' :
        answer =Math.sqrt(previous)
        break;
      case 'Sin':
          answer =Math.sin(previous)
          break;  
     case 'Cos':
         answer =Math.cos(previous)
         break;
     case 'Tan':
         answer =Math.tan(previous)
         break;
      case 'log':
          answer =Math.log(previous)
         break;  
      case '1/x':
        answer = 1 /previous
         break;
     case 'exp':
        answer= Math.exp(previous)
         break;
      case 'X!':
         if(previous == 1|| previous == 0){
             answer =1;
         }else{
       for(let i=previous; i>=1; --i)
        previous *=i
        answer = previous; 
         }
         break;
     default :
     return     
 }   
 this.current =answer;
 this.operation =undefined
 this.previous =''
}

getDisplayNumber(number){
  const stringNum = number.toString()
  const intergerDigits =parseFloat(stringNum.split('.')[0])
  const decimalDigits = stringNum.split('.')[1]
  let intergerDisplay
  if(isNaN(intergerDigits)){
      intergerDisplay =''
  }else{
      intergerDisplay = intergerDigits.toLocaleString('en', {maximumFractionDigits: 0})
  }
  if(decimalDigits != null){
      return `${intergerDisplay}.${decimalDigits}`
  }else{
      return intergerDisplay
  }
}
updateDisplay(){
  this.div_current.innerText = this.getDisplayNumber(this.current)
  if(this.operation != null){
    this.div_previous.innerText = `${this.getDisplayNumber(this.previous)} ${this.operation}`
  }else{
      this.div_previous.innerText =''
  }
//  this.div_previous.innerText =this.previous
}

}
//let buttons =document.getElementsByTagName("button")
let div_previous =document.getElementById("previous-operand");
let div_current =document.getElementById("current-operand");
let equalButton =document.querySelector("[data-equals]");
let deleteAll =document.querySelector("[data-deleteAll]");
let backSpace =document.querySelector("[data-delete]");
let data_number =document.querySelectorAll("[data-number]");
let data_operation =document.querySelectorAll("[data-operation]");
// Creating instance of the class
let calculator = new Calculator(div_current,div_previous)
// Getting the inputs from the user
data_number.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.getNumberFromUser(button.innerText)
        calculator.updateDisplay()
    })
});
data_operation.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
});

equalButton.addEventListener('click', button =>{
    // call these functions
  calculator.compute()
  calculator.updateDisplay()
});

deleteAll.addEventListener('click', button =>{
    // call these functions
  calculator.clear()
//   calculator.updateDisplay()
div_current.innerHTML ="0"
div_previous.innerHTML =""
deleteAll.style.color='blue';
});
backSpace.addEventListener('click', button =>{
    // call these functions
  calculator.delete()
  calculator.updateDisplay()
});
let str ="Math error";