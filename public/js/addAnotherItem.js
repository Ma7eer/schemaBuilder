const itemHeader = document.querySelector(".item-header-1");
const itemTypeLabel = document.querySelector(".item-type-label-1");
const itemSelect = document.querySelector(".item-type-select-1");
const itemDefaultValueLabel = document.querySelector(".default-value-label-1");
const itemDefaultValue = document.querySelector(".default-value-1");
const addRowButton = document.querySelector(".add-row");
let newHeader;

let addRow = () => {
  newHeader = document.createElement("h5"); // itemHeader.localName
  newHeader.innerText = itemHeader.innerText;
  //   itemDefaultValue.appendChild(newHeader);
  //   document.body.append(newHeader);
  document.getElementById("item-default-value-1").appendChild(newHeader);
};

addRowButton.addEventListener("click", e => {
  addRow();
});
