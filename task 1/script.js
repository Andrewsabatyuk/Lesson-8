class SalaryPerHour {
    constructor(moneyHour, hours) {
        let money = moneyHour;
        this.hours = hours;
        this.setMoney = function (cmoneyHour) {
            money = cmoneyHour;
        }

        this.getMoney = function () {
            return money;
        }
    }
}
SalaryPerHour.prototype.getResultAmount = function(){
    let moneyPerDay = this.hours * this.getMoney();
    let mounthMoney = 24 * moneyPerDay;
    return 12 * mounthMoney;
}


class monthSalary {
    constructor(mmoney) {
        let money = mmoney;
        this.setMoney = function(cmoney){
            money= cmoney;
        }
        this.getMoney = function(){
            return money;
        }
    
    }
    
}
monthSalary.prototype.getResultAmount = function(){
    return 12 * this.getMoney();
  }

  let emoployee1 = new SalaryPerHour(40,6);
  emoployee1.setMoney(90);
  console.log(emoployee1.getResultAmount());
  let employee2 = new monthSalary();
employee2.setMoney(4500);
console.log(employee2.getResultAmount());