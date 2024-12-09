function toggleExplanation(buttonNumber) {
    const explanation = document.getElementById(`explanation-${buttonNumber}`);
    if (explanation.style.display === 'block') {
        explanation.style.display = 'none';
    } else {
        explanation.style.display = 'block';
    }
}