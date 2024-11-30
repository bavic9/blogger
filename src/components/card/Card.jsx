import Image from "next/image";
import Link from "next/link";

const Card = ({ key, item }) => {


    return (
        <div className=' my-10   lg:flex items-center gap-12' key={key}>
            {item.img && (
                <div className=" flex-1 relative h-[300px] hidden lg:flex">
                    <Image className='object-cover rounded-lg' src={item.img} alt='' fill />
                </div>
            )}
            <div className="flex-1 flex flex-col gap-3 mt-6">
                <div>
                    <span>{item.createdAt.substring(0, 10)} -{" "} </span>
                    <span className="text-red-500 font-medium">{item.catSlug}</span>
                </div>
                <Link href={`/posts/${item.slug}`}>
                    <h1 className="text-xl font-semibold">{item.title}</h1>
                </Link>
                <p className="text-sm font-light text-[color:var(--softTextColor)]">
                    {item.desc.substring(0, 60)}
                </p>
                <Link className="border-b-[crimson] border-b border-solid w-max py-0.5" href={`/posts/${item.slug}`}>Read more</Link>
            </div>
        </div>
    );
}

export default Card;
