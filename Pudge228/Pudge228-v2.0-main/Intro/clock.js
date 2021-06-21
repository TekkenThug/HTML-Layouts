



let load = function() // дожидаемся загрузки страницы
{
     initializeTimer(); // вызываем функцию инициализации таймера
}


function initializeTimer() {
    var endDate = new Date(2020,4,1,0,0); // получаем дату истечения таймера
    var currentDate = new Date(); // получаем текущую дату
    var seconds = (endDate-currentDate) / 1000; // определяем количество секунд до истечения таймера
    if (seconds > 0) { // проверка - истекла ли дата обратного отсчета
        var minutes = seconds/60; // определяем количество минут до истечения таймера
        var hours = minutes/60; // определяем количество часов до истечения таймера
        minutes = (hours - Math.floor(hours)) * 60; // подсчитываем кол-во оставшихся минут в текущем часе
        hours = Math.floor(hours); // целое количество часов до истечения таймера
        seconds = Math.floor((minutes - Math.floor(minutes)) * 60); // подсчитываем кол-во оставшихся секунд в текущей минуте
        minutes = Math.floor(minutes); // округляем до целого кол-во оставшихся минут в текущем часе
        
        setTimePage(hours,minutes,seconds); // выставляем начальные значения таймера
        
        function secOut() {
          if (seconds == 0) { // если секунду закончились то
              if (minutes == 0) { // если минуты закончились то
                  if (hours == 0) { // если часы закончились то
                      showMessage(timerId); // выводим сообщение об окончании отсчета
                  }
                  else {
                      hours--; // уменьшаем кол-во часов
                      minutes = 59; // обновляем минуты 
                      seconds = 59; // обновляем секунды
                  }
              }
              else {
                  minutes--; // уменьшаем кол-во минут
                  seconds = 59; // обновляем секунды
              }
          }
          else {
              seconds--; // уменьшаем кол-во секунд
          }
          setTimePage(hours,minutes,seconds); // обновляем значения таймера на странице
        }
        timerId = setInterval(secOut, 1000) // устанавливаем вызов функции через каждую секунду
    }
    else {
        // alert("Установленная дата уже прошла");
    }
}

function setTimePage(h,m,s) { // функция выставления таймера на странице
    var element = document.getElementById("timer"); // находим элемент с id = timer
    element.innerHTML = h+":"+m+":"+s; // выставляем новые значения таймеру на странице
}

function showMessage(timerId) { // функция, вызываемая по истечению времени
    // alert("Время истекло!");
    clearInterval(timerId); // останавливаем вызов функции через каждую секунду
}


document.addEventListener("DOMContentLoaded", load);

// function showTime(){
//     var date = new Date();
//     var h = date.getHours(); // 0 - 23
//     var m = date.getMinutes(); // 0 - 59
//     var s = date.getSeconds(); // 0 - 59
//     //var session = "AM";
    
//     if(h == 0){
//         h = 12;
//     }
    
//     // if(h > 12){
//     //     h = h - 12;
//     //     session = "PM";
//     // }
    
//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : s;
    
//     var time = h + ":" + m + ":" + s;// + " " + session;
//     document.getElementById("MyClockDisplay").innerText = time;
//     document.getElementById("MyClockDisplay").textContent = time;
    
//     setTimeout(showTime, 1000);
    
// }

// showTime();