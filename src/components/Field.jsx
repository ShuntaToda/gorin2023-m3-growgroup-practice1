import { SelectAvatarMenu } from "./SelectAvatarMenu"

export const Field = ({ avatar, setAvatar }) => {
  return (
    <div className={"border border-4 rounded-3 mt-5 container"} style={{ height: "700px" }}>
      {avatar && <SelectAvatarMenu avatar={avatar} setAvatar={setAvatar}></SelectAvatarMenu>}
    </div>
  )
}