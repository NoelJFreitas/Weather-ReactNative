export function useDate(stringDate: string) {
  const date = new Date(stringDate);

  function formatToISOString() {
    const formattedDate = new Intl.DateTimeFormat('pt-BR', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    }).format(date);
    return formattedDate;
  }

  function getDayWeek() {
    let dayWeek = new Intl.DateTimeFormat('pt-BR', {
      weekday: 'long',
    }).format(date);
    dayWeek = dayWeek[0].toUpperCase() + dayWeek.slice(1);
    return dayWeek;
  }

  function getHour() {
    let hour = new Intl.DateTimeFormat('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);

    return hour;
  }
  return {
    formatToISOString,
    getDayWeek,
    getHour,
  };
}
