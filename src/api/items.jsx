import item1 from "../images/items/item-coffee.svg"
import item2 from "../images/items/item-smartphone.svg"
import item3 from "../images/items/item-pc.svg"

export const getItemsAPI = () => {
  return [{
    id: 0,
    name: "coffee",
    image: item1
  }, {
    id: 1,
    name: "smartphone",
    image: item2
  }, {
    id: 2,
    name: "pc",
    image: item3
  }]
}