let day;
function f (day) {
  switch (new Date().getDay()) {
      case 0:
        day = "Duminica";
        break;
      case 1:
        day = "Luni";
        break;
      case 2:
        day = "Marti";
        break;
      case 3:
        day = "Miercuri";
        break;
      case 4:
        day = "Joi";
        break;
      case 5:
        day = "Vineri";
        break;
      case 6:
        day = "Sambata";
  }
  return day;
}
const zi = f(day);
console.log(zi);