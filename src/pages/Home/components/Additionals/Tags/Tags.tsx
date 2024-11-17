import CardFrame from "../../../../../components/CardFrame/CardFrame";

const Tags = () => {
  return (
    <CardFrame>
      <h1 className=" tex-[#03050c] text-xl font-semibold mb-2">
        Popular Tags
      </h1>
      <div className="flex items-center gap-2 mr-10">
        <button className="bg-buttonblue text-[#fff] rounded-md py-[2px] px-[10px] mt-2">
          blockchain
        </button>
        <button className="bg-buttonblue text-[#fff] rounded-md py-[2px] px-[10px] mt-2">
          Technology
        </button>
        <button className="bg-buttonblue text-[#fff] rounded-md py-[2px] px-[10px] mt-2">
          Future
        </button>
      </div>
      <div className="flex items-center gap-2 mr-2">
        <button className="bg-buttonblue text-[#fff] rounded-md py-[2px] px-[10px] mt-2">
          Programming
        </button>
        <button className="bg-buttonblue text-[#fff] rounded-md py-[2px] px-[10px] mt-2">
          AI
        </button>
        <button className="bg-buttonblue text-[#fff] rounded-md py-[2px] px-[10px] mt-2">
          Machine Learning
        </button>
      </div>
    </CardFrame>
  );
};

export default Tags;
