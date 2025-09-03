import React from 'react'
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button' | 'a'
  href?: string
  variant?: 'solid' | 'ghost' | 'icon'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const map = {
  solid: 'btn',
  ghost: 'btn btn--ghost',
  icon:  'btn btn--icon'
}
const sizeMap = {
  sm: 'btn--sm',
  md: '',
  lg: 'btn--lg'
}

export const Button: React.FC<ButtonProps> = ({
  as = 'button', href, variant = 'solid', size = 'md', className = '', children, ...rest
}) => {
  const classes = [map[variant], sizeMap[size], className].filter(Boolean).join(' ')
  if (as === 'a') {
    return <a href={href} className={classes} {...(rest as any)}>{children}</a>
  }
  return <button className={classes} {...rest}>{children}</button>
}