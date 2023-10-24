function calculateDaysBetweenDates(beginDate, endDate) {
  const millisecondsPerDay = 86400000;
  const beginTime = beginDate.getTime();
  const endTime = endDate.getTime();
  const diff = endTime - beginTime;
  return Math.floor(diff / millisecondsPerDay);
}

const today = new Date();