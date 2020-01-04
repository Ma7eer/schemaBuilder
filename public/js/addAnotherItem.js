const itemHeader = document.querySelector(".item-header-1");
const itemTypeLabel = document.querySelector(".item-type-label-1");
const itemSelect = document.querySelector(".item-type-select-1");
const itemDefaultValueLabel = document.querySelector(".default-value-label-1");
const itemDefaultValue = document.querySelector(".default-value-1");
const addRowButton = document.querySelector(".add-row");
let newHeader;

let count = 0;

let addRow = () => {
  newHeader = document.createElement(itemHeader.localName);
  newHeader.innerHTML = itemHeader.innerHTML;
  addRowButton.parentNode.insertBefore(newHeader, addRowButton);
};

addRowButton.addEventListener("click", e => {
  addRow();
});
