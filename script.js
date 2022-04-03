let workButton = document.querySelector('.work');
let breakButton = document.querySelector('.break');
let longBreakButton = document.querySelector('.long__break');
let startButton = document.querySelector('.start');
let timeShow = document.querySelector('.timer');
let taskTextOne = document.querySelector('.what__task-1');
let taskTextTwo = document.querySelector('.what__task-2');
let taskTextThree = document.querySelector('.what__task-3');
let taskTextFour = document.querySelector('.what__task-4');
let taskTextFive = document.querySelector('.what__task-5');
let taskButtonOne = document.querySelector('.confirm-1');
let taskButtonTwo = document.querySelector('.confirm-2');
let taskButtonThree = document.querySelector('.confirm-3');
let taskButtonFour = document.querySelector('.confirm-4');
let taskButtonFive = document.querySelector('.confirm-5');
let taskFieldOne = document.querySelector('.task-first');
let taskFieldTwo = document.querySelector('.task-second');
let taskFieldThree = document.querySelector('.task-third');
let taskFieldFour = document.querySelector('.task-fourth');
let taskFieldFive = document.querySelector('.task-fifth');
let stopButton = document.querySelector('.stop')


// Работа с тасками

// Таск 1
taskButtonOne.onclick = () =>{
    task = taskTextOne.value;
    taskFieldOne.innerHTML = task;
}

taskFieldOne.onclick = () =>{
    taskFieldOne.style.textDecoration = 'line-through';
}


// Таск 2
taskButtonTwo.onclick = () =>{
    task = taskTextTwo.value;
    taskFieldTwo.innerHTML = task;
}

taskFieldTwo.onclick = () =>{
    taskFieldTwo.style.textDecoration = 'line-through';
}


// Таск 3
taskButtonThree.onclick = () =>{
    task = taskTextThree.value;
    taskFieldThree.innerHTML = task;
}

taskFieldThree.onclick = () =>{
    taskFieldThree.style.textDecoration = 'line-through';
}


// Таск 4
taskButtonFour.onclick = () =>{
    task = taskTextFour.value;
    taskFieldFour.innerHTML = task;
}

taskFieldFour.onclick = () =>{
    taskFieldFour.style.textDecoration = 'line-through';
}


// Таск 5
taskButtonFive.onclick = () =>{
    task = taskTextFive.value;
    taskFieldFive.innerHTML = task;
}

taskFieldFive.onclick = () =>{
    taskFieldFive.style.textDecoration = 'line-through';
}


// Установка таймера

timeWork = 25 * 60
timeBreak = 5 * 60
timeLongBreak = 15 * 60

function soundPlay() {
    let audio = new Audio('notification.mp3');
    audio.play();
};

// Таймер работы

workButton.onclick = () =>{
    workTimer = setInterval(function () {
    seconds = timeWork%60 // секунды
    minutes = timeWork/60%60 // минуты
    if (timeWork <= 0){
        clearInterval(workTimer);
        soundPlay();
    } else {
        let strTimer = `${Math.trunc(minutes)}:${seconds}`;
        timeShow.innerHTML = strTimer;
    }
    --timeWork; //уменьшаем таймер

    stopButton.onclick = () =>{
        clearInterval(workTimer);
    }
    
    }, 1000)
}



// Таймер короткого перерыва 

breakButton.onclick = () =>{
    breakTimer = setInterval(function () {
        seconds = timeBreak%60 
        minutes = timeBreak/60%60
    if (timeBreak <= 0) {
        clearInterval(breakTimer);
        soundPlay();
    } else {
        let strTimer = `${Math.trunc(minutes)}:${seconds}`;
        timeShow.innerHTML = strTimer;
    }
    --timeBreak;

    stopButton.onclick = () =>{
        clearInterval(breakTimer);
    }

    }, )
}

// Таймер длинного перерыва

longBreakButton.onclick = () =>{
    longBreakTimer = setInterval(function () {
        seconds = timeLongBreak%60
        minutes = timeLongBreak/60%60
    if (timeLongBreak <= 0) {
        clearInterval(longBreakTimer);
        soundPlay();
    } else {
        let strTimer = `${Math.trunc(minutes)}:${seconds}`;
        timeShow.innerHTML = strTimer;
    }
    --timeLongBreak;

    stopButton.onclick = () =>{
        clearInterval(longBreakTimer);
    }

    }, 1000)
}