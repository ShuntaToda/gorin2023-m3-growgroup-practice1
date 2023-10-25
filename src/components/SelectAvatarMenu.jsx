import { useEffect, useState } from "react"
import { getAvatarAPI } from "../api/avatar"
export const SelectAvatarMenu = ({ avatar, setAvatar }) => {
  const [images, setImages] = useState([])
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1)
  useEffect(() => {
    const getAvatar = async () => {
      const data = getAvatarAPI()
      setImages(data.images)
    }
    getAvatar()
  }, [])

  const handleClikeOk = () => {
    if (selectedImageIndex != -1) {
      setAvatar(images[selectedImageIndex])
    }
  }

  return (
    <div className="w-100 h-100 mt-5 d-flex justify-content-center align-items-center">
      <div className="border border-primary-subtle rounded shadow bg-white py-3 px-3 w-75 h-75 text-start">
        <h2 className="my-3 ms-4">Select Avatar</h2>
        <div className="d-flex pt-4 justify-content-around">
          {images.map((image, index) => (
            <div key={index} onClick={() => setSelectedImageIndex(index)} className={`${selectedImageIndex == index ? "border-danger" : "border-white"} border py-3 px-4 rounded`}>
              <img src={image} alt="" />
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="btn btn-outline-primary" onClick={handleClikeOk}>OK</div>
        </div>
      </div>
    </div>
  )
}