if (window.innerWidth < 1000) {
    document.head.querySelectorAll("link")[0].setAttribute("href", "mobile-css.css");
    document.querySelector("background-img").setAttribute("href", "interactive-card-details-form-main\images\bg-main-mobile.png")
}

// selecting the inputs of the form
const name_listener = document.querySelector("#name-input");
const no_listener = document.querySelector("#card-no-input");
const month_listener = document.querySelector("#month");
const year_listener = document.querySelector("#year");
const cvv_listener = document.querySelector("#cvv-input");
const submit_btn = document.querySelector("#submit-btn");

// selecting the info on the card
const name_card = document.querySelector(".name-on-card");
const no_card = document.querySelector(".no-on-card");
const month_card = document.querySelector(".month-on-card");
const yr_card = document.querySelector(".yr-on-card");
const cvv_card = document.querySelector(".cvv-on-card");

// selecting verifiers
const no_verifier = document.querySelector(".card-no-verifier");
const cvc_verifier = document.querySelector(".cvc-verifier");
const month_verifier = document.querySelector(".month-verifier");
const year_verifier = document.querySelector(".year-verifier");

// adding the event-listeners
name_listener.addEventListener("input", () => {
    name_card.innerHTML = name_listener.value;
})
no_listener.addEventListener("input", () => {
    no_card.innerHTML = no_listener.value;
})
month_listener.addEventListener("input", () => {
    month_card.innerHTML = month_listener.value;
})
year_listener.addEventListener("input", () => {
    yr_card.innerHTML = year_listener.value;
})

// card no spacing
setInterval(() => {
    if (no_listener.value.length == 0) {
        no_card.innerHTML = "1234 5678 9100 0000";
    }
    else {
        var n1 = no_listener.value.slice(0, 4);
        var n2 = no_listener.value.slice(4, 8);
        var n3 = no_listener.value.slice(8, 12);
        var n4 = no_listener.value.slice(12, 16);
        no_card.innerHTML = n1 + " " + n2 + " " + n3 + " " + n4;
    }
}, 100)

// check no or character
function checkNo(n, verifier_name) {
    var ascii = n.charCodeAt(0);
    if (ascii < 48 || ascii > 57) {
        verifier_name.innerHTML = "above field must contain only numbers";
    }
    else if (ascii > 48 || ascii < 57) {
        verifier_name.innerHTML = "";
    }
}

setInterval(() => {
    // for card no
    for (let i = 0; i < 15; i++) {
        checkNo(no_listener.value[i], no_verifier);
        if (no_verifier.innerHTML.length != 0) {
            break;
        }
    }
    // for year
    for (let i = 0; i < 3; i++) {
        checkNo(year_listener.value[i], year_verifier);
        if (year_verifier.innerHTML.length != 0) {
            break;
        }
    }
    // for month 
    for (let i = 0; i < 1; i++) {
        checkNo(month_listener.value[i], month_verifier);
        if (month_verifier.innerHTML.length != 0) {
            break;
        }
    }
}, 100)