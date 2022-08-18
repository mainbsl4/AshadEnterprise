// const mainBtn = document.querySelectorAll(".productContainer .forSlice .mainBtn");
// const products = document.querySelectorAll(".productContainer .forSlice .productBody");

// mainBtn.forEach(mainBtn => {
//     mainBtn.addEventListener("click", () => {
//         products.forEach(products => {
//             products.classList.toggle("visible");
//         });
//     });
// });

// function btnToggler (mainBtn, visible, hidden1, hidden2, hidden3, hidden4, hidden5, hidden6){
//     mainBtn.addEventListener("click", () => {
//         visible.classList.toggle("visible");
//         hidden1.classList.remove("visible");
//         hidden2.classList.remove("visible");
//         hidden3.classList.remove("visible");
//         hidden4.classList.remove("visible");
//         hidden5.classList.remove("visible");
//         hidden6.classList.remove("visible");
//     });
// };

// btnToggler(mainBtn[0], products[0], products[1], products[2], products[3], products[4], products[5]);
// btnToggler(mainBtn[1], products[1], products[0], products[2], products[3], products[4], products[5]);
// btnToggler(mainBtn[2], products[2], products[1], products[0], products[3], products[4], products[5]);
// btnToggler(mainBtn[3], products[3], products[1], products[2], products[0], products[4], products[5]);
// btnToggler(mainBtn[4], products[4], products[1], products[2], products[3], products[0], products[5]);
// btnToggler(mainBtn[5], products[5], products[1], products[2], products[3], products[4], products[0]);



const productCategories = document.querySelectorAll("#productCategories");


const coil = document.querySelectorAll(".coil");
const spray = document.querySelectorAll(".spray");
const sanitizer = document.querySelectorAll(".sanitizer");
const handWash = document.querySelectorAll(".handWash");
const toiletCleaner = document.querySelectorAll(".toiletCleaner");
const soap = document.querySelectorAll(".soap");

function products (btn, visible, hidden1, hidden2, hidden3, hidden4, hidden5){
    btn.addEventListener("click", ()=>{
        visible.forEach(visible => {
            visible.style.display = "block"
        });
        hidden1.forEach(hidden1 => {
            hidden1.style.display = "none";
        });
        hidden2.forEach(hidden2 => {
            hidden2.style.display = "none";
        });
        hidden3.forEach(hidden3 => {
            hidden3.style.display = "none";
        });
        hidden4.forEach(hidden4 => {
            hidden4.style.display = "none";
        });
        hidden5.forEach(hidden5 => {
            hidden5.style.display = "none";
        });
    });
};


products(productCategories[0], coil, spray, sanitizer, handWash, toiletCleaner, soap);
products(productCategories[1], spray, coil, sanitizer, handWash, toiletCleaner, soap);
products(productCategories[2], sanitizer, spray, coil, handWash, toiletCleaner, soap);
products(productCategories[3], handWash, spray, sanitizer, coil, toiletCleaner, soap);
products(productCategories[4], toiletCleaner, spray, sanitizer, handWash, coil, soap);
products(productCategories[5], soap, spray, sanitizer, handWash, toiletCleaner, coil);
