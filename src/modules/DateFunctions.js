const currentYear = () => {
  const today = new Date();
  return parseInt(today.getFullYear(), 10);
};

const midRangeYear = dates => {
  const allYears = dates.map(week => parseInt(week.x.getFullYear(), 10));
  const buttons = allYears.length / 4;
};

const maxRangeYear = dates => {
  const allYears = dates.map(week => parseInt(week.x.getFullYear(), 10));
  return Math.min(...allYears);
};

export { currentYear, maxRangeYear };
