const changeFormat = function (time) {
  var [hrs, mins, secs] = time.split(":");

  hrs = parseInt(hrs) % 12;
  mins = parseInt(mins);
  isAfternoon = secs.slice(-2) === "PM" ? true : false;
  secs = parseInt(secs.slice(0,2));
  if (isAfternoon) {
    hrs += 12;
  }
  secs += 45;
  mins += 45;

  if (secs >= 60) {
    mins += 1;
    secs = secs - 60;
  }

  if (mins >= 60) {
    hrs += 1;
    mins = mins - 60;
  }
  
  if (hrs === 24) {
    hrs = 0;
  }

  hrs = ("0" + hrs).slice(-2);
  mins = ("0" + mins).slice(-2);
  secs = ("0" + secs).slice(-2);

  return `${hrs}:${mins}:${secs}`;
};

time1 = "12:01:00PM";
time2 = "12:01:00AM";
time3 = "11:14:15PM";
console.log(changeFormat(time3));
