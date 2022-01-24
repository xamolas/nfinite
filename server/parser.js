import { parse } from 'csv-parse'

export const parseCsv = () => {
  const processRow = row => {
    console.log('row', row)
  }

  const rows = parse(data, {
    delimiter: ';',
    columns: true,
    trim: true,
  })

  return rows.map(row => processRow(row))
}
