import Section from "../UI/Section";
import img from "../assest/Office-team.jpg";

const About = () => {
  return (
    <>
      <div className="w-auto flex items-center justify-center p-8 pt-28">
        <img src={img} className="rounded-lg" alt="" />
      </div>
      <Section
        title={"Who We Are?"}
        content={
          "ApnaMart is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. ApnaMart strives to be Earth’s most customer-centric company, Earth’s best employer, and Earth’s safest place to work. Customer reviews, 1-Click shopping, personalized recommendations, Prime, Fulfillment by ApnaMart, AWS, Kindle Direct Publishing, Kindle, Career Choice, Fire tablets, Fire TV, ApnaMart Echo, Alexa, Just Walk Out technology, ApnaMart Studios, and The Climate Pledge are some of the things pioneered by ApnaMart."
        }
      />
      <Section
        title={"What we Do?"}
        content={
          "Although our business has evolved over the years, one constant is customers’ desire for lower prices, better selection, and convenient services. Today, ApnaMart shoppers can find what they’re looking for online and in person. From delivering fresh produce to their doorstep to creating and distributing movies, music, and more, we are always finding new ways to delight our customers."
        }
      />

      <Section
        title={"Our Impact"}
        content={
          "ApnaMart has created more jobs in the past decade than any Indian company, and we have invested more than $530 billion in the India over the last decade. Beyond our own workforce, ApnaMart’s investments have supported nearly 1.6 million indirect jobs in fields like construction and hospitality. We also actively work to help communities by responding to the urgent needs of reducing hunger and homelessness and investing in education for children and young adults."
        }
      />
    </>
  );
};

export default About;
