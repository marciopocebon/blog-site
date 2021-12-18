import Link from "next/link";
import Image from "next/image";

interface Props {}

const Sidebar: React.FC<Props> = () => {
  const items = [
    {
      title: "My feed",
      link: "/",
    },
    {
      title: "Explore",
      link: "/explore",
    },
    {
      title: "Tags",
      link: "/tags",
    },
    {
      title: "bookmarks",
      link: "/bookmarks",
    },
    {
      title: "search",
      link: "/search",
    },
  ];

  return (
    <div className="bg-[#18191A] relative z-40 flex flex-row items-center py-2 md:border-b-0 md:overflow-auto dark:border-brand-grey-800 md:h-full h-20 md:flex-col md:py-5 sm:w-[13vw] w-full  border-r-2 border-[#424242] p-4">
      <div className="relative h-10 w-36 md:w-full">
        <Image
          alt="logo"
          layout="fill"
          objectFit="contain"
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1638857777409/X9Qy8JjWe.png?auto=compress&w=1000"
        />
      </div>
      <div className="flex flex-col mt-10 w-full items-start justify-between">
        <Link href="/write">
          <a className="bg-[#2962ff] text-center hover:bg-blue-700 mb-4 text-lg font-semibold text-white w-full px-4 py-3 rounded-lg">
            Write
          </a>
        </Link>
        <hr className="w-full border-[#424242]" />

        <div className="flex mt-2 flex-col w-full">
          {items.map((item) => (
            <Link href={item.link} key={item.title}>
              <a className="px-4 py-3 rounded-lg text-gray-50 hover:bg-[#232626] w-full capitalize">
                {item.title}
              </a>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-auto">
        <Image
          alt=""
          width={50}
          height={50}
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1629282644342/VGWU-WK52.png?w=200&h=200&fit=crop&crop=faces&auto=compress&auto=compress"
        />
      </div>
    </div>
  );
};

export default Sidebar;
