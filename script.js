'use strict'
// используйте строгий режим
// всегда используйте let const
//  элементы берите массивом
// и назначайте через map

const workButton = document.querySelector('.work');
const breakButton = document.querySelector('.break');
const longBreakButton = document.querySelector('.long__break');
const startButton = document.querySelector('.start');
const timeShow = document.querySelector('.timer');

const taskTextOne = document.querySelector('.what__task-1');
const taskTextTwo = document.querySelector('.what__task-2');
const taskTextThree = document.querySelector('.what__task-3');
const taskTextFour = document.querySelector('.what__task-4');
const taskTextFive = document.querySelector('.what__task-5');
const taskButtonOne = document.querySelector('.confirm-1');
const taskButtonTwo = document.querySelector('.confirm-2');
const taskButtonThree = document.querySelector('.confirm-3');
const taskButtonFour = document.querySelector('.confirm-4');
const taskButtonFive = document.querySelector('.confirm-5');
const taskFieldOne = document.querySelector('.task-first');
const taskFieldTwo = document.querySelector('.task-second');
const taskFieldThree = document.querySelector('.task-third');
const taskFieldFour = document.querySelector('.task-fourth');
const taskFieldFive = document.querySelector('.task-fifth');
// вот это может быть массив через querySelectorAll
const stopButton = document.querySelector('.stop')


function setContent(el) {
    el.onclick = () => {
        let task = taskTextOne.value;
        el.innerHTML = task;
    }
}

function setLineThrought(el) {
    el.style.textDecoration = 'line-through';
}


setEvent(taskButtonOne);
setLineThrought(taskFieldOne)

setContent(taskButtonTwo);
setLineThrought(taskFieldTwo);

setContent(taskButtonThree);
setLineThrought(taskFieldThree);

setContent(taskButtonFour);
setLineThrought(taskFieldFour);

setContent(taskButtonFive);
setLineThrought(taskFieldFive);


// Установка таймера

const timeWork = 25 * 60
const timeBreak = 5 * 60
const timeLongBreak = 15 * 60

function soundPlay() {
    const audio = new Audio('notification.mp3');
    audio.play();
};

// Таймер работы

workButton.onclick = () => {
    let workTimer = setInterval(function() {
        let seconds = timeWork % 60 // секунды
        let minutes = timeWork / 60 % 60 // минуты
        if (timeWork <= 0) {
            clearInterval(workTimer);
            soundPlay();
        } else {
            let strTimer = `${Math.trunc(minutes)}:${seconds}`;
            timeShow.innerHTML = strTimer;
        }
        --timeWork; //уменьшаем таймер

        stopButton.onclick = () => {
            clearInterval(workTimer);
        }

    }, 1000)
}



// Таймер короткого перерыва 

breakButton.onclick = () => {
    let breakTimer = setInterval(function() {
        let seconds = timeBreak % 60
        let minutes = timeBreak / 60 % 60
        if (timeBreak <= 0) {
            clearInterval(breakTimer);
            soundPlay();
        } else {
            let strTimer = `${Math.trunc(minutes)}:${seconds}`;
            timeShow.innerHTML = strTimer;
        }
        --timeBreak;

        stopButton.onclick = () => {
            clearInterval(breakTimer);
        }

    }, )
}

// Таймер длинного перерыва

longBreakButton.onclick = () => {
    longBreakTimer = setInterval(function() {
        let seconds = timeLongBreak % 60
        let minutes = timeLongBreak / 60 % 60
        if (timeLongBreak <= 0) {
            clearInterval(longBreakTimer);
            soundPlay();
        } else {
            let strTimer = `${Math.trunc(minutes)}:${seconds}`;
            timeShow.innerHTML = strTimer;
        }
        --timeLongBreak;

        stopButton.onclick = () => {
            clearInterval(longBreakTimer);
        }

    }, 1000)
}