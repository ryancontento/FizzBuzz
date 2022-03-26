// Get values from interface
function getValues() {
  let fizzValue = document.getElementById("fizzValue").value;
  let buzzValue = document.getElementById("buzzValue").value;

  fizzValue = parseInt(fizzValue);
  buzzValue = parseInt(buzzValue);

  if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
    let fbArray = fizzBuzz(fizzValue, buzzValue);
    displayData(fbArray);
  } else {
    alert("you must enter integers");
  }
}

function fizzBuzz(fizzValue, buzzValue) {
  let returnArray = [];
  for (let i = 1; i <= 100; i++) {
    if (i % fizzValue == 0 && i % buzzValue == 0) {
      returnArray.push("FizzBuzz");
    } else if (i % fizzValue == 0) {
      returnArray.push("Fizz");
    } else if (i % buzzValue == 0) {
      returnArray.push("Buzz");
    } else {
      returnArray.push(i);
    }
  }
  return returnArray;
}

function displayData(fbArray) {
  //get the table body element from the page
  let tableBody = document.getElementById("results");

  //get the row from the template
  let templateRow = document.getElementById("fbTemplate");

  //clear table first
  tableBody.innerHTML = "";

  for (let i = 0; i < fbArray.length; i += 5) {
    const tableRow = document.importNode(templateRow.content, true);
    //grab only the columns in the template
    rowCols = tableRow.querySelectorAll("td");

    rowCols[0].classList.add(fbArray[i]);
    rowCols[0].textContent = fbArray[i];

    rowCols[1].classList.add(fbArray[i + 1]);
    rowCols[1].textContent = fbArray[i + 1];

    rowCols[2].classList.add(fbArray[i + 2]);
    rowCols[2].textContent = fbArray[i + 2];

    rowCols[3].classList.add(fbArray[i + 3]);
    rowCols[3].textContent = fbArray[i + 3];

    rowCols[4].classList.add(fbArray[i + 4]);
    rowCols[4].textContent = fbArray[i + 4];

    tableBody.appendChild(tableRow);
  }
}
