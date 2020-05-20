import tw from "twin.macro"
import { keys } from "rambda"
import { UI_COLORS } from "./colors"

export function selectRandomFromArray(input: any[]) {
  if (!input) {
    throw new Error("empty/missing array")
  }

  if (input.length < 2) {
    return input[0]
  }

  return input[Math.floor(Math.random() * input.length)]
}

export function getRandomBackgroundColor(shade = "medium") {
  const colors = keys(UI_COLORS)
  const chosen = selectRandomFromArray(colors)
  return UI_COLORS[chosen][shade]
}
