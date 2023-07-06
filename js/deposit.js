document.getElementById('user-deposit').addEventListener('click',function(){
    // transection input
    const depositField=document.getElementById('deposit-field');
    const newDepositeAmmountString=depositField.value;
    const newDepositeAmmount=parseFloat(newDepositeAmmountString)
    // amount of deposit widrwn totall-ammount
    //check Amount of deposit:
    const depositTotalElement=document.getElementById('deposit-total')
    const previousTotalDepositString=depositTotalElement.innerText;
    const previousTotalDeposit=parseFloat(previousTotalDepositString);
    // current deposit:
    const currentDepositTotal=previousTotalDeposit+newDepositeAmmount;

    depositTotalElement.innerText=currentDepositTotal;

    // totall balance:
    const balanceField=document.getElementById('total-balance');
    const previousTotallBalanceString=balanceField.innerText;
    const previousTotallBalance=parseFloat(previousTotallBalanceString);
    
    // current balance:
    const currentBalance=previousTotallBalance+newDepositeAmmount;
    balanceField.innerText=currentBalance;


    

    // clear the deposit input field:
    depositField.value="";

})
    