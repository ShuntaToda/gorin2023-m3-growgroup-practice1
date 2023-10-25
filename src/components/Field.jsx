import { useEffect, useState } from "react"
import { SelectAvatarMenu } from "./SelectAvatarMenu"
import { getItemsAPI } from "../api/items"
import { Item } from "./Item"

export const Field = ({ avatar, setAvatar }) => {
  const [items, setItems] = useState([])
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
  return (
    <div className="d-flex justify-content-center">
      <div className={"position-relative border border-4 rounded-3 mt-5"} style={{ height: "700px", width: "1000px" }}>
        {items.map((item, index) => <Item item={item} index={index}></Item>
        )}
      </div>
    </div>
  )
}