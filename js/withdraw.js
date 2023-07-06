// withdraw part
document.getElementById('user-withdrw').addEventListener('click',function(){
    const withdrawField=document.getElementById('withdrw-field')
    const newWithdrawString=withdrawField.value;
    const newWithdraw=parseFloat(newWithdrawString);
    // clear
    withdrawField.value='';
    // Is Enter value is NAN:
    if(isNaN(newWithdraw)){
        alert('please provide a valid number');
        return;
    }

    const withdrawTotalAmount=document.getElementById('withdraw-total');
    const previousWithdrawstring=withdrawTotalAmount.innerText;
    const previousTotalWithdraw=parseFloat(previousWithdrawstring);

    
    // totall balance:
    const balanceField=document.getElementById('total-balance');
    const previousTotallBalanceString=balanceField.innerText;
    const previousTotallBalance=parseFloat(previousTotallBalanceString);

    

    // if the value is greter then Totall balance:
    if(newWithdraw>previousTotallBalance){
        alert('This amount is bigger then your bank amount')
        return;
    }
    // current total money withdraw:
    const currentWithdrawTotal=newWithdraw+previousTotalWithdraw;
    withdrawTotalAmount.innerText=currentWithdrawTotal;

    // current totall balance:
    const currentBalance=previousTotallBalance - newWithdraw;
    balanceField.innerText=currentBalance;

    

    
})