import moment from "moment";

export {
  formatDate,
  yearsSinceDate,
  getDayFromDate,
  daysSinceDate,
};

const formatDate = (date) => {
  const newDate = moment(date).format("dddd Do MMMM YYYY");
  return newDate;
};

const yearsSinceDate = (date) => {
  const newDate = moment().diff(date, "years");
  return newDate;
};

const getDayFromDate = (date) => {
  const newDate = moment(date).format("dddd");
  return newDate;
};

const daysSinceDate = (date) => {
  const newDate = moment().diff(date, "days");
  return newDate;
};