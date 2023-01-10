let string = ""
let buttons = document.querySelectorAll('.button')
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (btn) => {
    if (btn.target.innerHTML == '=') {
      string = eval(string)
      document.querySelector('input').value = string
    }
    else if (btn.target.innerHTML == 'AC') {
      string = " "
      document.querySelector('input').value = string
    }


    else {
      console.log(btn.target)
      string = string + btn.target.innerHTML
      document.querySelector('input').value = string
    }

  })
})