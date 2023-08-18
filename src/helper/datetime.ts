import { DateTime } from "luxon";

export function dateRelative(date: string): string {
  return DateTime.fromISO(date).toRelativeCalendar({locale: "ru"}) || "Неизвестный ";
}

export function dateFormat(date: string, format: string): string {
  return DateTime.fromISO(date).toFormat(format, {locale: "ru"});
}
