//manipulating the DOM API
const inputBirthdayEl         = document.getElementById('birthday');
const ageButtonEl     = document.getElementById('age-calculate');
const resultEl        = document.getElementById('result');


//creating functions
function calculateAge(){
    //console.log("clicked")
    const inputBirthdayValue = inputBirthdayEl.value;
    if(inputBirthdayValue === ""){
        alert('please enter your birthday')
    }else{
        const age =getAge(inputBirthdayValue);
        //console.log(age);
        resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old `;
    }
}

function getAge(inputBirthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(inputBirthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    //console.log(age);

    const month = currentDate.getMonth()-birthdayDate.getMonth();

    if(month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDay())){
        age--
    }
    return age
}

//add event listener
ageButtonEl.addEventListener("click" ,calculateAge);