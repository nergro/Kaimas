import moment from 'moment';

export const getDateChunks = (from: Date, to: Date): Date[] => {
  const start = moment(from);
  const end = moment(to);

  const duration = moment.duration(end.diff(start));
  const days = Math.round(duration.asDays());
  const dateChunks = [];

  const day = 60 * 60 * 24 * 1000;

  for (let i = 0; i <= days; i++) {
    dateChunks.push(new Date(from.getTime() + day * i));
  }
  return dateChunks;
};
