document.querySelector('form').addEventListener("submit", function(event){
    const errors = [];

    if(document.getElementById("name").value === "" ){
        errors.push("Please enter a name");
    }
    if (document.getElementById('password').value.length <= 6) {
        errors.push('Password must be greter than 6 characters');
    }
    if (errors.length > 0) {
        event.preventDefault();
        document.querySelector("#row").style.border = '3px solid red'
        document.querySelector('p').textContent = errors.join (',');
        document.querySelector('p').style.color = 'red';
    }
})