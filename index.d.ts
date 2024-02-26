// LICENSE is MIT
//
// Copyright (c) 2024
//   Kevin Besset <https://github.com/kevbesset>
export type Block = string;
export type Element = string | null;
export type Modifier = string | string[] | { [key: string]: unknown } | null;

export default function bem(
  block: Block,
  element?: Element,
  modifiers?: Modifier
): string;

export function b(block: Block, modifiers?: Modifier);
export function e(block: Block, element: Element, modifiers?: Modifier);
