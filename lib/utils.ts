import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * A function that merges class names using clsx and tailwind-merge
 * @param  inputs - The class names to be merged
 * @returns The merged class names
 * @example cn('text-red-500', 'font-bold') Returns 'text-red-500 font-bold'
 */
export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};
