const currentYear = () => {
  const today = new Date();
  return parseInt(today.getFullYear(), 10);
};

const midRangeYear = dates => {
  const allYears = dates.map(week => parseInt(week.x.getFullYear(), 10));
  const buttons = allYears.length / 4;
};

const oldestYear = dates => {
  const allYears = dates.map(week => parseInt(week.x.getFullYear(), 10));
  return Math.min(...allYears);
};

const years = dates => {
  let allYears = [];
  dates.map(week => {
    const year = parseInt(week.x.getFullYear(), 10);
    if (!allYears.includes(year)) allYears.push(year);
  });
  return years;
};

export { currentYear, oldestYear, years };
