import { useEffect, useRef, useState } from "react"
import { SelectAvatarMenu } from "./SelectAvatarMenu"
import { getItemsAPI } from "../api/items"
import { Item } from "./Item"
import { Avatar } from "./Avatar"

export const Field = ({ avatar, setAvatar }) => {
  const avatarEl = useRef(null)
  const [hadItems, setHadItems] = useState([])
  const [items, setItems] = useState([])
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 })
  const moveWidth = 10
  useEffect(() => {
    const getItems = async () => {
      const data = await getItemsAPI();
      console.log(data)
      setItems(data)
    }
    if (avatar != "") {
      getItems()
    }
  }, [avatar])

  const handleKeyDown = (e) => {
    console.log(e.key)
    if (e.key === "ArrowUp") {
      setPlayerPosition({ ...playerPosition, y: playerPosition.y - moveWidth })
    } else if (e.key === "ArrowDown") {
      setPlayerPosition({ ...playerPosition, y: playerPosition.y + moveWidth })
    } else if (e.key === "ArrowRight") {
      setPlayerPosition({ ...playerPosition, x: playerPosition.x + moveWidth })
    } else if (e.key === "ArrowLeft") {
      setPlayerPosition({ ...playerPosition, x: playerPosition.x - moveWidth })
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [playerPosition])

  const handleGetItem = (item) => {
    setItems(items.filter(i => i.id !== item.id))
    console.log(item)
  }


  return (
    <div className="d-flex justify-content-center">
      <div className={"position-relative border border-4 rounded-3 mt-5"} style={{ height: "700px", width: "1000px" }}>
        <Avatar ref={avatarEl} avatar={avatar} playerPosition={playerPosition}></Avatar>
        {items.map((item, index) => <Item key={item.id} avatarEl={avatarEl} playerPosition={playerPosition} handleGetItem={handleGetItem} item={item} index={index}></Item>)}
      </div>
    </div>
  )
}