import Featured from "@/components/featured/Featured";
import styles from "./homepage.module.css";
import Footer from "@/components/footer/Footer";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from '@/components/cardList/CardList';
import Menu from "@/components/menu/Menu";

export default function Home({ searchParams }) {

  const page = parseInt(searchParams.page) || 1;

  return (
    <div>
      <Featured />
      <CategoryList />
      <div className="flex lg:flex-row flex-col gap-12 mt-8">
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}
