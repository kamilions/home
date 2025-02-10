var form = document.querySelector('form');

function averageInputValues(fieldset) {
  var totalValue = 0;
  var totalNumber = 0;
  var inputs = fieldset.querySelectorAll('input');
  for (var input of inputs) {
    if (!input.validity.valid) {
      return;
    }
    totalValue += Number(input.value);
    totalNumber += Boolean(input.value);
  }
  return totalValue / totalNumber;
}

function setOutputValues() {
  var max = form.querySelector('input').max;
  var totalWeightedAverage = 0;
  var totalWeight = 0;
  var fieldsets = form.querySelectorAll('fieldset');
  for (var fieldset of fieldsets) {
    var average = averageInputValues(fieldset);
    var fieldsetOutput = fieldset.querySelector('output');
    if (average == undefined) {
      fieldsetOutput.value = 'You may only enter 0 to ' + max + '.';
    } else if (isNaN(average)) {
      fieldsetOutput.value = 'Please enter a grade.';
    } else {
      fieldsetOutput.value = 'avg: ' + average.toFixed(1);
    }
    var weight = fieldset.dataset.weight;
    if (!weight) {
      weight = 1;
    }
    totalWeightedAverage += average * weight;
    totalWeight += Number(weight);
  }
  var classActivity = totalWeightedAverage / totalWeight;
  var divOutput = form.querySelector('div output');
  if (isNaN(classActivity)) {
    divOutput.value = '';
  } else if (max == 5) { // Adults: New
    divOutput.value = 'CA: ' + (classActivity * 100 / max).toFixed(1); // The class activity grade must be calculated out of 100.
  } else {
    divOutput.value = 'CA: ' + classActivity.toFixed(1);
  }
}

form.querySelector('[type="button"]').addEventListener('click', setOutputValues);

function detectChange() {
  var inputs = form.querySelectorAll('input');
  for (var input of inputs) {
    if (input.value) {
      return true;
    }
  }
}

form.addEventListener('reset', function(event) {
  if (detectChange() && !confirm('Your changes will be lost.\nAre you sure you want to reset?')) {
    event.preventDefault();
  }
});

window.addEventListener('beforeunload', function(event) {
  if (detectChange()) {
    event.returnValue = 'Your changes may be lost.';
  }
});
