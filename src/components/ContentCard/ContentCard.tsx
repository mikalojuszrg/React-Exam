import styles from "./ContentCard.module.scss";

type ContentCardProps = {
  title: string;
  description: string;
};

const ContentCard = ({ title, description }: ContentCardProps) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ContentCard;
