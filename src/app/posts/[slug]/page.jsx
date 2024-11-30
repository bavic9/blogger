import Comments from "@/components/comments/Comments";
import Menu from "@/components/menu/Menu";
import Image from "next/image";


const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
      cache: "no-store",
    });
  
    if (!res.ok) {
      throw new Error("Failed");
    }
  
    return res.json();
  };
  
  const SinglePage = async ({ params }) => {
    const { slug } = params;
  
    const data = await getData(slug);
  

    console.log(data);

    return (
        <div>
            <div className="lg:flex items-center space-y-12 gap-12">
                <div className="flex-1">
                    <h1 className="lg:text-4xl text-2xl mb-12">
                        {data?.title}
                    </h1>
                    <div className="flex items-center gap-5">
                        {data?.user?.image && (
                            <div className="lg:w-[50px] w-[40px] h-[40px] lg:h-[50px] relative">
                                <Image src={data.user.image} alt="" fill className="rounded-[50%] object-cover" />
                            </div>
                        )}
                        <div className="flex flex-col gap-1 text-[color:var(--softTextColor)]">
                            <span className="lg:text-xl text-lg font-medium">
                                {data.user.name}
                            </span>
                            <span className="">01.01.2024</span>
                        </div>
                    </div>
                </div>
                {data?.img &&
                    <div className="flex-1 h-[250px] lg:h-[350px] relative">
                        <Image src={data.img} alt="" fill className="object-cover" />
                    </div>
                }
            </div>
            <div className="lg:flex gap-12 mt-5 justify-between">
                <div className=" lg:w-[70%] mt-14">
                    <div className="" dangerouslySetInnerHTML={{ __html: data?.desc }} /> 
                    <div>
                        <Comments postSlug={slug}/>
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );
}

export default SinglePage;
