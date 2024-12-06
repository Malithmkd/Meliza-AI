document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button:not(.current)');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert(`You selected the ${button.innerText} plan!`);
        });
    });
});
