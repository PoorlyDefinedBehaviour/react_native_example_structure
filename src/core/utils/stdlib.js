export const pascalCase = (string, separator = " ") =>
  string
    .split(separator)
    .map(
      ([firstLetter, ...otherLetters]) =>
        `${firstLetter.toUpperCase()}${otherLetters
          .join("")
          .toLowerCase()}`
    )
    .join(separator)

export const zip = (xs, ys) =>
  xs.length > ys.length
    ? xs.map((x, index) => [x, ys[index]])
    : ys.map((y, index) => [xs[index], y])
