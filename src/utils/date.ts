import dayjs from './dayjs'

export const getRelativeDate = (date: number): string => dayjs.unix(date).fromNow()
