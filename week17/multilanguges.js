function fullDateAndTime(lang) {
  const date = new Date();

  const so = [
    "Axad",
    "Isniin",
    "Salaasa",
    "Arbaca",
    "Khamiis",
    "Jimce",
    "Sabti",
  ];
  const ar = [
    "الأحد",
    "الإثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];
  const en = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayIndex = date.getDay();
  let weekday;

  if (lang === "so") {
    weekday = so[dayIndex];
  } else if (lang === "ar") {
    weekday = ar[dayIndex];
  } else {
    weekday = en[dayIndex];
  }

  // format date
  const datePart = date.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });

  // format time
  const timePart = date.toLocaleTimeString("en-CA", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  return `${datePart}-${weekday} ${timePart}`;
}

console.log(fullDateAndTime("so")); 
console.log(fullDateAndTime("ar")); 
console.log(fullDateAndTime("en")); 
