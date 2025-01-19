import Hero from "../components/Hero";
import CardContent from "../components/CardContent";
import Highlights from "../components/Highlights";
import Reviews from "../components/ReviewListings";
import Companies from "../components/Companies";
import Instagram from "../components/Instagram";

const Home = () => {
  return (
    <>
      <Hero />
      <CardContent />
      <Highlights />
      <Reviews isHome="true" />
      <Companies />
      <Instagram />
    </>
  );
};

export default Home;
