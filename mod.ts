const [input = null, output = null] = Deno.args

if (input === null) {
  console.error("argument missing: input")
  Deno.exit(1)
}

const [_prefix, _name, _columns, ..._colors] = (await Deno.readTextFile(input))
  .split("\n")
  .filter((line) => !line.startsWith("#"))

export type Color = {
  name: string
  hex: string
  red: number
  green: number
  blue: number
}

export type ColorPalette = {
  prefix: string
  name: string
  columns: number
  colors: Color[]
}

const [_namePrefix, ...palleteNames] = String(_name).split(":")

const colorPalette: ColorPalette = {
  prefix: String(_prefix).trim(),
  name: palleteNames.join(":").trim(),
  columns: Number(_columns.split(":")[1]),
  colors: _colors.map((color) => {
    const [_red, _green, _blue, ..._name] = color.split(" ")
    const name = _name.join(" ").trim().replace(/ +/g, " ")
    const red = Number(_red)
    const green = Number(_green)
    const blue = Number(_blue)
    return {
      name,
      hex: `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`,
      red,
      green,
      blue,
    }
  }),
}

const colorPaletteJSON = JSON.stringify(colorPalette, null, 2)

if (output) {
  await Deno.writeTextFile(output, colorPaletteJSON)
}

if (output === null) {
  console.log(colorPaletteJSON)
}
