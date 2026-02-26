export function Capitalize(str: string | null): string {
  return str ? str[0].toUpperCase() + str.slice(1) : "";
}
