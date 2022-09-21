type ButtonProps = {
  small?: boolean
  label: string
  variant: 'primary'
  onClick: () => void
  extraStyles?: any
}

const Button = ({
  small,
  label,
  variant,
  onClick,
  extraStyles = null
}: ButtonProps) => {
  return (
    <button
      className={`border-0 ${extraStyles} ${small ? 'h-[45px]' : 'h-[50px]'}
        ${
          variant === 'primary'
            ? 'bg-chinese-green px-10 rounded-lg font-mitr antialiased text-[18px] tracking-[0.25px] text-eerie-black font-bold hover:shadow-[0px_11px_24px_-6px_rgba(131,164,34,1)]'
            : ''
        }`}
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
