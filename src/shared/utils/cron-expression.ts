const dayNameToAbbreviation: Record<string, string> = {
  Monday: "MON",
  Tuesday: "TUE",
  Wednesday: "WED",
  Thursday: "THU",
  Friday: "FRI",
  Saturday: "SAT",
  Sunday: "SUN",
};

const abbreviationToDayName: Record<string, string> = {
  MON: "Monday",
  TUE: "Tuesday",
  WED: "Wednesday",
  THU: "Thursday",
  FRI: "Friday",
  SAT: "Saturday",
  SUN: "Sunday",
};

const validateTimeFormat = (time: string) => {
  const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  if (!timeRegex.test(time)) {
    throw new Error("Invalid time format. Expected HH:mm (24-hour format).");
  }
};

const convertDayNamesToAbbreviations = (days: Array<string>): string => {
  if (days.length === 0 || days.length === 7) {
    return "*";
  }
  const abbrDays = days.map((day) => {
    const abbr = dayNameToAbbreviation[day];
    if (!abbr) {
      throw new Error(`Invalid day name: ${day}`);
    }
    return abbr;
  });
  return abbrDays.join(",");
};

export const toEventBridgeCron = (days: Array<string>, time: string): string => {
  validateTimeFormat(time);
  const [hourStr, minuteStr] = time.split(":");
  const dayField = convertDayNamesToAbbreviations(days);
  return `cron(${parseInt(minuteStr, 10)} ${parseInt(hourStr, 10)} ? * ${dayField} *)`;
};

const parseDayOfWeekField = (dayOfWeekField: string): Array<string> => {
  if (dayOfWeekField === "*" || dayOfWeekField === "?") {
    return ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  } else if (dayOfWeekField.includes("-")) {
    const [start, end] = dayOfWeekField.split("-");
    const dayOrder = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    const startIndex = dayOrder.indexOf(start);
    const endIndex = dayOrder.indexOf(end);
    if (startIndex === -1 || endIndex === -1) {
      throw new Error("Invalid day-of-week range in cron expression");
    }
    return dayOrder.slice(startIndex, endIndex + 1).map((abbr) => abbreviationToDayName[abbr]);
  } else if (dayOfWeekField.includes(",")) {
    const abbrs = dayOfWeekField.split(",");
    return abbrs.map((abbr) => {
      const day = abbreviationToDayName[abbr];
      if (!day) {
        throw new Error(`Invalid day abbreviation: ${abbr}`);
      }
      return day;
    });
  } else {
    const day = abbreviationToDayName[dayOfWeekField];
    if (!day) {
      throw new Error(`Invalid day abbreviation: ${dayOfWeekField}`);
    }
    return [day];
  }
};

export const fromEventBridgeCron = (cronExp: string): { days: Array<string>; time: string } => {
  const prefix = "cron(";
  const suffix = ")";
  if (!cronExp.startsWith(prefix) || !cronExp.endsWith(suffix)) {
    throw new Error("Invalid cron expression format");
  }
  // Remove the "cron(" prefix and ")" suffix
  const inner = cronExp.slice(prefix.length, -suffix.length).trim();
  const parts = inner.split(/\s+/);
  if (parts.length < 6) {
    throw new Error("Invalid cron expression, expected at least 6 fields");
  }
  const [minuteField, hourField, dayOfMonth, _monthField, dayOfWeekField, _yearField] = parts;
  if (dayOfMonth !== "?") {
    throw new Error("Expected day-of-month field to be '?' when day-of-week is specified");
  }

  // Format time as "HH:mm" (zero-padded)
  const hour = parseInt(hourField, 10);
  const minute = parseInt(minuteField, 10);
  const time = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;

  // Convert the day-of-week field to full day names.
  const days = parseDayOfWeekField(dayOfWeekField);

  return { days, time };
};
