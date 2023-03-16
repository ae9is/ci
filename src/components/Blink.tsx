import './Blink.css'

export interface BlinkProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode
}

export default function Blink(props: BlinkProps) {
  const { children, ...rest } = props
  return (
    <div className='blink' {...rest}>{children}</div>
  )
}