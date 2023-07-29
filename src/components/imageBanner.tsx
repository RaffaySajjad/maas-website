import styles from "@/styles/ImageBanner.module.css";

export interface IImageBannerProps {
  imageFirst?: boolean;
  image: IImageProps;
  content: IContentProps;
}

interface IContentProps {
  heading: string;
  description: string;
}

interface IImageProps {
  src: string;
}

const _renderImage = (image: IImageProps, first: boolean) => {
  return (
    <div className={first ? styles.first : styles.second}>
      <img className={styles.image} src={image.src} alt="Image" />
    </div>
  );
};

const _renderContent = (content: IContentProps) => {
  return (
    <div className={styles.content}>
      <h1>{content.heading}</h1>
      <p>{content.description}</p>
    </div>
  );
};

const ImageBanner: React.FC<IImageBannerProps> = (props) => {
  const { imageFirst = true, image, content } = props;
  return (
    <section
      className={`${styles.container} ${imageFirst && styles.reverseColumn}`}>
      <div />
      {imageFirst ? _renderImage(image, imageFirst) : _renderContent(content)}
      <div />
      {imageFirst ? _renderContent(content) : _renderImage(image, imageFirst)}
      <div />
    </section>
  );
};

export default ImageBanner;
