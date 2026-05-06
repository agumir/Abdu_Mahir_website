// This file tells TypeScript that CSS imports are allowed
declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}