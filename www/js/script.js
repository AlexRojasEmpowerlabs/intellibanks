// Globally head date object for the month shown
var date = new Date();
date.setDate(1);
date.setMonth(date.getMonth());

// Converts day ids to the relevant string
function dayOfWeekAsString(dayIndex) {
        return ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"][dayIndex];
    }
    // Converts month ids to the relevant string
function monthsAsString(monthIndex) {
    return ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"][monthIndex];
}

// Creates a day element
function createCalendarDay(num, day, mon, year) {
    var currentCalendar = document.getElementById("calendar");

    var newDay = document.createElement("div");
    var date = document.createElement("p");
    var dayElement = document.createElement("p");

    date.innerHTML = num;
    dayElement.innerHTML = day;

    newDay.className = "calendar-day ";

    // Set ID of element as date formatted "8-January" etc 
    newDay.id = num + "-" + mon + "-" +year;
   var indice=0;
   if(num<10){
   	num="0"+num;
   }
    	if(mon==="Enero"){
    		indice="01";
    		}
    		
    	if(mon==="Febrero"){
    		indice="02";
    		}
    		
    	if(mon==="Marzo"){
    		indice="03";
    		}
    		
    	if(mon==="Abril"){
    		indice="04";
    		}
    		
    	if(mon==="Mayo"){
    		indice="05";
    		}
    		
    	if(mon==="Junio"){
    		indice="06";
    		}
    		
    	if(mon==="Julio"){
    		indice="07";
    		}
    		
    	if(mon==="Agosto"){
    		indice="08";
    		}
    		
    	if(mon==="Septiembre"){
    		indice="09";
    		}
    		
    	if(mon==="Octubre"){
    		indice="10";
    		}
    		
    	if(mon==="Noviembre"){
    		indice="11";
    		}
    		
    	if(mon==="Diciembre"){
    		indice="12";
    		}
    		
    newDay.onclick=function(){fecha={"year":year,"mes":mon,"dia":num,"indice":indice};};

    newDay.appendChild(date);
    newDay.appendChild(dayElement);
    currentCalendar.appendChild(newDay);
}

// Clears all days from the calendar
function clearCalendar() {
    var currentCalendar = document.getElementById("calendar");

    currentCalendar.innerHTML = "";

}

// Clears the calendar and shows the next month
function nextMonth() {
    clearCalendar();

    date.setMonth(date.getMonth() + 1);

    createMonth(date.getMonth());
}

// Clears the calendar and shows the previous month
function previousMonth() {
    clearCalendar();
    date.setMonth(date.getMonth() - 1);
    var val = date.getMonth();
    createMonth(date.getMonth());
}

// Creates and populates all of the days to make up the month
function createMonth() {
    var currentCalendar = document.getElementById("calendar");

    var dateObject = new Date();
    dateObject.setDate(date.getDate());
    dateObject.setMonth(date.getMonth());
    dateObject.setYear(date.getFullYear());

    createCalendarDay(dateObject.getDate(), dayOfWeekAsString(dateObject.getDay()), monthsAsString(dateObject.getMonth()), dateObject.getFullYear());

    dateObject.setDate(dateObject.getDate() + 1);

    while (dateObject.getDate() != 1) {
        createCalendarDay(dateObject.getDate(), dayOfWeekAsString(dateObject.getDay()), monthsAsString(dateObject.getMonth()), dateObject.getFullYear());
        dateObject.setDate(dateObject.getDate() + 1);
    }

    // Set the text to the correct month
    var currentMonthText = document.getElementById("current-month");
    currentMonthText.innerHTML = monthsAsString(date.getMonth()) + " " + date.getFullYear();

    getCurrentDay();
}


function getCurrentDay() {

    // Create a new date that will set as default time
    var todaysDate = new Date();
    var today = todaysDate.getDate();
    var currentMonth = todaysDate.getMonth();
    var currentYear = todaysDate.getFullYear();
    var thisMonth = monthsAsString(currentMonth);
    // Find element with the ID for today
    currentDay = document.getElementById(today + "-" + thisMonth + "-" + currentYear);
    currentDay.className = "calendar-day today";
}