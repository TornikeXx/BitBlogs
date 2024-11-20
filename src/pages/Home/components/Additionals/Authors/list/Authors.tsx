import { useTranslation } from "react-i18next";
import CardFrame from "../../../../../../components/CardFrame/CardFrame";
import authors from "../../../../../../../authors.json";
import { Link } from "react-router-dom";

const Authors = () => {
  const { t } = useTranslation();

  return (
    <CardFrame>
      <h1 className=" text-[#03050c] text-xl font-semibold mb-2 dark:text-[#ffffff]">
        {t("authors")}
      </h1>

      <div className="flex flex-col gap-3">
        {authors.map((author) => (
          <div key={author.id}>
            <Link
              to={`author/${author.id}`}
              className="flex gap-2 items-center cursor-pointer"
            >
              <div className="bg-gray-500 w-12 h-12 rounded-full" />
              <div className="flex flex-col gap-1">
                <p className="hover:underline">{author.name}</p>
                <p className="text-[#555969] font-thin text-sm">{author.bio}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </CardFrame>
  );
};

export default Authors;

{
  /* <div className="flex gap-2 items-center cursor-pointer">
          <div className="bg-gray-500 w-12 h-12 rounded-full" />
          <div className="flex flex-col gap-1">
            <p className="hover:underline">Alice Johnson</p>
            <p className="text-[#555969] font-thin text-sm">
              BlockChain Enthusisat
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center cursor-pointer">
          <div className="bg-gray-500 w-12 h-12 rounded-full" />
          <div className="flex flex-col gap-1">
            <p className="hover:underline">Bob Smith</p>
            <p className="text-[#555969] font-thin text-sm">Crypto Analyst</p>
          </div>
        </div>
        <div className="flex gap-2 items-center cursor-pointer">
          <div className="bg-gray-500 w-12 h-12 rounded-full" />
          <div className="flex flex-col gap-1">
            <p className="hover:underline">Carol Williams</p>
            <p className="text-[#555969] font-thin text-sm">Tech Journalist</p>
          </div>
        </div> */
}
