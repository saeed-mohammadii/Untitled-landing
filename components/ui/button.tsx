import * as React from "react"
import {Slot} from "@radix-ui/react-slot"
import {cva, type VariantProps} from "class-variance-authority"

import {cn} from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                    "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                outline:
                    "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost:
                    "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                link: "text-primary underline-offset-4 hover:underline",
                // secondaryGray: "h-[60px] px-[22px] py-4 bg-white  text-[#414651] border border-[#D5D7DA] shadow-xs",
                secondaryGray: `
    bg-white
    text-[#344054]
    border
    border-[#D5D7DA]
    shadow-[0_1px_2px_0_rgba(16,24,40,0.05),0_-2px_0_0_rgba(0,0,0,0.02)_inset,0_0_0_1px_rgba(255,255,255,0.08)_inset]
    hover:bg-[#F9FAFB]
    active:bg-[#F3F4F6]
    focus-visible:ring-2
    focus-visible:ring-offset-2
    focus-visible:ring-[#7F56D9]
  `,

                // secondaryGrayDark: "h-[60px] px-[22px] bg-[#13161B] py-4 text-[#CECFD2] border border-[#373A41] shadow-xs",
                secondaryGrayDark: `
  bg-[#13161B]
  text-[#F7F7F8]
  border
  border-[#373A41]
  shadow-[0_1px_2px_0_rgba(16,24,40,0.05),0_-2px_0_0_rgba(0,0,0,0.25)_inset,0_0_0_1px_rgba(255,255,255,0.08)_inset]
  hover:bg-[#1C1F25]
  active:bg-[#0C0E12]
  focus-visible:ring-2
  focus-visible:ring-offset-2
  focus-visible:ring-[#7F56D9]
`
,
                // primary: "h-[60px] px-[22px] py-8 bg-[#7F56D9] text-white border-2 border-white outline-[#7F56D9] shadow-xs",
                primary: `
    bg-[#7F56D9]
    text-white
    border-2
    border-transparent
    shadow-[0_1px_2px_0_rgba(16,24,40,0.05),0_-2px_0_0_rgba(0,0,0,0.02)_inset,0_0_0_1px_rgba(255,255,255,0.08)_inset]
    hover:bg-[#6941C6]
    active:bg-[#53389E]
    focus-visible:ring-2
    focus-visible:ring-offset-2
    focus-visible:ring-[#7F56D9]
  `,

                // primaryDark: "h-[60px] px-[22px] py-8 bg-[#7F56D9] text-white border-gradient-to-r from-white/10 to-white/0 rounded-md shadow-xs"
                primaryDark: `
  bg-[#7F56D9]
  text-white
  border-2
  border-transparent
  [border-image:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)_1]
  shadow-[0_1px_2px_0_rgba(16,24,40,0.05),0_-2px_0_0_rgba(0,0,0,0.02)_inset,0_0_0_1px_rgba(255,255,255,0.08)_inset]
  hover:bg-[#6941C6]
  active:bg-[#53389E]
  focus-visible:ring-2
  focus-visible:ring-offset-2
  focus-visible:ring-[#7F56D9]
`
            },
            size: {
                default: "h-9 px-4 py-2 has-[>svg]:px-3",
                // sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
                // lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                // icon: "size-9",
                // "icon-sm": "size-8",
                // "icon-lg": "size-10",
                mobile: "h-12 px-4.5 font-semibold rounded-md",
                lg: "h-11 px-4 font-semibold rounded-md text-base",
                xl: "h-12 px-5.5 font-semibold rounded-lg text-base"
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

function Button({
                    className,
                    variant,
                    size,
                    asChild = false,
                    ...props
                }: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
    asChild?: boolean
}) {
    const Comp = asChild ? Slot : "button"

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({variant, size}), className)}
            {...props}
        />
    )
}

export {Button, buttonVariants}
