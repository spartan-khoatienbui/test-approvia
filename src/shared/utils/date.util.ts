import dayjs, { ConfigType } from "dayjs";
import { isNil } from "lodash-es";

export enum DateFormat {
  DateWithTime = "MMM DD, YYYY [at] hh:mm A",
  DateOnly = "MMM DD, YYYY",
}

export function formatDate(date: ConfigType, format: DateFormat, fallback = "") {
  if (isNil(date)) return fallback;
  return dayjs(date).format(format);
}

// Parses an AWS-style cron expression and extracts day and formatted time
export function parseCronExpression(cronExpr: string, durationInMinutes: number) {
  const cronRegex = /^cron\((\d+) (\d+) \? \* ([A-Z,]+|\*) \*\)$/;
  const match = cronExpr.match(cronRegex);

  if (!match) {
    return {
      days: [],
      startTime: 0,
      endTime: 0,
    };
  }

  const minute = parseInt(match[1]);
  const hour = parseInt(match[2]);
  const days = match[3].split(",").map((day) => day.trim());

  // Calculate start and end times in minutes
  const startTime = hour * 60 + minute;
  const endTime = startTime + durationInMinutes;

  return {
    days: days.at(0) === "*" ? ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"] : days,
    startTime,
    endTime,
  };
}

export function minuteToHourMinutePeriod(minute: number) {
  const hour = Math.floor(minute / 60);
  const remainingMinute = minute % 60;
  const period = hour >= 12 ? "PM" : "AM";
  const formattedHour = hour % 12 || 12;
  return `${String(formattedHour).padStart(2, "0")}:${String(remainingMinute).padStart(2, "0")} ${period}`;
}
