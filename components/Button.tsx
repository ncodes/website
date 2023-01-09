// eslint-disable import/namespace, import/default
type ButtonProps = {
  small?: boolean
  label: string
  variant: "primary"
  onClick?: (e: any) => void
  alignStyle?: any
  extraStyles?: any
  href?: string
}

function Button({ small, label, variant, onClick, alignStyle = null, extraStyles = null, href }: ButtonProps) {
  return (
    <div className={`${alignStyle} ${extraStyles}`}>
      <a
        className={`border-0 ${small ? "h-[45px]" : "h-[50px]"}
          ${
            variant === "primary"
              ? `px-10 text-center !bg-chinese-green !bg-[#C8ED5A] rounded-lg font-mitr antialiased text-[18px]
                tracking-[0.25px] text-eerie-black font-semibold !py-2.5 flex justify-center items-center
                hover:shadow-[0px_11px_24px_-6px_rgba(131,164,34,1)]`
              : ""
          } ${extraStyles}`}
        href={href}
        onClick={onClick}
      >
        {label}
      </a>
    </div>
  )
}

Button.defaultProps = {
  small: null,
  alignStyle: null,
  extraStyles: null,
  onClick: () => {},
  href: "",
}

export default Button
