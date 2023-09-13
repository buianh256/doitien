function convertMoney(){
    //input
    const money = +document.getElementById('money').value;
    const from = +document.getElementById('from').value;
    const to = +document.getElementById('to').value;
    //tinh toan
    const result = money * to /from;
    //output
    document.getElementById('result').innerHTML = result.toFixed(2);
}