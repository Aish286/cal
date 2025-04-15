let history = [];

function appendNumber(num, type) {
  document.getElementById(`${type}-display`).value += num;
}

function appendOperator(op, type) {
  document.getElementById(`${type}-display`).value += op;
}

function appendFunction(func, type) {
  document.getElementById(`${type}-display`).value += func;
}

function clearDisplay(type) {
  document.getElementById(`${type}-display`).value = '';
}

function deleteLast(type) {
  let display = document.getElementById(`${type}-display`);
  display.value = display.value.slice(0, -1);
}

function calculate(type) {
  let display = document.getElementById(`${type}-display`);
  try {
    let result = eval(display.value);
    addToHistory(display.value + ' = ' + result);
    display.value = result;
  } catch {
    display.value = 'Error';
  }
}

function addToHistory(entry) {
  history.push(entry);
  let list = document.getElementById('history-list');
  let item = document.createElement('li');
  item.textContent = entry;
  list.appendChild(item);
}

// Slider/Tab Switch
document.querySelectorAll('.filter-buttons li').forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');

    document.querySelectorAll('.filter-buttons li').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    document.querySelectorAll('.content-section').forEach(section => {
      section.style.display = section.id === category ? 'block' : 'none';
    });
  });
});
