import Tags from "./Tags/Tags";
import Authors from "./Authors/Authors";

const AdditionalsView = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <Tags />
      <Authors />
    </div>
  );
};

export default AdditionalsView;
