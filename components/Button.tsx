// eslint-disable import/namespace, import/default
type ButtonProps = {
  small?: boolean
  label: string
  variant: "primary"
  onClick?: () => void
  extraStyles?: any
  href?: string
}

function Button({ small, label, variant, onClick, extraStyles = null, href }: ButtonProps) {
  return (
    <a
      className={`border-0 ${extraStyles} ${small ? "h-[45px]" : "h-[50px]"}
        ${
          variant === "primary"
            ? `px-10 text-center bg-chinese-green rounded-lg font-mitr antialiased text-[18px]
            tracking-[0.25px] text-eerie-black font-semibold
            hover:shadow-[0px_11px_24px_-6px_rgba(131,164,34,1)] pt-2.5`
            : ""
        }`}
      type="button"
      href={href}
      onClick={onClick}
    >
      {label}
    </a>
  )
}

Button.defaultProps = {
  small: null,
  extraStyles: null,
  onClick: () => {},
  href: "",
}

export default Button
