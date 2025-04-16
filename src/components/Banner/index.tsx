import styles from "./Banner.module.css";

type BannerProps = {
  src: string;
};

export default function Banner({ src }: BannerProps) {
  return (
    <div className={styles.banner} style={{ backgroundImage: `url(${src})` }}>
      <h1 className={styles.slogan}>
        Onde a realidade <span>encontra a fantasia!</span>
      </h1>
    </div>
  );
}
