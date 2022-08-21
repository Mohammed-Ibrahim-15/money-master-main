document.getElementById('btn-calculate').addEventListener('click', function () {

    const incomeField = document.getElementById('income-field')
    const incomeTotalString = incomeField.value;
    const incomeTotal = parseInt(incomeTotalString)

    const foodField = document.getElementById('food-field')
    const foodTotalString = foodField.value;
    const foodTotal = parseInt(foodTotalString);

    const rentField = document.getElementById('rent-field')
    const rentTotalString = rentField.value
    const rentTotal = parseInt(rentTotalString)

    const clothsField = document.getElementById('cloths-field')
    const clothsTotalString = clothsField.value;
    const clothsTotal = parseInt(clothsTotalString)

    const totalExpenses = foodTotal + rentTotal + clothsTotal;
    const totalExpensesField = document.getElementById('expenses-total')
    totalExpensesField.innerText = totalExpenses;

    const newBalance = incomeTotal - totalExpenses;
    const balanceField = document.getElementById('balance-total')
    balanceField.innerText = newBalance;
})