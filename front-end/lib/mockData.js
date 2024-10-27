import { AddCategory } from "@/components/records/category/AddCategory";
import { HomeTwoTone, PlusCircleTwoTone } from "@ant-design/icons";
import {
  Car,
  Gift,
  HeartPulseIcon,
  Hospital,
  ImageIcon,
  LampDesk,
  Leaf,
  MagnetIcon,
  Mic,
  Notebook,
  Rotate3DIcon,
  School,
  Sprout,
  Utensils,
} from "lucide-react";

export const types = [
  {
    id: 0,
    type: "all",
    checked: false,
  },
  {
    id: 1,
    type: "income",
    checked: false,
  },
  {
    id: 2,
    type: "expense",
    checked: true,
  },
];
export const options = [
  {
    label: <AddCategory />,
  },
  {
    label: (
      <>
        <HomeTwoTone /> Home
      </>
    ),
    value: "Home",
  },
  {
    label: (
      <div className="flex gap-2">
        <Utensils className="text-blue-600" /> Food
      </div>
    ),
    value: "Food",
  },
  {
    label: (
      <div className="flex gap-2">
        <Gift className="text-blue-400" /> Gift
      </div>
    ),
    value: "Gift",
  },
];
export const colors=[
    'yellow','blue','orange','black','cyan','green'
]
export const icons = [
  {
    id:1,
    icon:<School />
  },
  {
    id:2,
  icon:<Notebook />
  },
  {
    id:3,
    icon:<LampDesk />
  },
  {
    id:4,
  icon:<ImageIcon />
  },
  {
    id:5,
    icon:<MagnetIcon />
  },
  {
    id:6,
    icon:<Mic />
  },
  {
    id:7,
    icon: <Leaf />
  },
  {
    id:8,
    icon: <Rotate3DIcon />,
  },
  {
    id:9,
    icon: <HeartPulseIcon />,
  },
  {
    id:10,
    icon:<Hospital />,
  },
  {
    id:11,
    icon:<Car />,
  },
  {
    id:12,
    icon: <Sprout />,
  }
];
export const categories = [
  {
    id: 0,
    name: "Food & Drinks",
  },
  {
    id: 1,
    name: "Shopping",
  },
  {
    id: 2,
    name: "Housing",
  },
  {
    id: 3,
    name: "Transportation",
  },
  {
    id: 4,
    name: "Vehicle",
  },
  {
    id: 5,
    name: "Life & Entertainment",
  },
  {
    id: 6,
    name: "Communication & Pc",
  },
  {
    id: 7,
    name: "Financial Expenses",
  },
  {
    id: 8,
    name: "Investments",
  },
  {
    id: 9,
    name: "Income",
  },
  {
    id: 10,
    name: "Others",
  },
];
