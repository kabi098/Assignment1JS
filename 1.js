const current = new Date();

const date = current.toLocaleDateString();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName = days[current.getDay()];

document.write("<b>Today's Date: </b>", date, "<br>");
document.write("<b>Today's Day: </b>", dayName);