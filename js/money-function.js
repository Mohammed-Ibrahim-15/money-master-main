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

    if (isNaN(incomeTotal && rentTotal && foodTotal && clothsTotal)) {
        alert('Please Provide a Valid Input!!')
        return
    }

    if (incomeTotal && rentTotal && foodTotal && clothsTotal < 0) {
        alert('Please Provide a Valid Positive Number!!')
        return
    }


    const totalExpenses = rentTotal + foodTotal + clothsTotal;

    if (totalExpenses > incomeTotal) {
        alert('You Can Not Expense More Than Your Income!!')
        return;
    }

    setValueById('expenses-total', totalExpenses)

    const newBalance = incomeTotal - totalExpenses;

    setValueById('balance-total', newBalance);
})

document.getElementById('savings-btn').addEventListener('click', function () {

    const incomeTotal = getInputValueById('income-field');
    const savingsElement = getInputValueById('save-field')

    if (savingsElement >= 100) {
        alert('Saving Amount Limit is Not More Than 100%!!')
        return
    }

    const savingsAmount = (savingsElement / 100) * incomeTotal;

    const previousBalanceTotal = document.getElementById('balance-total')
    const previousBalanceString = previousBalanceTotal.innerText
    const previousBalance = parseInt(previousBalanceString);

    if (savingsAmount > previousBalance) {

        alert('You Can Not Save More Than Your Balance!!')
        return;
    }

    setValueById('saving-total', savingsAmount);

    const remainingBalanceAmount = previousBalance - savingsAmount;

    const remainingFieldElement = document.getElementById('remaining-balance')
    setValueById('remaining-balance', remainingBalanceAmount)
})