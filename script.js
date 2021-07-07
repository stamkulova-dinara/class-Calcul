class Calculator {
    constructor(number){
        this.Calcul = number,
        this.num1 = `num1-${this.Calcul}`,
        this.num2 = `num2-${this.Calcul}`,
        this.operator = `operator-${this.Calcul}`,
        this.resolve = `resolve-${this.Calcul}`
    }
    
    createElement = () => {
        let div = document.createElement('div')
        div.classList.add('container')
        document.body.prepend(div)

        document.body.style.backgroundColor = '#474766'

        let inp = document.createElement('input')
        inp.setAttribute('type', 'text')
        inp.id = this.num1
        inp.value = '2'
        inp.style.color = 'white'
        inp.style.backgroundColor = '#f3900d'
        inp.style.fontWeight = 'bold'
        div.append(inp)

        let inp2 = document.createElement('input')
        inp2.setAttribute('type', 'text')
        inp2.id = this.operator
        inp2.value = '+'
        inp2.style.backgroundColor = '#ddd8d1'
        div.append(inp2)

        let inp3 = document.createElement('input')
        inp3.setAttribute('type', 'text')
        inp3.id = this.num2
        inp3.value = '2'
        inp3.style.color = 'white'
        inp3.style.fontWeight = 'bold'
        inp3.style.backgroundColor = '#f3900d'
        div.append(inp3)

        let btn = document.createElement('button')
        btn.innerHTML = 'solve'
        btn.addEventListener('click', this.solve)
        btn.style.color = 'white'
        btn.style.backgroundColor = '#2422a1'
        div.append(btn)

        let resolve = document.createElement('span')
        resolve.id = this.resolve
        resolve.style.color = 'white'
        resolve.style.fontWeight = 'bold'
        div.append(resolve) 
    }

    solve = () => {
        let number1 = document.getElementById(this.num1)
        let operator = document.getElementById(this.operator)
        let number2 = document.getElementById(this.num2)
        let resolve = document.getElementById(this.resolve)

        switch (operator.value) {
            case '+':
               resolve.innerHTML = parseInt(number1.value) + parseInt(number2.value);
               break;
            case '-':
              resolve.innerHTML = parseInt(number1.value) - parseInt(number2.value);
              break;
            case '*':
              resolve.innerHTML = parseInt(number1.value) * parseInt(number2.value);
              break;
            case '/':
              resolve.innerHTML = parseInt(number1.value) / parseInt(number2.value);
              break;
            default:
              break;
          }  
        };
}

const calc = new Calculator(1)
calc.createElement()

const calc2 = new Calculator(2)
calc2.createElement()