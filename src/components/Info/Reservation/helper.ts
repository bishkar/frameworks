export const guestOptions : { [key: number]: string } = {
  1: '1 guest',
  2: '2 guests',
  3: '3 guests',
  4: '4 guests',
  5: '5 guests',
  6: '6 guests',
};

export const dateOptions: { [key: string]: string } = {
  [new Date().toISOString().split('T')[0]]: 'Today',
  [new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0]]: 'Tomorrow',
  [new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split('T')[0]]: 'Day after tomorrow',
  [new Date(new Date().setDate(new Date().getDate() + 3)).toISOString().split('T')[0]]: 'In 3 days',
  [new Date(new Date().setDate(new Date().getDate() + 4)).toISOString().split('T')[0]]: 'In 4 days',
};

export const timeOptions: { [key: string]: string } = {
  '06:00 PM': '06:00 PM',
  '07:00 PM': '07:00 PM',
  '08:00 PM': '08:00 PM',
  '09:00 PM': '09:00 PM',
  '10:00 PM': '10:00 PM',
  '11:00 PM': '11:00 PM',
  '12:00 AM': '12:00 AM',
  '01:00 AM': '01:00 AM',
  '02:00 AM': '02:00 AM',
  '03:00 AM': '03:00 AM',
  '04:00 AM': '04:00 AM',
};
