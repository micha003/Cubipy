function getInputFields() {
  const allInputFields = document.getElementsByTagName("input");
  let eIF1 = [],
    fIF1 = [];

  let eIF2 = [],
    fIF2 = [];

  for (let i = 0; i < allInputFields.length; i++) {
    if (allInputFields[i].value === "" && i <= 2) {
      eIF1.push(allInputFields[i]);
    } else if (i <= 2) {
      fIF1.push(allInputFields[i]);
    } else if (allInputFields[i].value === "" && i > 2) {
      eIF2.push(allInputFields[i]);
    } else {
      fIF2.push(allInputFields[i]);
    }
  }

  return { eIF1, fIF1, eIF2, fIF2 };
}

function calculate() {
  const { eIF1, fIF1, eIF2, fIF2 } = getInputFields();

  if (eIF1.length > fIF1.length) {
    alert("Bitte füllen Sie mind. zwei der folgenden Felder aus: a, b, c");
  } else {
  }

  if (eIF2.length > fIF2.length) {
    alert("Bitte füllen Sie mind. eins der folgenden Felder aus: V, OA, d");
  } else {
  }
}
