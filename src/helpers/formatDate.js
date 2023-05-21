import { formatDistanceToNow } from 'date-fns';

export const dateToNow = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};
