const dateFormatDef = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
})
const currencyFormatDef = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})

export const dateFormatter = (date?: Date) =>
    date!==undefined && dateFormatDef.format(new Date(date)) || '-'

export const currencyFormatter = (value?: number) =>
    value!==undefined && currencyFormatDef.format(value) || '-'