import Image1 from "../../assets/love.svg";
import Image2 from "../../assets/celeb.svg";
import Image3 from "../../assets/coins.svg";

const Menu = [
  {
    id: 1,
    image: Image1,
    title: "Live Wikimedia Change Capture",
    category: "Streaming",
    description:
      "Captured live Wikimedia data with Kafka clients and stored events in OpenSearch.",
  },
  {
    id: 2,
    image: Image2,
    title: "Funds Authorisation Microservice",
    category: "Fintech",
    description:
      "Limited Service Mode with zero-downtime so banks keep serving customers while Transact/T24 is unavailable.",
  },
  {
    id: 3,
    image: Image3,
    title: "I++ Game",
    category: "Product",
    description:
      "World Champion Finalist game built in Android Studio and published on Google Play.",
    link: "https://play.google.com/store/apps/details?id=com.awesome.i&hl=en&gl=US",
  },
];

export default Menu;
