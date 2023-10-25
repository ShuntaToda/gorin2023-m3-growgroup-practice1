import { useEffect, useRef, useState } from "react";

export const Item = ({ item, index, handleGetItem, avatarEl, playerPosition }) => {
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const itemEl = useRef(null)

  useEffect(() => {
    if (item.id === 0) {
      setTop(500)
      setLeft(700)
    } else if (item.id === 1) {
      setTop(100)
      setLeft(700)
    } else {
      setTop(500)
      setLeft(100)
    }
  }, [])

  useEffect(() => {
    const avatarSize = avatarEl.current.getBoundingClientRect()
    const itemSize = itemEl.current.getBoundingClientRect()

    // console.log(avatarSize)
    if (avatarSize.x < itemSize.x + itemSize.width && avatarSize.x + avatarSize.width > itemSize.x && avatarSize.y < itemSize.y + itemSize.height && avatarSize.y + avatarSize.height > itemSize.y) {
      handleGetItem(item)
    }
  }, [playerPosition])
  return (
    <div className="position-absolute border" ref={itemEl} style={{ top: top, left: left }}>
      <img src={item.image} alt="" />
    </div>
  );
}