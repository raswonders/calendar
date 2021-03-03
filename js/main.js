const cal = JSON.parse(calendar_str)
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let today = new Date();

function nextDay(date) {
  date.setDate(date.getDate() + 1);
}


function updateCalendar(date) {
  let dayInWeek = days[date.getDay()];
  let month = months[date.getMonth()];
  let day = date.getDate().toString();
  let name = cal[month][day];
  // FIXME is there a way in DOM traversal I could reference from calendarBox
  updateTagById("dateMonth", month);
  updateTagById("dateDay", day);
  updateTagById("dateWeek", dayInWeek);
  updateTagById("namesDay", name)
}


function updateTagById(id, value) {
  document.getElementById(id).innerText = value;
}
