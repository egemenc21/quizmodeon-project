import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: string
}

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  inverted: 'inverted',
}

function BaseButton({
  children,
  onClick,
  type = 'submit'
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="p-4 bg-primary text-white rounded-lg" onClick={onClick} type={type}>
      {children}
    </button>
  )
}

function InvertedButton({ children }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="p-4 bg-tertiary text-primary rounded-lg" type="submit">
      {children}
    </button>
  )
}


const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,  
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  })[buttonType]

function Button({ children, onClick, buttonType,type }: ButtonProps) {
  const CustomButton = getButton(buttonType)
  return <CustomButton onClick={onClick} type={type}>{children}</CustomButton>
}

export default Button