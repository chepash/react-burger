import { TIngredient } from '../services/types/data'
import { TOrderIngredient } from '../services/types/ws-data'

export const formatUpdatedAtTime = (updatedAt: string): string => {
  const now = new Date()
  const updatedAtDate = new Date(updatedAt)

  const timeDiff = now.getTime() - updatedAtDate.getTime()
  const seconds = Math.floor(timeDiff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }

  const getDaysText = (count: number): string => {
    if (count === 1) {
      return 'день'
    } else if (
      (count % 10 === 2 || count % 10 === 3 || count % 10 === 4) &&
      (count < 10 || count > 20)
    ) {
      return 'дня'
    } else {
      return 'дней'
    }
  }

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const updatedAtDay = new Date(
    updatedAtDate.getFullYear(),
    updatedAtDate.getMonth(),
    updatedAtDate.getDate()
  )

  if (days === 0) {
    if (today.getTime() === updatedAtDay.getTime()) {
      return `Сегодня, ${updatedAtDate.toLocaleTimeString('en-GB', options)}`
    } else {
      return `Вчера, ${updatedAtDate.toLocaleTimeString('en-GB', options)}`
    }
  } else if (days === 1) {
    return `Вчера, ${updatedAtDate.toLocaleTimeString('en-GB', options)}`
  } else {
    return `${days} ${getDaysText(
      days
    )} назад, ${updatedAtDate.toLocaleTimeString('en-GB', options)}`
  }
}

export const transformOrderIngredientsList = (
  orderIngredientsIds: string[],
  detailedIngredientsData: TIngredient[]
): TOrderIngredient[] => {
  const orderIngredientsList: TOrderIngredient[] = []

  for (const id of orderIngredientsIds) {
    const detailedIngredientData = detailedIngredientsData.find(
      (ingredient) => ingredient._id === id
    )

    if (detailedIngredientData) {
      const addedIngredient = orderIngredientsList.find(
        (item) => item.ingredient._id === id
      )

      if (addedIngredient) {
        addedIngredient.amount++
      } else {
        orderIngredientsList.push({
          amount: 1,
          ingredient: detailedIngredientData,
        })
      }
    }
  }

  return orderIngredientsList
}
