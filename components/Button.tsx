import Image from "next/image"

interface ButtonProps {
  color: "light" | "dark"
  active: boolean
  outline?: boolean
  title?: string
  img?: string
  borderRadiusSide?: "left" | "right"
  borderRadius?: number
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  
  const isActive = props.active ? 'active' : 'in-active'
  const isOutline = props.outline ? 'outline' : 'in-line'

  return (
    <button 
      className={`button ${props.color} ${isActive} ${isOutline} ${props.borderRadiusSide}`}
      style={{borderRadius: props.borderRadius != undefined ? props.borderRadius + "px" : ""}}
    >
      {props.img !== undefined && props.img !== null &&
        <Image
          src={props.img}
          alt={props.title == undefined ? '' : props.title}
          width={24}
          height={24}
        />
      }
      <span>{props.title}</span>
    </button>
  )
}

export default Button