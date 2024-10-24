document.getElementById('calculate').addEventListener('click', calculatePrice);

function calculatePrice() {
    let basePrice = 100;

    let educationCoeff = parseFloat(document.getElementById('education').value);
    let netWorthCoeff = parseFloat(document.getElementById('networth').value);
    let price = basePrice * educationCoeff * netWorthCoeff;

    let casteBonus = parseFloat(document.getElementById('caste').value);
    price += casteBonus;

    if (document.getElementById('music').checked) price += parseFloat(document.getElementById('music').value);
    if (document.getElementById('cook').checked) price += parseFloat(document.getElementById('cook').value);
    if (document.getElementById('easygoing').checked) price += parseFloat(document.getElementById('easygoing').value);
    if (document.getElementById('sing').checked) price += parseFloat(document.getElementById('sing').value);

    let ageCoeff = parseFloat(document.querySelector('input[name="age"]:checked').value);
    price *= ageCoeff;

    let reputationCoeff = 1;
    if (document.getElementById('parentGossip').checked) reputationCoeff *= parseFloat(document.getElementById('parentGossip').value);
    if (document.getElementById('characterGossip').checked) reputationCoeff *= parseFloat(document.getElementById('characterGossip').value);
    if (document.getElementById('generalGossip').checked) price += parseFloat(document.getElementById('generalGossip').value);

    price *= reputationCoeff;

    document.getElementById('result').innerText = "Final Price: $" + price.toFixed(2);
}
