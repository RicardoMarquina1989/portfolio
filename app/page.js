import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export default async function Home() {
  const blogs = [
    {
      cover_image: "/projects/shiba.png",
      title: "Shiba Menu",
      url: "https://shibamemu.com/",
      description:
        "Where blockchain meets AI innovation! Join us in the DeFi adventure as we unleash the power of technology to revolutionize the crypto landscape. With us, the future is pawsitively bright!",
    },
    {
      cover_image: "/projects/arbinu.png",
      title: "Arbinu Staking",
      url: "https://stake.arbinucoin.com/",
      description:
        "Where DeFi meets whimsy! Seamlessly bridge blockchains, explore projects, stake assets for passive income, and farm for rewards. Laugh, earn, and play in the crypto cosmos! 🐾",
    },
    {
      cover_image: "/projects/altsignal.png",
      title: "Altsignals",
      url: "https://token.altsignals.io/",
      description:
        "AltSignals is set to soar with AI, ML, NLP, and sentiment analysis. 🚀 Traders benefit from automated, 24/7 trading and advanced analysis support.",
    },
    {
      cover_image: "/projects/mailchain.png",
      title: "Mailchain",
      url: "https://https://mailchain.com//",
      description:
        "Mailchain makes it possible to communicate in a web3-native way. With our SDK, developers can easily add web3 email to their own projects and applications, allowing them to engage with their users in a truly web3 way.",
    },
    {
      cover_image: "/projects/grow.png",
      title: "Grow",
      url: "https://growprotocol.net ",
      description:
        "Grow Protocol will provide the first real passive income in the industry. Stake USDT, Earn USDT, 25% APY, no lies. Start earning today with Grow.",
    },
    {
      cover_image: "/projects/paxful.png",
      title: "Paxful",
      url: "https://paxful.com/",
      description:
        "Your gateway to the world of crypto! Buy, sell, and trade Bitcoin securely. 💼💱 Join us and embrace the future of decentralized finance.",
    },
  ];
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
    </>
  );
}
