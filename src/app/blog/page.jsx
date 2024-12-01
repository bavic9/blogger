import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

const BlogPage = ({ searchParams }) => {

  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;


  return (
    <div>
      <h1 className="bg-[coral] uppercase text-white py-2 px-2 text-center text-2xl font-semibold">{cat} Blog</h1>
      <div className="flex lg:flex-row flex-col gap-12">
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
}

export default BlogPage;
