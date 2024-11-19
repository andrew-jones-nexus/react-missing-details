import styles from "./header-bar.module.css";

interface IHeaderBarProps {
 title: string;
 image?: string;
}

const HeaderBar = ({ title, image }: IHeaderBarProps) => {
 return (
  <div className={styles.header}>
   <h1 className={styles.title}>{title}</h1>
   <img src={image} alt="Placeholder" />
  </div>
 );
};

export default HeaderBar;
