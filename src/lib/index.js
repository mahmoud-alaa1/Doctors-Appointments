import { days } from "../constants";

export const getAuthToken = () => {
  return localStorage.getItem("supabaseToken");
};

export const getDate = (after = 0) => {
  const date = new Date();
  date.setDate(date.getDate() + after);
  return { day: date.getDate(), weekday: days[date.getDay()].substring(0, 3) };
};

export const getHour = (start = 12, after = 0) => {
  const hourFormat = ((start + after) % 12) + 1;
  return `${hourFormat}:00 ${start + after < 12 ? "AM" : "PM"}`;
};

export const SUPBASE_URL = "https://jxqzqjzqzqzqzqzqzqzq.supabase.co";