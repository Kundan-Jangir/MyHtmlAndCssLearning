var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('calc');
 
function changeCalcTopic() {
    var newTopic = "";
    var topicOption = document.getElementById('select').value;
    if (topicOption == 1) {
        newTopic = "What is Y% of X?";
    }
    else if (topicOption == 2) {
        newTopic = "X is Y% of what?";
    }
    else if (topicOption == 3) {
        newTopic = "What % of X is Y?";
    }
    else if (topicOption == 4) {
        newTopic = "X% of what is Y?";
    }
    else if (topicOption == 5) {
        newTopic = "Y% of X is what?";
    }
    calcTopic.innerText = newTopic;
}
 
 
form.addEventListener('submit', function(event) {
    var topicOption = document.getElementById('select').value;
    if (!numField1.value || !numField2.value) {
        alert("Please enter values in the fields");
    } else {
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
 
        if (topicOption == 1 || topicOption == 5) {
            var result = x * y / 100;
            resultField.innerText = "Answer: " + result;
        }
        else if (topicOption == 2) {
            var result = x * 100 / y;
            resultField.innerText = "Answer: " + result;
        }
        else if (topicOption == 3) {
            var result = y * 100 / x;
            resultField.innerText = "Answer: " + result + "%";
        }
        else if (topicOption == 4) {
            var result = y * 100 / x;
            resultField.innerText = "Answer: " + result;
        }
        event.preventDefault();
    }
});