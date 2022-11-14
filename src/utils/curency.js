const formatter = Intl.NumberFormat('ru-RU', {currency: 'RUB', style: 'currency'})
export function currency(value) {
    return formatter.format(value)
    
}