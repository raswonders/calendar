let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let date = new Date();
let dayInWeek = days[date.getDay()];
let month = months[date.getMonth()];
let day = date.getDate().toString();


function main () {
  const cal = JSON.parse(calendar_str)
  let name = cal[month][day];
  updateCalendar(month, day, dayInWeek, name);
}


function updateCalendar(month, day, dayInWeek, name) {
  // FIXME is there a way in DOM traversal I could reference from calendarBox
  updateTagById("dateMonth", month);
  updateTagById("dateDay", day);
  updateTagById("dateWeek", dayInWeek);
  updateTagById("namesDay", name)
}


function updateTagById(id, value) {
  document.getElementById(id).innerText = value;
}

