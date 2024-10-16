import { days } from "../constants";
import { months } from "../constants";

export const getAuthToken = () => {
  return localStorage.getItem("supabaseToken");
};

export const getDate = (after = 0) => {
  const date = new Date();
  date.setDate(date.getDate() + after);
  const month = date.getUTCMonth() + 1; // months from 1-12
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  const calender = year + "-" + month + "-" + day;

  return { day: date.getDate(), weekday: days[date.getDay()].substring(0, 3), calender };
};

export const getHour = (start = 12, after = 0) => {
  let hourFormat = (start + after) % 12;
  hourFormat = hourFormat === 0 ? 12 : hourFormat;
  return `${hourFormat}:00 ${start + after < 12 ? "AM" : "PM"}`;
};

export const formatToCalender = (date) => {
  date = date.split("-");
  const hour = getHour(+date[3]);
  return `${+date[2]}, ${months[+date[1]]}, ${date[0]} | ${hour}`;
};
