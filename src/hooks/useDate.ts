import moment from 'moment-timezone';
import 'moment/locale/pt-br';

export function useDate(stringDate: string) {
  const timezoneLocal = moment.tz.guess();
  const date = moment.tz(stringDate, timezoneLocal).locale('pt-br');

  const weekDays = [
    'domingo',
    'segunda-feira',
    'terça-feira',
    'quarta-feira',
    'quinta-feira',
    'sexta-feira',
    'sábado',
  ];

  function formatToISOString() {
    return date.format('D [de] MMM. [de] YYYY');
  }

  function getDayWeek() {
    return weekDays[date.day()];
  }

  function getHour() {
    return `${date.hour()}:00`;
  }
  return {
    formatToISOString,
    getDayWeek,
    getHour,
  };
}
