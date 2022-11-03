document.getElementById('Withdraw-btn').addEventListener('click',function(){
// console.log('hi');

    const withdrawfile = document.getElementById('withdraw-file');
    const NewwithdrawString = withdrawfile.value;
    const Newwithdrawvalue = parseFloat(NewwithdrawString);

    // console.log(Newwithdrawvalue);

    const withdrawtotal = document.getElementById('withdraw-total');
    const previsewithdrawString = withdrawtotal.innerText;
    const previsewithdrawOutput = parseFloat(previsewithdrawString);

    // console.log(previsewithdrawOutput);

    const currentWithdrawTotal =  previsewithdrawOutput + Newwithdrawvalue ;
    withdrawtotal.innerText = currentWithdrawTotal;

    const balancetotal = document.getElementById('balance-total');
    const PrevisesbalanceString = balancetotal.innerText;
    const Previsebalanse = parseFloat(PrevisesbalanceString);
    // console.log(Previsebalanse);

    const newbalascetotal = Previsebalanse - currentWithdrawTotal;
    balancetotal.innerText = newbalascetotal;





    withdrawfile.value = '';
})