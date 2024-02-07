/* istanbul ignore file */

export * from '@testing-library/react'

export function overrideWindowProperty(property: string, value: unknown): void {
  Object.defineProperty(window, property, {
    configurable: true,
    value,
    writable: true,
  })
}
