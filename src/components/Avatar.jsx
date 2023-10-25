export const Avatar = ({ avatar, playerPosition }) => {
  return (
    <div className="position-absolute border" style={{ top: playerPosition.x, left: playerPosition.y }}>
      <img src={avatar} alt="" />
    </div>
  )
}