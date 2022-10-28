function calcDiscont () {
    console.log(`скидка составляет`, this) 
  
  }
  
  const personDiscont = {
    amount: "1900",
    personal: "5",
    region: '2',
    quantitative: '15',
    calcMyDiscont: function () {
      console.log((`от стоимости ${this.amount} - ваша скидка (${this.personal}%) - скидка постоянного покупателя ${this.quantitative} - и минус скидка региона ${this.region}`))  // Не врубаюсь, как привести их к числу((
      
     
    }
  
  }
  
  const vasia = {
    amount: "2300",
    personal: "8",
    region: "6",
    quantitative: "13",
  }
  
  
  const daria = {
    amount: "5000",
    personal: "10",
    region: "1",
    quantitative: "9",
  }
  
  personDiscont.calcMyDiscont.bind(daria)()
  personDiscont.calcMyDiscont.bind(vasia)()
  
  let lenaFinishDiscont = personDiscont.calcMyDiscont.bind(personDiscont)
  lenaFinishDiscont()
  
  
  