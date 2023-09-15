const input = document.querySelector('.searchInput')
const searchBtn = document.querySelector('.searchBtn')
const err = document.querySelector('.err')

const showAddDrink = document.querySelector('.showAddDrink')
const formAdd = document.querySelector('.formAdd')
const inputID = document.querySelector('#drinkID')
const drinkName = document.querySelector('#name')
const drunkness = document.querySelector('#drunkness')
const addBtn = document.querySelector('.addBtn')
const backBtn = document.querySelector('.backBtn')
const errID = document.querySelector('.errID')
const errName = document.querySelector('.errName')
const errDrunkness = document.querySelector('.errDrunkness')

const btnEdit = document.querySelectorAll('.btn-edit')
const btnDelete = document.querySelector('.btn-delete')
const btnDeleteAll = document.querySelectorAll('.btn-delete')

const formUpdate = document.querySelector('.formUpdate')
const drinkIDUpdate = document.querySelector('.drinkIdUpdate')
const nameUpdate = document.querySelector('.nameUpdate')
const drunknessUpdate = document.querySelector('.drunknessUpdate')
const updateBtn = document.querySelector('.updateBtn')
const errIdUpdate = document.querySelector('.errIdUpdate')
const errNameUpdate = document.querySelector('.errNameUpdate')
const errDrunknessUpdate = document.querySelector('.errDrunknessUpdate')

const closeA = document.querySelector('.close')

const checkboxSelected = document.querySelectorAll('.checkboxSelected')
const btnDeleteSeclect = document.querySelector('.btnDeleteSeclect')


// Validate input elements not null
function validateInput(inputElement, errorElement, errorMessage, e) {
    if (!inputElement.value.trim()) {
        e.preventDefault();
        errorElement.innerHTML = errorMessage;
    }
    errorElement.innerHTML = '';
}


// Handle inpur when input
function inputHandle(inputElement, errorElement) {
    inputElement.oninput = () => {
        if (inputElement.value.trim()) {
            errorElement.innerHTML = ''
        }
    }
}


// handle input not null
inputHandle(input, err)
inputHandle(inputID, errID)
inputHandle(drinkName, errName)
inputHandle(drunkness, errDrunkness)


searchBtn.onclick = (e) => {
    validateInput(input, err, 'Please input your search', e)
}


// Check validate after register
addBtn.onclick = (e) => {
    validateInput(inputID, errID, 'Please input your ID', e);
    validateInput(drinkName, errName, 'Please input your name', e);
    validateInput(drunkness, errDrunkness, 'Please input your Drunkness', e);
}


showAddDrink.onclick = (e) => {
    console.log(showAddDrink, 'showDrink');
    // addBtn.setAttribute("hidden", false);
    console.log(formAdd.hasAttribute("hidden"))
    formAdd.removeAttribute("hidden");
    showAddDrink.setAttribute("hidden", true);
};


backBtn.onclick = (e) => {
    console.log(showAddDrink, 'showDrink');
    formAdd.setAttribute("hidden", true);
    showAddDrink.removeAttribute("hidden");
}


function sendDataToPopUp(id, name, drunkness) {
    console.log(id, name, drunkness);
    console.log(window.location.href);

    drinkIDUpdate.value = id;
    nameUpdate.value = name;
    drunknessUpdate.value = drunkness;
    console.log(document.getElementById('popup1'));
    document.getElementById('popup1').style.visibility = 'visible'
    // window.location.href = window.location.href + "#popup1";
}


updateBtn.onclick = (e) => {
    let confirmUpdate = confirm("Confirm update?")
    console.log(confirmUpdate)
    if (confirmUpdate == false) {
        e.preventDefault()
        console.log("aaaaa");
        document.getElementById('popup1').style.visibility = 'hidden'
    }
}

// close buton when Update
closeA.onclick = (e) => {
    e.preventDefault();
    document.getElementById('popup1').style.visibility = 'hidden'
}


// Delete button
btnDelete.onclick = (e) => {
    let confirmDelete = confirm("Confirm Delete?")
    if (confirmDelete == false) {
        e.preventDefault()
        console.log("aaaaa");
    }
}


function myfunction() {
    console.log("checkbox");
    console.log("length", checkboxSelected.length);
    ArraySelected = new Array();
    let count = 0;
    console.log(count, 'count')

    for (let index = 0; index < checkboxSelected.length; index++) {
        const element = checkboxSelected[index];
        let lengthOfSelected = checkboxSelected.length - 1;
        console.log(element.check)

        if (element.checked == true) {
            ArraySelected.push(element.value)
            count++;

            // Hidden button
            hiddenBtnDelectSelect(false);

            btnDeleteSeclect.onclick = () => {
                console.log("delete selected", ArraySelected);
                console.log('/DeleteSelect/?list=' + ArraySelected.join(','))
                let confirmDelete = confirm("Confirm Delete?")
                if (confirmDelete == false) {
                    e.preventDefault()
                    console.log("aaaaa");
                }
                const hrefUrl = window.location.href + '/DeleteSelect/?list=' + ArraySelected.join(',');
                location.href = hrefUrl;
            };
        }

        if (index === (checkboxSelected.length - 1) && count === 0) {
            hiddenBtnDelectSelect(true);
        }
    }
}

function hiddenBtnDelectSelect(isHidden) {
    btnDeleteSeclect.hidden = isHidden;

    for (let index = 0; index < btnEdit.length; index++) {
        btnEdit[index].hidden = !isHidden;
        btnDeleteAll[index].hidden = !isHidden;
    }
}

