const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

// total bill per persn
const calculateBill = () => {
  // coverting bill into a number   (200)
  const bill = Number(billInput.value)

  // converting tip into percentage   (10/100)==10
  const tipPercent = Number(tipInput.value) / 100

  // tipamount (200*1/10)==20
  const tipAmount = bill * tipPercent

  // total  (20+200)==220
  const total = tipAmount + bill

  // amount each person has to pay (220/2)==110
  const perPersonTotal = total / numberOfPeople

  // updating on dom
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
}

// splitting amng more ppl
const increasePeople = () => {
  numberOfPeople += 1

  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople

  // calculate the bill based on the new number of people
  calculateBill()
}

// slpiiting amng fewer ppl
const decreasePeople = () => {
  if (numberOfPeople <= 1) {
    return
  }
  numberOfPeople -= 1

  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople

  // calculate the bill based on the new number of people
  calculateBill()
}