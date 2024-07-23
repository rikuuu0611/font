function generateImage() {
    const text = document.getElementById('inputText').value;
    const selectedFont = document.getElementById('fontSelect').value;
    const textColor = document.getElementById('textColor').value;
    const bgColor = document.getElementById('bgColor').value;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = 800; // 幅を指定
    canvas.height = 400; // 高さを指定

    // 背景色を設定
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = `30px ${selectedFont}`;
    ctx.fillStyle = textColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    const img = document.getElementById('textImage');
    img.src = canvas.toDataURL('image/png');
    img.style.display = 'block';
}
