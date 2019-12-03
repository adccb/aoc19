const { input } = require('./input.js')

const is1 = ([opcode]) => opcode === 1
const is2 = ([opcode]) => opcode === 2
const is99 = ([opcode]) => opcode === 99

input.catch(console.err).then(({ raw, sanitized }) => {
  const final = raw.split(',')
  const set = (dest, val) => final[dest] = val
  const get = idx => Number(final[idx])

  const process1 = ([_, v1, v2, dest]) => set(dest, get(v1) + get(v2))
  const process2 = ([_, v1, v2, dest]) => set(dest, get(v1) * get(v2))
  const process99 = () => console.log(final[0]) && process.exit(0)

  sanitized.forEach(line =>
    is1(line) ? process1(line) :
    is2(line) ? process2(line) :
    is99(line)? process99() :
    null)
})
