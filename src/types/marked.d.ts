declare module "marked" {
  // Minimal typing to satisfy TypeScript in this project.
  export function marked(input: string): string;
  export const parse: (input: string) => string;
  export default marked;
}
