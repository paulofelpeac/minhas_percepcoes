export function formatDate(date: string) {
  const value = new Date(`${date}T12:00:00`);

  const day = value
    .getDate()
    .toString()
    .padStart(2, "0");

  const months = [
    "JAN",
    "FEV",
    "MAR",
    "ABR",
    "MAI",
    "JUN",
    "JUL",
    "AGO",
    "SET",
    "OUT",
    "NOV",
    "DEZ",
  ];

  const month = months[value.getMonth()];
  const year = value.getFullYear();

  return `${day} ${month} ${year}`;
}