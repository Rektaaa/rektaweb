function jumlahkan() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const hasil = num1 + num2;
    document.getElementById('hasil').textContent = `Hasil: ${hasil}`;
}

function reset() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('hasil').textContent = 'Hasil: ';
}
