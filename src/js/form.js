const { post } = require("jquery");


const form = document.getElementById('form')
console.log(form)

form.addEventListener('submit', formSend);

async function formSend(e) {
    e.preventDefault();

    let formData = new FormData(form);

    let response = await fetch('sendmail.phph', {
        method: 'POST',
        body: formData
    });
    if(responce.ok) { 
        let result = await response.json();
        alert(result.message)
        formPreview.innertHTML= '';
        form.reset();
    } else {
        alert('Ошибка')
    }
}




