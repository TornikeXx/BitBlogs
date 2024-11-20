import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import book from "../../../assets/book.svg";
import people from "../../../assets/people.svg";
import thunder from "../../../assets/thunder.svg";

const Cards = () => {
  return (
    <div className="grid grid-flow-col gap-6 my-8">
      <Card className="bg-[#fafafa] dark:bg-[#05060C]">
        <CardHeader>
          <CardTitle className="text-buttonblue">
            <img src={book} alt="" />
          </CardTitle>
          <CardTitle>Rich content</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-grey">
            Access a wide range of articles, tutorials, and insights on the
            latest tech trends and best practices.
          </p>
        </CardContent>
      </Card>
      <Card className="bg-[#fafafa] dark:bg-[#05060C]">
        <CardHeader>
          <CardTitle className="text-buttonblue">
            <img src={people} alt="" />
          </CardTitle>
          <CardTitle>Vibrant Community</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-grey">
            Connect with like-minded individuals, share your knowledge, and grow
            your professional network.
          </p>
        </CardContent>
      </Card>
      <Card className="bg-[#fafafa] dark:bg-[#05060C]">
        <CardHeader>
          <CardTitle className="text-buttonblue">
            <img src={thunder} alt="" />
          </CardTitle>
          <CardTitle>Cutting-edge Topics</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-grey">
            Stay ahead of the curve with content covering emerging technologies
            and innovative solutions.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;
