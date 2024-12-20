import { useParams } from "react-router-dom";
import { Twitter, Facebook, Linkedin, Github } from "lucide-react";
import authors from "../../../../../../../authors.json";
import ArticleCard from "../../../Articles/Card/Card";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SingleAuthorsView = () => {
  const { id } = useParams();
  const currentAuthor = authors.find((author) => author.id === id);
  const authorDoesnotExist = !currentAuthor;
  if (authorDoesnotExist) {
    return (
      <div className="h-[100vh] tex-[60px] flex justify-center text-center items-center ">
        Author not Found
      </div>
    );
  }

  return (
    <div className="max-w-[56rem] ml-auto mr-auto">
      <div className="flex bg-[#fcfcfc] shadow rounded-xl p-9 my-12 gap-[40px] dark:bg-[#05060C] ">
        <div className="flex justify-center items-center bg-grey  text-white rounded-full h-24 w-24">
          {currentAuthor.initials}
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{currentAuthor.name}</h1>
          <p className=" text-grey">{currentAuthor.about}</p>
          <div className="flex gap-4 items-center">
            <button>
              <Twitter />
            </button>
            <button>
              <Facebook />
            </button>
            <button>
              <Linkedin />
            </button>
            <button>
              <Github />
            </button>
          </div>
          <div className="flex text-grey gap-4">
            <p>{currentAuthor.followers} followers</p>
            <p>{currentAuthor.following} following</p>
          </div>
        </div>
      </div>
      <div>
        <Tabs defaultValue="articles">
          <TabsList className="w-[100%]">
            <TabsTrigger className="w-[50%]" value="articles">
              Articles
            </TabsTrigger>
            <TabsTrigger className="w-[50%]" value="about">
              About
            </TabsTrigger>
          </TabsList>
          <TabsContent value="articles">
            <div className="my-8 flex flex-col gap-4">
              <ArticleCard tittle="The Future of Blockchain" name="John Doe" />
              <ArticleCard tittle="Crypto" name="Jane Smith" />
              <ArticleCard tittle="Technology" name="Alex Johnson" />
            </div>
          </TabsContent>
          <TabsContent value="about">
            <Card className="p-6 my-8">
              <h2 className="text-xl font-semibold">
                About {currentAuthor.name}
              </h2>
              <p className="text-grey my-4">{currentAuthor.about}</p>
              <h2 className="text-xl font-semibold">Skills</h2>
              <div className="flex items-center gap-2">
                <button className="bg-[#e0e2eb] text-buttonblue rounded-md py-[2px] px-[10px] mt-2 dark:bg-[#121317] ">
                  Javascript
                </button>
                <button className="bg-[#e0e2eb] text-buttonblue rounded-md py-[2px] px-[10px] mt-2 dark:bg-[#121317] ">
                  React
                </button>
                <button className="bg-[#e0e2eb] text-buttonblue rounded-md py-[2px] px-[10px] mt-2 dark:bg-[#121317] ">
                  Node
                </button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SingleAuthorsView;
