# gpl-to-json
converts GIMP Palettes to JSON

# structure
```
Color {
  name: string
  hex: string
  red: number
  green: number
  blue: number
}

ColorPalette {
  prefix: string
  name: string
  columns: number
  colors: Color[]
}
```

# usage
## write output to json file
```
deno run --allow-read --allow-write https://raw.githubusercontent.com/mini-jail/gpl-to-json/main/mod.ts input.gpl output.json
```

## write output to console
```
deno run --allow-read --allow-write https://raw.githubusercontent.com/mini-jail/gpl-to-json/main/mod.ts input.gpl
```

```
deno run --allow-read --allow-write https://raw.githubusercontent.com/mini-jail/gpl-to-json/main/mod.ts input.gpl > ./output.json
```

# motivation
i need it, lol