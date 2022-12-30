import { useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";

export default function CategoryList() {
  const { filteredCatalog } = useSelector((state) => state.catalog);

  return (
    <div>
      {filteredCatalog.length ? (
        <div className="list">
          {filteredCatalog.map((item) => (
            <CategoryItem key={item.idCategory} {...item} />
          ))}
        </div>
      ) : (
        <h1>Not found such meal</h1>
      )}
    </div>
  );
}
