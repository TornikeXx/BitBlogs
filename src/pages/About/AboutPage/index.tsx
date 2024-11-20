import Cards from "../Cards";
import { Button } from "../../../components/ui/button";

const AboutPage = () => {
  return (
    <div className="max-w-[56rem] ml-auto mr-auto py-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-2">About bitblogs</h1>
        <p className="text-xl text-grey dark:text-[#979baa]">
          Empowering tech enthusiasts to share knowledge and inspire innovation
        </p>
      </section>
      <section className="grid items-center gap-8 grid-flow-col mt-8">
        <div>
          <h2 className="font-semibold text-3xl">Our mission</h2>
          <p className="text-grey mt-4 dark:text-[#979baa]">
            At bitBlogs, we believe in the power of shared knowledge. Our
            mission is to create a platform where tech enthusiasts, developers,
            and innovators can come together to share ideas, learn from each
            other, and push the boundaries of what's possible in the world of
            technology.
          </p>
        </div>
        <div className="h-full">
          <img
            src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=400&amp;width=400"
            alt=""
          />
        </div>
      </section>
      <section className="mt-8 ">
        <h2 className="text-3xl font-semibold text-center">What we offer </h2>
        <Cards />
      </section>
      <section className="p-8 rounded-lg bg-[#E4E7EB] my-8 dark:bg-[#1f2128]">
        <h2 className="text-3xl font-semibold mb-4 ">Our Story</h2>
        <p className="text-grey mb-4 dark:text-[#979baa]">
          Founded in 2023, bitBlogs started as a small project by a group of
          passionate developers who wanted to create a space for sharing their
          experiences and learning from others. What began as a simple blog
          quickly grew into a thriving community of tech enthusiasts from all
          around the world.
        </p>
        <p className="text-grey dark:text-[#979baa]">
          Today, bitBlogs is proud to be a leading platform for
          technology-focused content, fostering innovation and collaboration in
          the ever-evolving world of tech.
        </p>
      </section>
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Join Us on Our Journey</h2>
        <p className="mb-4 text-grey dark:text-[#979baa]">
          Whether you're a seasoned developer, a curious beginner, or somewhere
          in between, there's a place for you at bitBlogs. Let's shape the
          future of technology together.
        </p>
        <Button className="bg-buttonblue hover:bg-buttonblue-light">
          Get Started Today
        </Button>
      </section>
    </div>
  );
};

export default AboutPage;
