const productname = document.querySelector("#productname");
const description = document.querySelector("#description");
const state = document.querySelector("#state");
const cat = document.querySelector("#cat");
const subcategory = document.querySelector(".subcategory");
const why = document.querySelector(".why");
const qty = document.querySelector("#qty");
const amount = document.querySelector("#amount");
const button = document.querySelector(".button");
const table = document.querySelector(".table");

var sArray = [];

if (localStorage.getItem("states")) {
  sArray = JSON.parse(localStorage.getItem("states"));
}

getDataFromLocalStorage();

button.addEventListener("click", () => {
  if (state.value !== "state?") {
    addToArray();
    why.value = "";
    state.value = "state?";
    cat.value = "cat?";
  }
});

function addToArray() {
  addToTable();
  addDataToLocalStorage();
}
function addDataToLocalStorage() {
  window.localStorage.setItem("states", JSON.stringify(sArray));
}

function addToTable() {
  let dataObject = {
    productname: productname.value,
    description: description.value,
    state: state.value,
    cat: cat.value,
    subcategory: subcategory.value,
    qty: qty.value,
    amount: amount.value,
    reason: why.value,
  };
  
  sArray.push(dataObject);

  const tr = document.createElement("tr");
  const tdproductname = document.createElement("td");
  const tddescription = document.createElement("td");
  const tdstate = document.createElement("td");
  const tdcat = document.createElement("td");
  const tdsubcategory = document.createElement("td");
  const tdWhy = document.createElement("td");
  const tdqty = document.createElement("td");
  const tdamount = document.createElement("td");
  tr.appendChild(tdproductname);
  tr.appendChild(tddescription);
  tr.appendChild(tdstate);
  tr.appendChild(tdcat);
  tr.appendChild(tdsubcategory);
  tr.appendChild(tdWhy);
  tr.appendChild(tdqty);
  tr.appendChild(tdamount);
  table.appendChild(tr);
  tdproductname.innerText = dataObject.productname;
  tddescription.innerText = dataObject.description;
  tdstate.innerText = dataObject.state;
  tdcat.innerText = dataObject.cat;
  tdsubcategory.innerText = dataObject.subcategory;
  tdqty.innerText = dataObject.qty;
  tdamount.innerText = dataObject.amount;
  tdWhy.innerText = dataObject.reason;
}

function getDataFromLocalStorage() {
  let data = window.localStorage.getItem("states");
  if (data) {
    let states = JSON.parse(data);
    addToTable(states);
  }
}