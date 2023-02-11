const bill = document.getElementById('bill');
const ppl = document.getElementById('ppl');
const tips = document.querySelectorAll('.input-tip'); 
const clear = document.querySelector('.btn-reset');
const diverrors = document.querySelectorAll('.message');
bill.value = 0;
ppl.value = 1;

tips.forEach(tip => {
    tip.addEventListener('click',() => {
        selectedTip = tip.value;
        document.getElementById('custom').value = "";
        for (let i = 0; i < diverrors.length; i++) {
            const diverror = diverrors[i];
            const input = diverror.parentElement.querySelector('.input');
            if (input.value > 0) {
                operation();
                success(diverror,"")
            } else {
                error(diverror,"Can't be zero")
            }   
        }
        function success(element,message) {
            const inputgroup = element.parentElement;
            const showmessage = inputgroup.querySelector('.message');
            
            //applying styles
            inputgroup.classList.add('success');
            inputgroup.classList.remove('error');
            showmessage.textContent = message;
        }
        function error(element,message) {
            const inputgroup = element.parentElement;
            const showmessage = inputgroup.querySelector('.message');

            document.getElementById('tipAmount').textContent = "0.00";
            document.getElementById('total').textContent = "0.00";

            inputgroup.classList.add('error');
            inputgroup.classList.remove('success');
            showmessage.textContent = message;
        }
    })
    const custom = document.getElementById('custom');
    custom.addEventListener('keyup',() => {
        tip.checked = false;
        selectedTip = custom.value/100;
        operation();
    })
});

bill.addEventListener('keyup', () => {
    tips.forEach(tip => {
        if (tip.checked) {
            operation();
        } else {
            selectedTip = custom.value/100;
            operation();
        }
    })
})
ppl.addEventListener('keyup', () => {
    tips.forEach(tip => {
        if (tip.checked) {
            operation();
        } else {
            selectedTip = custom.value/100;
            operation();
        }
    })
})
function operation() {
    tipAmount = (bill.value*(Number(selectedTip))/ppl.value).toFixed(2);
    total = (bill.value*((Number(selectedTip)+1))/ppl.value).toFixed(2);
    document.getElementById('tipAmount').textContent = tipAmount;
    document.getElementById('total').textContent = total;
}

clear.addEventListener('click',() => {
    bill.value = "";
    bill.style.border = "none";
    ppl.value = "";
    ppl.style.border = "none";
    custom.value = "";
    document.getElementById('tipAmount').textContent = "0.00";
    document.getElementById('total').textContent = "0.00";
    diverrors.forEach(diverror => {
        diverror.textContent = "";
    })
    tips.forEach(tip => {
        if (tip.checked) {
            tip.checked = false;
        }
    })
})

