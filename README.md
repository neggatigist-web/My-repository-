# Simple Color Changer

## 📋 Project Overview

**Simple Color Changer** is an interactive web application that allows users to dynamically change colors in real-time. This project is built with HTML, CSS, and JavaScript, making it perfect for beginners learning web development.

---

## ✨ Features

- 🎨 **Random Color Generator** - Click a button to generate random colors
- 🎯 **Custom Color Input** - Enter any valid color code or color name
- 📊 **Color Display** - Visual representation of the selected color
- 🔤 **Color Code Display** - Shows the HEX code of the current color
- 🎪 **Responsive Design** - Works on all device sizes
- ⚡ **Smooth Animations** - Elegant transitions and hover effects
- 🌈 **Beautiful UI** - Modern gradient background and clean interface

---

## 📁 Project Structure

```
My-repository/
├── index.html      # Main HTML file
├── style.css       # Styling and layout
├── script.js       # JavaScript functionality
└── README.md       # Project documentation
```

---

## 🚀 How to Use

### Online (Recommended)
1. Visit your repository: [Simple Color Changer Repository](https://github.com/neggatigist-web/My-repository-)
2. Click on `index.html`
3. Click the "Raw" button
4. Copy the URL and paste it into your browser

### Local Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/neggatigist-web/My-repository-.git
   ```
2. Navigate to the project folder:
   ```bash
   cd My-repository-
   ```
3. Open `index.html` in your web browser

---

## 🎮 Usage Guide

### Change Color Randomly
- Click the **"Change Color"** button to generate a random color
- Click the **"Random Color"** button for the same functionality

### Enter Custom Color
1. Type a color code in the text field (e.g., `#FF5733`, `red`, `rgb(255, 87, 51)`)
2. Click the **"Apply"** button or press **Enter**
3. The color display box will change to your chosen color

### Supported Color Formats
- **HEX codes**: `#FF5733`, `#000000`
- **RGB**: `rgb(255, 87, 51)`
- **Color names**: `red`, `blue`, `green`, `purple`, etc.

---

## 💻 Code Explanation

### HTML (`index.html`)
- Semantic HTML5 structure
- Container div for layout
- Color display box
- Input field for custom colors
- Buttons for user interaction

### CSS (`style.css`)
- Beautiful gradient background
- Centered card layout with shadow
- Responsive design using flexbox
- Hover animations on buttons
- Smooth color transitions
- Modern color palette (purple and blue)

### JavaScript (`script.js`)
- `generateRandomColor()` - Creates random HEX colors
- `applyColor()` - Applies color to display and updates code
- `rgbToHex()` - Converts RGB values to HEX format
- Event listeners for buttons and input field
- Enter key support for apply button

---

## 🎨 Color Scheme

The application uses a beautiful gradient background:
- **Primary Color**: `#667eea` (Periwinkle Blue)
- **Secondary Color**: `#764ba2` (Purple)
- **Background Gradient**: `135deg` from blue to purple

---

## 📱 Responsive Design

The project is fully responsive and works on:
- 📱 Mobile phones
- 💻 Tablets
- 🖥️ Desktop computers
- 📺 Large screens

---

## 🛠️ Technologies Used

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Structure and markup |
| **CSS3** | Styling and animations |
| **JavaScript (ES6)** | Interactivity and functionality |

---

## 📚 Learning Resources

### For Beginners:
- [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### Color Theory:
- [HEX Color Picker](https://htmlcolorcodes.com/)
- [RGB Color Converter](https://www.rapidtables.com/convert/color/rgb-to-hex.html)

---

## 🎯 Future Enhancements

- [ ] Add color history feature
- [ ] Copy color code to clipboard
- [ ] Add color palette suggestions
- [ ] Dark mode toggle
- [ ] Color harmonies (complementary, analogous, etc.)
- [ ] Export color schemes

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Colors not changing | Check browser console for errors |
| Invalid color error | Ensure color code is valid (e.g., #RRGGBB) |
| Buttons not working | Clear browser cache and reload |
| Styling looks broken | Make sure all files are in the same folder |

---

## 📝 Tips for Developers

1. **Customize Colors**: Edit the color values in `style.css` to match your preference
2. **Add Features**: Try adding features like a color mixer or palette generator
3. **Deploy**: Use GitHub Pages to host your project for free
4. **Improve UI**: Add images or icons to enhance the interface

---

## 🤝 Contributing

Feel free to fork this project and make improvements:
1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

---

## 📄 License

This project is open source and available for educational purposes.

---

## 👤 Author

[Tigist Negga]
**Username**: neggatigist-web  
**Repository**: [My-repository-](https://github.com/neggatigist-web/My-repository-)  
**Created**: May 22, 2026

---

## ❓ FAQ

**Q: Can I use this project commercially?**  
A: Yes, it's open source and free to use.

**Q: How do I deploy this online?**  
A: Use GitHub Pages, Netlify, or Vercel for free hosting.

**Q: Can I modify the code?**  
A: Absolutely! Feel free to customize it according to your needs.

**Q: What browsers are supported?**  
A: All modern browsers (Chrome, Firefox, Safari, Edge)

---

## 📞 Support

For issues or questions, please open an issue on the [GitHub repository](https://github.com/neggatigist-web/My-repository-).

---

**Happy Coding! 🚀**
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Color Changer</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Simple Color Changer</h1>
        <div class="color-display" id="colorDisplay"></div>
        <p id="colorCode">#FFFFFF</p>

        <button id="changeColorBtn" class="btn">Change Color</button>
        <button id="randomColorBtn" class="btn btn-secondary">Random Color</button>

        <div class="color-input-section">
            <label for="colorInput">Enter Color Code:</label>
            <input type="text" id="colorInput" placeholder="e.g., #FF5733 or red">
            <button id="applyColorBtn" class="btn">Apply</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>

   "script"
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


