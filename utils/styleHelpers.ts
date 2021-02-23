export const rgba = (hex: string, a: number) => {
  const parsed = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  const c = parsed
    ? {
        r: parseInt(parsed[1], 16),
        g: parseInt(parsed[2], 16),
        b: parseInt(parsed[3], 16),
      }
    : {
        r: 0,
        b: 0,
        c: 0,
      }

  return `rgba(${c.r}, ${c.g}, ${c.b}, ${a})`
}
