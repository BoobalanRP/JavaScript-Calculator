let historybutton = document.getElementById('historybutton');
let history = document.getElementById('history');
let bar1 = document.getElementById('bar1');
let bar2 = document.getElementById('bar2');
let dis=document.getElementById('answer');

function showHistory() {
    let savedValues = JSON.parse(localStorage.getItem("savedValues")) || [];
    let len = savedValues.length;

    history.innerHTML = '';

    bar1.style.display = 'block';
    bar2.style.display = 'block';
    if (len === 0) {
        let historyItem = document.createElement('div');
        historyItem.innerHTML = "There's no history yet.";
        historyItem.className = 'historyelement his';
        historyItem.style.fontSize = '25px';
        history.appendChild(historyItem);
    } else {
        for (let index = len-1; index >=0; index--) {
            const value = savedValues[index];
            let historyItem = document.createElement('div');
            historyItem.className = 'historyelement';
            historyItem.textContent = value;
            history.appendChild(historyItem);
            if (index > 0) history.appendChild(document.createElement('hr'));
        }
    }

    history.style.display = 'block';
}


historybutton.addEventListener('click', showHistory);

function clearAll(){
    dis.value=''
}

function hide(){
    history.style.display = 'none';
    bar1.style.display = 'none';
    bar2.style.display = 'none';
}
function deleteLastEntry() {
    let calcHistory = JSON.parse(localStorage.getItem("calcHistory")) || [];
    if (calcHistory.length > 0) {
      calcHistory.pop(); 
      localStorage.setItem("calcHistory", JSON.stringify(calcHistory));
 
    }
  }

  function checkForBracketMulti() {
    if (eval(screenValue) !== undefined) {
        const result = eval(screenValue);
        lastScreenValue = screenValue;
        screenValue = result;
        if (parseFloat(result) < 0) {
            screen.classList.add("negative");
        } else {
            screen.classList.remove("negative");
        }
        flag = 1;

        // Save the calculation to history
        let calcHistory = JSON.parse(localStorage.getItem("calcHistory")) || [];
        calcHistory.push({ lastScreenValue, result });
        localStorage.setItem("calcHistory", JSON.stringify(calcHistory));
    }
}



bar1.addEventListener('click', hide);
bar2.addEventListener('click', hide);
