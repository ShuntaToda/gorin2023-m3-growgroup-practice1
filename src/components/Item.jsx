import { useEffect, useState } from "react";

export const Item = ({ item, index }) => {
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  useEffect(() => {
    if (index === 0) {
      setTop(100)
      setLeft(100)
    } else if (index === 1) {
      setTop(100)
      setLeft(700)
    } else {
      setTop(500)
      setLeft(100)
    }
  }, [])
  return (
    <div className="position-absolute border" style={{ top: top, left: left }}>
      <img src={item} alt="" />
    </div>
  );
}