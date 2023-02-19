// function 1:
function getIntutValue(id) {
    const valueStr = document.getElementById(id).value;
    const value = parseFloat(valueStr);
return value;
}

// function 2:
function displayResult(id, title, result) {
    const parentElement = document.getElementById(id);
    const createdElement = document.createElement('li');
    createdElement.classList.add('mb-6');
    createdElement.innerHTML = `
    <div class="flex justify-between">
        <p>${title}</p>
        <p>${result}cm<sup>2</sup></p>
        <button class="bg-blue-600 px-2 py-1 text-white rounded-md hover:bg-blue-400">Covert to m<sup>2</sup>
        </button>
    </div>
    `
    parentElement.appendChild(createdElement);
}


document.getElementById('triangle-calculate-btn').addEventListener('click', function () {
    const cardTitle = document.getElementById('triangle-title').innerText;
    const base = getIntutValue('triangle-b');
    const height = getIntutValue('triangle-h');
    //validation
    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        return alert('Please provide valid number.')
    }
    // formula Area (A) = 0.5 × b × h
    const result = parseFloat((0.5 * base * height).toFixed(2));
    displayResult('ordered-list', cardTitle, result)
})


document.getElementById('rectangle-calculate-btn').addEventListener('click', function () {
    const cardTitle = document.getElementById('rectangle-title').innerText;
    const width = getIntutValue('rectangle-w');
    const length = getIntutValue('rectangle-l');
    //validation
    if (isNaN(width) || isNaN(length) || width <= 0 || length <= 0) {
        return alert('Please provide valid number.')
    }
    // formula Area (A) = w × l
    const result = parseFloat((width * length).toFixed(2));
    displayResult('ordered-list', cardTitle, result)
})


document.getElementById('perallelogram-calculate-btn').addEventListener('click', function () {
    const cardTitle = document.getElementById('perallelogram-title').innerText;
    const base = getIntutValue('perallelogram-b');
    const height = getIntutValue('perallelogram-h');
    //validation
    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        return alert('Please provide valid number.')
    }
    // formula Area (A) = b × h
    const result = parseFloat((base * height).toFixed(2));
    displayResult('ordered-list', cardTitle, result)
})

document.getElementById('rhombus-calculate-btn').addEventListener('click', function () {
    const cardTitle = document.getElementById('rhombus-title').innerText;
    const diagonal1 = getIntutValue('rhombus-d1');
    const diagonal2 = getIntutValue('rhombus-d2');
    //validation
    if (isNaN(diagonal1) || isNaN(diagonal2) || diagonal1 <= 0 || diagonal2 <= 0) {
        return alert('Please provide valid number.')
    }
    // formula Area (A) = 0.5 × d1 × d2
    const result = parseFloat((0.5 * diagonal1 * diagonal2).toFixed(2));
    displayResult('ordered-list', cardTitle, result)
})


document.getElementById('pentagon-calculate-btn').addEventListener('click', function () {
    const cardTitle = document.getElementById('pentagon-title').innerText;
    const p = getIntutValue('pentagon-p');
    const b = getIntutValue('pentagon-b');
    //validation
    if (isNaN(p) || isNaN(b) || p <= 0 || b <= 0) {
        return alert('Please provide valid number.')
    }
    // formula Area (A) = 0.5 × p × b
    const result = parseFloat((0.5 * p * b).toFixed(2));
    displayResult('ordered-list', cardTitle, result)
})


document.getElementById('ellipse-calculate-btn').addEventListener('click', function () {
    const cardTitle = document.getElementById('ellipse-title').innerText;
    const a = getIntutValue('ellipse-a');
    const b = getIntutValue('ellipse-b');
    //validation
    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
        return alert('Please provide valid number.')
    }
    // formula Area (A) = πab
    const result = parseFloat((Math.PI * a * b).toFixed(2));
    displayResult('ordered-list', cardTitle, result)
})



// for (let i = 1; i <= 6; i++) {
//     document.getElementById('card-id-' + i).addEventListener('mouseenter', function () {
//       const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//       this.style.background = "#" + randomColor;
//     });
//   }
  
for (let i = 1; i <= 6; i++) {
    document.getElementById('card-id-' + i).addEventListener('mouseenter', function () {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      this.style.background = "#" + randomColor;
    });
    document.getElementById('card-id-' + i).addEventListener('mouseleave', function () {
      this.style.background = "white";
    });
  }
  