// add button "Turn off" and styles
// change button name to "Turn on" when clicked
// add message under button 'Last turn on: `{DD-MM-YYYY HH:MM:SS}`'
// change button name to "Turn off" when clicked again
// add message under button 'Last turn off: `{DD-MM-YYYY HH:MM:SS}`'
// change background color to dark-grey when clicked
// change background color to grey when clicked again
// button state should be saved in localStorage and stay after page reload

const heading = document.getElementsByTagName('h1')[0];
const sign = document.getElementById('sign');
const student = document.getElementsByClassName('student');

const frame = document.querySelector('.frame');

const button = document.querySelector('.custom-btn');
const message = document.createElement('p');

frame.insertBefore(message, sign);

const buttonStates = {
    on: 'Turn on',
    off: 'Turn off',
}

const stylesColors = {
    textWhite: '#fff',
    textBlack: '#141514',
    backGroundWhite: '#e0e5ec',
    backGroundBlack: '#1b1b1b',
}

function changeStyles(textColor, backgroundColor) {
    message.style.color = textColor;
    heading.style.color = textColor;
    sign.style.color = textColor;
    document.body.style.backgroundColor = backgroundColor;
}

document.addEventListener('DOMContentLoaded', () => { 
    const savedState = localStorage.getItem('buttonState');
    const savedDate = localStorage.getItem('date');

    if (savedState === null) {
        button.textContent = buttonStates.off;
        document.body.style.backgroundColor = stylesColors.backGroundWhite;
    } else {
        if (savedState === buttonStates.on && savedDate !== null) {
            changeStyles(stylesColors.textWhite, stylesColors.backGroundBlack);
            button.textContent = buttonStates.on;
            message.textContent = savedDate;
        } else {
            changeStyles(stylesColors.textBlack, stylesColors.backGroundWhite);
            button.textContent = buttonStates.off;
            message.textContent = savedDate;
        }
    }
});

button.addEventListener('click', () => {
    if (button.textContent === buttonStates.off) {
        button.textContent = buttonStates.on;
        message.textContent = `Last turn off: ${new Date().toLocaleString()}`;
        changeStyles(stylesColors.textWhite, stylesColors.backGroundBlack);
        localStorage.setItem('buttonState', buttonStates.on);
        localStorage.setItem('date', message.textContent);
        return;
    }
    if (button.textContent === buttonStates.on) {
        button.textContent = buttonStates.off;
        message.textContent = `Last turn on: ${new Date().toLocaleString()}`;
        changeStyles(stylesColors.textBlack, stylesColors.backGroundWhite);
        localStorage.setItem('buttonState', buttonStates.off);
        localStorage.setItem('date', message.textContent);
    }
});
