import { Notify } from "notiflix";


const form = document.getElementById('form')
const formInput = document.querySelectorAll('._req');
console.log(formInput);
const btnSubmit = document.querySelector('.btn');
console.log(btnSubmit);
const mailInput = document.querySelector('._email');
console.log(mailInput);



form.addEventListener('submit', formSend);

console.log(form)

function formSend(e) {
    e.preventDefault();

    let self = e.currentTarget;
    let error = 0;

    formInput.forEach(input => {
        const inputName = input.name;
        console.log(inputName)
        if(input.value === '') {  
          Notify.failure(`Заполните поле ${inputName}` ,{
                position: "center-center",
                timeout: 1000
            });
            error ++;
        }
     })

     if(emailTest(mailInput)) {
        Notify.failure('Не коректна пошта' ,{
            position: "center-center",
            timeout: 1000
        });
        error ++;
     }
     console.log(error);

    // отправка
		let formData = new FormData(self);
		let xhr = new XMLHttpRequest();

        if (error === 0) {
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        Notify.success('Отправлено' , {
                            position: "center-center",
                            timeout: 1000
                        });
                    }
                }
            }
    
            xhr.open('POST', 'mail.php', true);
            xhr.send(formData);
            e.currentTarget.reset();
        }
}

function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}




