import Card from "./Card/Card";

const ArticlesView = () => {
  return (
    <div className="flex flex-col gap-4 w-[70%]">
      <Card tittle="The Future of Blockchain" name="John Doe" />
      <Card tittle="Crypto" name="Jane Smith" />
      <Card tittle="Technology" name="Alex Johnson" />
    </div>
  );
};

export default ArticlesView;
