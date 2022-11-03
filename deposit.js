document.getElementById('btn-deposit').addEventListener('click',function(){
    // console.log('hi')
    const btnDeposite = document.getElementById('deposit-file');
    const NewdepositValueString =btnDeposite.value;
    // console.log(depositValue);
    const NewdepositValue = parseFloat(NewdepositValueString);
    

    const depositCurrent = document.getElementById('current-deposit');
    const PrevisedepositOutputString = depositCurrent.innerText;
    // console.log(depositOutput);
    const PrevisedepositOutput = parseFloat(PrevisedepositOutputString);
    

    const  currenDepositTotal =  PrevisedepositOutput + NewdepositValue;
    depositCurrent.innerText = currenDepositTotal;


    const balanceTotal = document.getElementById('balance-total');
    const PrevisesbalanceString = balanceTotal.innerText;
    const Previsebalanse = parseFloat(PrevisesbalanceString);
    
    const balanceCurrent =  Previsebalanse + NewdepositValue;
    balanceTotal.innerText = balanceCurrent;

    btnDeposite.value = '';
})