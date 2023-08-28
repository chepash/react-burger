import { TIngredient, TOrderIngredient } from '../services/types/data'

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
    } else if (count >= 2 && count <= 4) {
      return 'дня'
    } else {
      return 'дней'
    }
  }

  if (days === 0) {
    if (hours === 0) {
      if (minutes === 0) {
        return 'Только что'
      }
      return `Сегодня, ${updatedAtDate.toLocaleTimeString([], options)}`
    } else if (hours === 1) {
      return `Сегодня, ${updatedAtDate.toLocaleTimeString([], options)}`
    } else {
      return `Сегодня, ${updatedAtDate.toLocaleTimeString([], options)}`
    }
  } else if (days === 1) {
    return `Вчера, ${updatedAtDate.toLocaleTimeString([], options)}`
  } else {
    return `${days} ${getDaysText(
      days
    )} назад, ${updatedAtDate.toLocaleTimeString([], options)}`
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
