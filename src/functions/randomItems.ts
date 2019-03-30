export function randomItem<T>(items: T[]) {
  return items[Math.round(Math.random() * (items.length - 1))];
}
