const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

function selectItem(ev) {
  removeBorder();
  removeShow();
  // Add border to current tab
  this.classList.add("tab-border");
  //   Grab content item form DOM by using template literals and 'this' to grab and insert id
  let tabContentItem = document.querySelector(`#${this.id}-content`);
  //   add show class
  tabContentItem.classList.add("show");
}

function removeBorder() {
  // Remove border from each tab
  tabItems.forEach(item => item.classList.remove("tab-border"));
}

function removeShow() {
  // remove show class from each tab
  tabContentItems.forEach(item => item.classList.remove("show"));
}

// Call SelectItem function for Each tab on click
tabItems.forEach(item => item.addEventListener("click", selectItem));
