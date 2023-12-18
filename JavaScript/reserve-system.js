document.getElementById('check-plan').addEventListener('submit', function () {
    let planSelect = document.getElementById('plan-select');
    let planValue = planSelect.value;

    document.getElementById('step1').style.display = 'none';

    document.getElementById('step2').style.display = 'block';

    document.getElementById('selected-plan').textContent = 'Selected Plan: ' + planValue;
});
