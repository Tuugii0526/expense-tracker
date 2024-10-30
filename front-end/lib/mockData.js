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
export const dateFilters=[
  '7','14','21'
]
export const types = [
  {
    id: 0,
    type: "all",
    value: "ALL",
    checked: true,
  },
  {
    id: 1,
    type: "income",
    value: "INC",
    checked: false,
  },
  {
    id: 2,
    type: "expense",
    value: "EXP",
    checked: false,
  },
];

export const colors = [{
  id:0,
  color:"yellow"
}, 
{
  id:1,
  color:"blue"
},
{
  id:2,
  color: "orange"
}, {
  id:3,
  color:"black"
}, {
  id:4,
  color:"cyan"
}, 
{
  id:5,
  color:"green"
}];
export const icons = [
  {
    id: 1,
    name:'School',
    icon: <School />,
  },
  {
    id: 2,
    name:'Notebook',
    icon: <Notebook />,
  },
  {
    id: 3,
    name:"LampDesk",
    icon: <LampDesk />,
  },
  {
    id: 4,
    name:"ImageIcon",
    icon: <ImageIcon />,
  },
  {
    id: 5,
    name:"MagnetIcon",
    icon: <MagnetIcon />,
  },
  {
    id: 6,
    name:"Mic",
    icon: <Mic />,
  },
  {
    id: 7,
    name:"Leaf",
    icon: <Leaf />,
  },
  {
    id: 8,
    name:"Rotate3dIcon",
    icon: <Rotate3DIcon />,
  },
  {
    id: 9,
    name:"HeartPulseIcon",
    icon: <HeartPulseIcon />,
  },
  {
    id: 10,
    name:"Hospital",
    icon: <Hospital />,
  },
  {
    id: 11,
    name:"Car",
    icon: <Car />,
  },
  {
    id: 12,
    name:"Sprout",
    icon: <Sprout />,
  },
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
