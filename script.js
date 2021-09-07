const bilangan1 = document.getElementById('Bilangan1');
const bilangan2 = document.getElementById('Bilangan2');

const item = document.getElementById('Item');
const submit = document.getElementById('submit');
const hasill = document.getElementById('hasill');
const clear = document.getElementById('clear');
const boxAlert = document.querySelector(".boxAlert");
var itemAngka;

submit.addEventListener('click', function(){
	if (item.value == '+') {
		itemAngka = parseInt(bilangan1.value) + parseInt(bilangan2.value);
		hasill.innerHTML = itemAngka;
	} else if (item.value == '-') {
		itemAngka = bilangan1.value - bilangan2.value;
		hasill.innerHTML = itemAngka;
	} else if (item.value == '/') {
		itemAngka = bilangan1.value / bilangan2.value;
		hasill.innerHTML = itemAngka;
	} else if (item.value = '*') {
		itemAngka = bilangan1.value * bilangan2.value;
		hasill.innerHTML = itemAngka;
	}

	if (bilangan1.value == '' && bilangan2.value == '') {
		hasill.innerHTML = 0;
		boxAlert.style.display = 'flex';
	}	
})

clear.addEventListener('click', function(){
	bilangan1.value = '';
	bilangan2.value = '';
	hasill.innerHTML = 0;
})



function tutup() {
	boxAlert.style.display = '';
}
