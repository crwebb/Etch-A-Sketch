HTML CSS JSResult
const grid = document.querySelector('.grid');
let resetGridValue = document.getElementById('resetBtn').value;


function start(canvas, pen) {
    if (canvas == undefined && pen == undefined) {
        canvas = createGrid();
        pen = drawBlackPen();
    };
};


// Grid Functions
function createGrid(gridSize) {

  
    if (resetGridValue == 'true') {
        console.log('Reset button was pressed');
        grid.textContent ="";
        document.getElementById("resetBtn").value = 'true';
        gridSize = prompt('How many squares for each side ? Tip: try 50 !');

        for (i = 0; i < gridSize * gridSize; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            grid.appendChild(cell);
            grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
            grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        };
    } else {

        gridSize = 16;
        document.getElementById("resetBtn").value = 'false'; 
        
        for (i = 0; i < gridSize * gridSize; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            grid.appendChild(cell);
            grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
            grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
            
        };
    };
};


function displayGrid() {

    let gridLinesValue = document.getElementById('gridBtn').value;

    if (gridLinesValue == 'off') {
        document.getElementById("gridBtn").value = 'on';
        grid.querySelectorAll('div').forEach(div=>
            div.style.borderColor = 'rgb(209, 209, 209)');
            console.log('Display Gridlines is On');   
    } else {
        document.getElementById("gridBtn").value = 'off';
        grid.querySelectorAll('div').forEach(div => 
            div.style.borderColor = 'transparent');
            console.log('Display Gridlines is Off');
    };
};


// Pen functions
function drawBlackPen() {

    const color = `rgb(${0}, ${0}, ${0})`;

    grid.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('cell')) {

            const el = event.target
            el.style.backgroundColor = color;

            let drawShade = Number(el.getAttribute("current-shade") )
            drawShade++
            opacityValue(el, drawShade);
          el.setAttribute("current-shade", drawShade)
        };
    });
};


function drawColorPen() {

    let red;
    let green;
    let blue;

    for (i = 0; i < 1; i++) {
        red = Math.floor(Math.random() * 256);
        green = Math.floor(Math.random() * 256);
        blue = Math.floor(Math.random() * 256);
    };

    const color = `rgb(${red}, ${green}, ${blue})`;

    grid.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('cell')) {

            const el = event.target
            el.style.backgroundColor = color;

            let drawShade = Number(el.getAttribute("current-shade") )
            drawShade++
            opacityValue(el, drawShade);
          el.setAttribute("current-shade", drawShade)
        };
    });
    return color;
};


console.log('Random color pen value is: ', drawColorPen());


function drawRainbowPen() {

    let red;
    let green;
    let blue;
    const color = `rgb(${red}, ${green}, ${blue})`;

    for (i = 0; i < 1; i++) {
        
        red = Math.floor(Math.random() * 256);
        green = Math.floor(Math.random() * 256);
        blue = Math.floor(Math.random() * 256);
    };

    grid.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('cell')) {
            event.target.style.backgroundColor = color;
        };
    });
    return color;
};


function opacityValue(createdDivs, drawShade) {

    for ( i = 0; i < 10; i++) {

        switch (drawShade) {

            case 1:
                createdDivs.classList.add('draw10');
            break;

            case 2:
                createdDivs.classList.add('draw20');
            break;

            case 3:
                createdDivs.classList.add('draw30');
            break;

            case 4:
                createdDivs.classList.add('draw40');
            break;

            case 5:
                createdDivs.classList.add('draw50');
            break;  

            case 6:
                createdDivs.classList.add('draw60');
            break;

            case 7:
                createdDivs.classList.add('draw70');
            break;

            case 8:
                createdDivs.classList.add('draw80');
            break;

            case 9:
                createdDivs.classList.add('draw90');
            break;

            case 10:
                createdDivs.classList.add('draw100');
            break;
        };
    };
};


// Buttons

// Resets grid
const resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', () => {
    resetGridValue = 'true';

    grid.querySelectorAll('div').forEach(div => 
        div.classList.remove('blackPen'));

    createGrid();
});

// Display Gridlines
const gridBtn = document.querySelector('#gridBtn');
gridBtn.addEventListener('click', () => {
    displayGrid();
});

// Black Pen 
const blackPen = document.querySelector('#blackPen');
blackPen.addEventListener('click', () => {
   
    grid.textContent="";
    start(createGrid(), drawBlackPen());
    console.log('Black pen was pressed');
});

// Random Color Pen
const randomColorPen = document.querySelector('#randomColorPen');
randomColorPen.addEventListener('click', () => {
    grid.textContent="";
    start(createGrid(), drawColorPen());
    console.log('Random color pen was pressed');
});

// Rainbow Color Pen
const rainbowSprayPen = document.querySelector('#rainbowSprayPen');
rainbowSprayPen.addEventListener('click', () => {
    grid.textContent="";
    start(createGrid(), drawRainbowPen());
    console.log('Rainbow spray pen was pressed');
});

// Starts default grid with black pen
start();



Resources1×0.5×0.25×Rerun