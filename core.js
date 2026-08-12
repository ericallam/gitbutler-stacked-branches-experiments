// Layer 2: core logic (depends on layer 1 config)
import { config } from "./config.js";

export function greet() {
  return `${config.greeting}, ${config.name}!`;
}

export function shout() {
  return greet().toUpperCase();
}
