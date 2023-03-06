

document.getElementById("btn-withdraw").addEventListener("click", function () {
    const newWithdrawAmount = getInputFieldValueById("withdraw-field");
    const previousWithdrawTotal = getElementValueById("withdraw-total");
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    setTextElementValueById("withdraw-total", currentWithdrawTotal);

    const previousBalanceTotal = getElementValueById("balance-total");

    const newBalanceTotal = previousBalanceTotal -newWithdrawAmount;

    setTextElementValueById("balance-total", newBalanceTotal);
})