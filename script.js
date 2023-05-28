const password = document.getElementById('password');
const background = document.getElementById('background');
const validationRules = document.querySelectorAll('.requirement-list li')

const requirements = [
  { regex: /.{8,}/, index: 0 },
  { regex: /[0-9]/, index: 1 },
  { regex: /[a-z]/, index: 2 },
  { regex: /[^A-Za-z0-9]/, index: 3 },
  { regex: /[A-Z]/, index: 4 }
]

let strengthCount = []

password.addEventListener('input', (event) => {
  const input = event.target.value;
  // const length = strengthCount.length;
  // const blurValue = 20 - length * 2;
  // background.style.filter = `blur(${blurValue}px)`
  validation(input)
})

function validation(input) {
  requirements.forEach(rule => {
    const isValid = rule.regex.test(input);

    if (isValid) {
      const validRule = validationRules[rule.index]
      validRule.classList.add('valid')
      if (!strengthCount.includes(rule)) {
        strengthCount.push(rule)
      }
    } else {
      validationRules[rule.index].classList.remove('valid')
      const findElement = strengthCount.indexOf(rule)
      if (findElement !== -1) {
        strengthCount.splice(findElement, 1)
      }
    }

  })
  const length = strengthCount.length;
  console.log(length)
  const blurValue = 20 - length * 4;
  console.log(blurValue)
  background.style.filter = `blur(${blurValue}px)`
}

