import { forwardRef } from "react"

export const Avatar = forwardRef(({ avatar, playerPosition }, ref) => {
  return (
    <div className="position-absolute border" ref={ref} style={{ top: playerPosition.y, left: playerPosition.x }}>
      <img src={avatar} alt="" />
    </div>
  )
})