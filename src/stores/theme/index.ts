import { atom } from 'nanostores';

export const DARK = 'dark'
export const LIGHT = 'light'
export const PANCAKE = 'pancake'
export const BARBIE = 'barbie'
export const DARCULA = 'darcula'
export  const THEMES = [
    DARK,
    LIGHT,
    PANCAKE,
    BARBIE,
    DARCULA
]
export const DEFAULT_THEME = DARK

export const theme = atom(DEFAULT_THEME);