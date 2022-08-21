function getInputValueById(elementId) {
    const inputField = document.getElementById(elementId)
    const inputTotalString = inputField.value
    const inputTotal = parseInt(inputTotalString)
    return inputTotal;
}

function setValueById(elementId, value) {
    const setField = document.getElementById(elementId)
    setField.innerText = value;
}
document.getElementById('btn-calculate').addEventListener('click', function () {

    const incomeTotal = getInputValueById('income-field');
    const rentTotal = getInputValueById('rent-field');
    const foodTotal = getInputValueById('food-field');
    const clothsTotal = getInputValueById('cloths-field');

    const totalExpenses = rentTotal + foodTotal + clothsTotal;

    setValueById('expenses-total', totalExpenses)

    const newBalance = incomeTotal - totalExpenses;

    setValueById('balance-total', newBalance);
})

document.getElementById('savings-btn').addEventListener('click', function () {

    const incomeTotal = getInputValueById('income-field');
    const savingsElement = getInputValueById('save-field')
    const savingsAmount = (savingsElement / 100) * incomeTotal;

    setValueById('saving-total', savingsAmount);

    const previousBalanceTotal = document.getElementById('balance-total')
    const previousBalanceString = previousBalanceTotal.innerText
    const previousBalance = parseInt(previousBalanceString);

    const remainingBalanceAmount = previousBalance - savingsAmount;

    const remainingFieldElement = document.getElementById('remaining-balance')
    setValueById('remaining-balance', remainingBalanceAmount)
})