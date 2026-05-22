// Get elements
const colorDisplay = document.getElementById('colorDisplay');
const colorCode = document.getElementById('colorCode');
const changeColorBtn = document.getElementById('changeColorBtn');
const randomColorBtn = document.getElementById('randomColorBtn');
const colorInput = document.getElementById('colorInput');
const applyColorBtn = document.getElementById('applyColorBtn');

// Function to generate random color
function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to apply color to display
function applyColor(color) {
    try {
        colorDisplay.style.backgroundColor = color;
        // Get the computed color in hex format
        const rgbColor = window.getComputedStyle(colorDisplay).backgroundColor;
        const hexColor = rgbToHex(rgbColor);
        colorCode.textContent = hexColor;
    } catch (error) {
        alert('Invalid color! Please enter a valid color code or name.');
    }
}

// Function to convert RGB to HEX
function rgbToHex(rgb) {
    const result = rgb.match(/\d+/g);
    if (!result || result.length < 3) return '#FFFFFF';
    
    const r = parseInt(result[0]);
    const g = parseInt(result[1]);
    const b = parseInt(result[2]);
    
    return '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('').toUpperCase();
}

// Event listeners
changeColorBtn.addEventListener('click', () => {
    const randomColor = generateRandomColor();
    applyColor(randomColor);
});

randomColorBtn.addEventListener('click', () => {
    const randomColor = generateRandomColor();
    applyColor(randomColor);
});

applyColorBtn.addEventListener('click', () => {
    const color = colorInput.value.trim();
    if (color) {
        applyColor(color);
        colorInput.value = '';
    } else {
        alert('Please enter a color!');
    }
});

// Allow Enter key to apply color
colorInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        applyColorBtn.click();
    }
});

// Initialize with white color
applyColor('#FFFFFF');
