function selectPayment(paymentMethod) {
    var transactionInput = document.getElementById('transactionInput');
    var bkashBtn = document.getElementById('bkashBtn');
    var nagadBtn = document.getElementById('nagadBtn');
    bkashBtn.classList.remove('active');
    nagadBtn.classList.remove('active');
    if (paymentMethod === 'bkash') {
        transactionInput.placeholder = 'Enter bKash Transaction ID';
        bkashBtn.classList.add('active');
    } else if (paymentMethod === 'nagad') {
        transactionInput.placeholder = 'Enter Nagad Transaction ID';
        nagadBtn.classList.add('active');
    }
}