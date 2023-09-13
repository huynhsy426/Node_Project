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

const formUpdate = document.querySelector('.formUpdate')
const drinkIDUpdate = document.querySelector('.drinkIdUpdate')
const nameUpdate = document.querySelector('.nameUpdate')
const drunknessUpdate = document.querySelector('.drunknessUpdate')
const updateBtn = document.querySelector('.updateBtn')
const errIdUpdate = document.querySelector('.errIdUpdate')
const errNameUpdate = document.querySelector('.errNameUpdate')
const errDrunknessUpdate = document.querySelector('.errDrunknessUpdate')

// Validate input elements not null
function validateInput(inputElement, errorElement, errorMessage, e) {
    if (!inputElement.value.trim()) {
        e.preventDefault();
        errorElement.innerHTML = errorMessage;
    }
    else {
        errorElement.innerHTML = '';
    }
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


for (let i = 0; i < btnEdit.length; i++) {

    btnEdit[i].onclick = (e) => {
        e.preventDefault();
        console.log("i", i);
    };

}


updateBtn.onclick = (e) => {
    // e.preventDefault();

    console.log("i", 1);
}
