import useCategories from "@/api/useCategories";
import { useSelector } from "react-redux";

export default function DynamiCategory() {
  const categories = useCategories();
  console.log(categories);
  return <div>DynamiCategory</div>;
}
