import {
  HiOutlineLightBulb,
  HiOutlineCode,
  HiOutlineChip,
  HiOutlineGlobe,
} from "react-icons/hi";

export const coreValues = [
  {
    title: "Purpose-Built Products",
    description:
      "Every product we build solves a clear operational problem. No bloat, no unnecessary features.",
    icon: <HiOutlineLightBulb className="w-10 h-10 text-blue-500" />,
  },
  {
    title: "Intuitive Design",
    description:
      "If your team needs training, we missed the mark. Our tools are simple, fast, and clear.",
    icon: <HiOutlineCode className="w-10 h-10 text-purple-500" />,
  },
  {
    title: "Fast Time to Value",
    description:
      "Setup takes days, not months. Your team benefits from our software almost immediately.",
    icon: <HiOutlineChip className="w-10 h-10 text-green-500" />,
  },
  {
    title: "Real Support",
    description:
      "No ticket queues. When you need help, you talk to a human who can solve the problem.",
    icon: <HiOutlineGlobe className="w-10 h-10 text-yellow-500" />,
  },
];
