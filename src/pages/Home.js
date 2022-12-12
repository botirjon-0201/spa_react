import { useEffect, useContext } from "react";
import CategoryList from "../components/CategoryList";
import Loader from "../components/Loader";
import Search from "../components/Search";
import { getAllCategories } from "./api";
import { MainContext } from "../context";

export default function Home() {
  const [
    { catalog, setCatalog, setFilteredCatalog },
    pathname,
    search,
    push,
    goBack,
  ] = useContext(MainContext);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(data.categories);
    });
  }, [search]);

  return (
    <>
      <Search />
      {!catalog.length ? <Loader /> : <CategoryList />}
    </>
  );
}
