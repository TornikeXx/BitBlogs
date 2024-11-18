import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <div className="h-[100vh] flex items-center justify-center text-[56px]">
        <h1>Could not find page</h1>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
