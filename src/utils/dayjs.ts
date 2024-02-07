import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import quarterOfYear from 'dayjs/plugin/quarterOfYear'
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
dayjs.extend(localizedFormat)
dayjs.extend(relativeTime)
dayjs.extend(duration)
dayjs.extend(quarterOfYear)

export default dayjs
