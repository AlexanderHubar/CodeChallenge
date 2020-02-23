const form = document.querySelector('#form')

const steps = document.getElementsByClassName('step')
const stepsNavigation = document.getElementsByClassName('step-list__item')

const backBtn = document.getElementById('backBtn')
const continueBtn = document.getElementById('continueBtn')

let step = 0

const showStep = step => {
  steps[step].style.display = 'flex'
  stepsNavigation[step].classList.add('active')

  if (step === 0) {
    backBtn.style.display = 'none'
  } else {
    backBtn.style.display = 'flex'
  }

  if (step === steps.length - 1) {
    continueBtn.innerText = 'Submit'
  } else {
    continueBtn.innerText = 'Continue'
  }
}

const changeStep = (next = true) => {
  steps[step].style.display = 'none'
  stepsNavigation[step].classList.remove('active')

  if (next) {
    step++
  } else {
    step--
  }

  showStep(step)
}

backBtn.onclick = e => {
  e.preventDefault()

  changeStep(false)
}

continueBtn.onclick = e => {
  e.preventDefault()

  if (step < steps.length - 1) {
    changeStep()
  } else {
    form.submit()
  }
}

showStep(step)
