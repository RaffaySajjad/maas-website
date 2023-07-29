import BannerReview from "@/components/bannerReview";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Home from "@/components/home";
import ImageBanner, { IImageBannerProps } from "@/components/imageBanner";
import styles from "@/styles/Index.module.css";
import Head from "next/head";

const Features: IImageBannerProps[] = [
  {
    imageFirst: true,
    image: {
      src: "/images/worker.jpg",
    },
    content: {
      heading: "Expertise in contract claims",
      description:
        "Our team has years of experience in contract claims for hydel energy construction projects. We know how to get results.",
    },
  },
  {
    imageFirst: false,
    image: {
      src: "/images/turbines.jpg",
    },
    content: {
      heading: "Efficient resolution",
      description:
        "We work efficiently to resolve contract claims, minimizing delays and maximizing results for our clients.",
    },
  },
  {
    imageFirst: true,
    image: {
      src: "/images/construction.jpg",
    },
    content: {
      heading: "Justice for our clients",
      description:
        "Our focus is on ensuring justice for our clients. We fight for their rights and work towards a fair settlement.",
    },
  },
];

export default function Index() {
  return (
    <>
      <Head>
        <title>MAAS Contract Care</title>
        <meta name="description" content="MAAS Contract Care (Pvt.) Ltd." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Home />
        {Features.map((feature) => (
          <ImageBanner key={feature.content.heading} {...feature} />
        ))}
        <BannerReview />
      </main>
      <Footer />
    </>
  );
}
