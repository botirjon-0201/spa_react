import CategoryItem from "./CategoryItem";

export default function CategoryList({ catalog }) {
  return (
    <div>
      {catalog.length ? (
        <div className="list">
          {catalog.map((item) => (
            <CategoryItem key={item.idCategory} {...item} />
          ))}
        </div>
      ) : (
        <h1>Not found such meal</h1>
      )}
    </div>
  );
}
