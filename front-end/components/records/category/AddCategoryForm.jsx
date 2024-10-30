import { colors, icons } from "@/lib/mockData";
import { roboto700 } from "@/app/fonts/fonts";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Categories } from "./HomeCategories";
import { SelectedIcon } from "./SelectedIcon";
import { createCategory } from "@/lib/actions";
import { toast } from "react-toastify";
import { useBeAware } from "@/components/context/RecordAddContextProvider";
export const AddCategoryForm = ({ setIfAddCategory, close }) => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(icons[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const {userId}= useBeAware()
  const onSumbit = async () => {
    const name = selectedIcon?.name;
    const icon_color = selectedColor?.color;
    const res = await createCategory({ name, description, icon_color ,userId});
    if (res.success) {
      toast.success(res.message);
      close();
      if (setIfAddCategory) {
        setIfAddCategory(false);
      }
    } else {
      toast.warning(res.message);
    }
  };
  return (
    <div className="w-[494px] h-fit grid grid-rows-[1fr_3fr] bg-white rounded-2xl overflow-hidden">
      <div className="w-full h-full py-5 px-6  flex justify-between border border-b-2">
        <p className={`${roboto700.className} text-xl`}>Add category</p>
        <XMarkIcon
          className="h-5"
          onClick={() => {
            close();
            if (setIfAddCategory) {
              setIfAddCategory(false);
            }
          }}
        />
      </div>
      <form
        className="w-[494px] min-h-[236px] h-fit p-6 flex flex-col justify-around gap-2"
        action={onSumbit}
      >
        <div className="w-full min-h-1/2 h-fit flex flex-col gap-2">
          <div
            className="flex w-fit h-fit  rounded-lg p-3 bg-[#F9FAFB] gap-3"
            onClick={() => {
              setCategoriesOpen((pre) => !pre);
            }}
          >
            <SelectedIcon
              selectedIcon={selectedIcon}
              selectedColor={selectedColor}
            />
            {categoriesOpen ? <UpOutlined /> : <DownOutlined />}
          </div>
          {categoriesOpen && (
            <Categories
              icons={icons}
              colors={colors}
              setSelectedColor={setSelectedColor}
              setSelectedIcon={setSelectedIcon}
            />
          )}
          <input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            className=" h-fit rounded-lg p-3 bg-[#F9FAFB] flex grow "
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full h-fit p-2 rounded-3xl bg-[#16A34A] text-white ${roboto700.className}`}
        >
          Add
        </button>
      </form>
    </div>
  );
};
