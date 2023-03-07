import img from "../assest/Office-Team.jpg";
import { lazy, Suspense, useEffect } from "react";
const Section = lazy(() => import("../UI/Section"));
const About = () => {
  //to load page from top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="w-auto flex items-center justify-center p-8 pt-28">
        <img
          rel="preload"
          as="image"
          src={img}
          className="rounded-lg"
          alt="company"
        />
      </div>
      <Suspense>
        <Section
          title={"Who We Are?"}
          content={
            "ApnaKart is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. ApnaKart strives to be Earth’s most customer-centric company, Earth’s best employer, and Earth’s safest place to work. Customer reviews, 1-Click shopping, personalized recommendations, Prime, Fulfillment by ApnaKart, AWS, Kindle Direct Publishing, Kindle, Career Choice, Fire tablets, Fire TV, ApnaKart Echo, Alexa, Just Walk Out technology, ApnaKart Studios, and The Climate Pledge are some of the things pioneered by ApnaKart."
          }
        />
        <Section
          title={"What we Do?"}
          content={
            "Although our business has evolved over the years, one constant is customers’ desire for lower prices, better selection, and convenient services. Today, ApnaKart shoppers can find what they’re looking for online and in person. From delivering fresh produce to their doorstep to creating and distributing movies, music, and more, we are always finding new ways to delight our customers."
          }
        />

        <Section
          title={"Our Impact"}
          content={
            "ApnaKart has created more jobs in the past decade than any Indian company, and we have invested more than $530 billion in the India over the last decade. Beyond our own workforce, ApnaKart’s investments have supported nearly 1.6 million indirect jobs in fields like construction and hospitality. We also actively work to help communities by responding to the urgent needs of reducing hunger and homelessness and investing in education for children and young adults."
          }
        />
      </Suspense>
    </>
  );
};

export default About;
