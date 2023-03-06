

document.getElementById("btn-deposite").addEventListener("click", function () {
    const newDepositeAmount = getInputFieldValueById("deposite-field")
    const previousDepositeTotal = getElementValueById("deposite-total");

    const currentDepositeTotal = previousDepositeTotal + newDepositeAmount;


    setTextElementValueById("deposite-total", currentDepositeTotal)

    const previousBalanceTotal = getElementValueById("balance-total");

    const newBalanceTotal = newDepositeAmount + previousBalanceTotal;

    setTextElementValueById("balance-total", newBalanceTotal);
})



