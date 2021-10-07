let statuses = ["ERROR", "SUCCESS"];

function getLastItem() {
  return statuses[statuses.length - 1];
}

function addItem(item) {
  statuses.push(item);
}


