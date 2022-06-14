const csvToJson = require('convert-csv-to-json')

const database = {
  teams: [],
  people: [],
  roles: [],
  softwares: [],
  equipments: [],
  supplies: []
}
console.log(Object.keys(database))
Object.keys(database).forEach((key) => {
  database[key] = [
    ...database[key], 
    ...csvToJson.fieldDelimiter(',')
      .getJsonFromCsv(`./data-in-csv/${key}.csv`)
  ]
  if (database[key].length > 0) {
    const firstItem = database[key][0];
    console.log(firstItem)
    Object.keys(firstItem).forEach((itemKey) => {
      if (database[key].every((item) => {
        console.log(item)
        return /^-?\d+$/.test(item[itemKey])
      })) {
        database[key].forEach((item) => {
          item[itemKey] = Number(item[itemKey])
          console.log(item[itemKey])
        })
      }
    })
  }
})

module.exports = database