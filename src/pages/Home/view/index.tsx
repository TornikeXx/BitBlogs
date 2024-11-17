import AdditionalsView from "../components/Additionals";
import ArticlesView from "../components/Articles";

const HomePageView = () => {
  return (
    <div className="py-8 px-4 flex flex-row justify-evenly">
      <ArticlesView />
      <AdditionalsView />
    </div>
  );
};

export default HomePageView;
