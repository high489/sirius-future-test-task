type TimeUnit = 'days' | 'hours' | 'minutes' | 'seconds'

const getLocalizedUnit = (
  unit: TimeUnit,
  count: number,
  currentLanguage: string,
  length?: number
): string => {
  let result: string

  switch (currentLanguage) {
    case 'ru':
      const forms: Record<TimeUnit, [string, string, string]> = {
        days: ['день', 'дня', 'дней'],
        hours: ['час', 'часа', 'часов'],
        minutes: ['минута', 'минуты', 'минут'],
        seconds: ['секунда', 'секунды', 'секунд'],
      }

      const getForm = (count: number, [one, few, many]: [string, string, string]): string => {
        const remainder10 = count % 10
        const remainder100 = count % 100
        if (remainder10 === 1 && remainder100 !== 11) return one
        if (remainder10 >= 2 && remainder10 <= 4 && (remainder100 < 10 || remainder100 >= 20)) return few
        return many
      }

      result = getForm(count, forms[unit])
      break

    case 'en':
    default:
      const englishForms: Record<TimeUnit, string> = {
        days: count === 1 ? 'day' : 'days',
        hours: count === 1 ? 'hour' : 'hours',
        minutes: count === 1 ? 'minute' : 'minutes',
        seconds: count === 1 ? 'second' : 'seconds',
      }

      result = englishForms[unit]
      break
  }

  return length ? result.slice(0, length) : result
}

export { getLocalizedUnit }