const { readFile } = require('fs')

const last = (arr, newVal) => newVal !== undefined ? (arr[arr.length - 1].push(newVal), arr) : arr[arr.length - 1]
const sanitize = data => data.split(',').reduce((list, int) => 
  (last(list).length < 4 ? last(list, Number(int)) : list.push([Number(int)]), list), [[]])

const input = new Promise((resolve, reject) =>
  readFile('input.txt', 'utf-8', (err, raw) => 
    err 
      ? reject(error)
      : resolve({raw, sanitized: sanitize(raw)})))

module.exports = { input }
