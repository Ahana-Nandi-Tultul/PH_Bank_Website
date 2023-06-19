document.getElementById('btn-withdraw').addEventListener('click', function(){
    // withdraw
    const withdrawElement = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawElement.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawElement.value = '';
    if(isNaN(newWithdrawAmount) || typeof newWithdrawAmount !== 'number'){
        alert('Please provide a valid number');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    // balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    if(newWithdrawAmount > previousBalanceTotal){
        alert("You can't withdraw more than your balance.");
        return;
    }
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    balanceTotalElement.innerText = currentBalanceTotal;

})