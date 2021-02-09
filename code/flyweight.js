// 享元模式 -- 全局常量、共享变量等
const hexColor = {
    white: '#FFFFFF',
    red: '#FF0000',
    orange: '#FFA500',
    yellow: '#FFFF00',
    green: '#00FF00',
    cyan: '#00FFFF',
    blue: '#0000FF',
    purple: '#A020F0',
    black: '#000000'
};

function render(text, label, color) {
    const richText = `<${label} style='color: ${hexColor[color]};'>${text}</${label}>`
    return richText;
}

const str = render('这是一段文字', 'p', 'green');
console.log(str);