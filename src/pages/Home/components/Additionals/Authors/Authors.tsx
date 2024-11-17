import CardFrame from "../../../../../components/CardFrame/CardFrame";

const Authors = () => {
  return (
    <CardFrame>
      <h1 className=" tex-[#03050c] text-xl font-semibold mb-2">
        Featured Authors
      </h1>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center cursor-pointer">
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
        </div>
      </div>
    </CardFrame>
  );
};

export default Authors;
