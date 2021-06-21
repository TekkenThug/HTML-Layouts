let btnSendForm = document.querySelector("#btnSendFormFooter");
let inputFields = document.querySelector("#phone_field_footer");

let btnSendOrder = document.querySelector("#btnSendOrder");
let inputFieldPhone = document.querySelector(".requirePhone");
let inputFieldName = document.querySelector(".requireName");

//console.log(btnSendForm);
//console.log(inputFields);

function InvalidMsg(textbox) { 
            if (textbox.value === '') {
                textbox.value.setCustomValidity('Поле пусто'); 
            } else if (textbox.validity.patternMismatch) {
                textbox.setCustomValidity('Пожалуйста, введите имя'); 
            } else { 
                textbox.setCustomValidity('');
                return true;  
            };
            
};

function InvalidMsgTel(textbox) { 
            if (textbox.value === '') {
                textbox.value.setCustomValidity('Поле пусто'); 
            } else if (textbox.validity.patternMismatch) {
                textbox.setCustomValidity('Пожалуйста, введите телефон'); 
            } else { 
                textbox.setCustomValidity('');
                return true;  
            };
            
};


inputFieldName.oninput = function () {
	InvalidMsg(this);
};

inputFieldPhone.oninput = function () {
	InvalidMsgTel(this);
};



