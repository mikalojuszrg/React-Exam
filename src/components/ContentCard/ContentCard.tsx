import { Content } from "../../types/content";

type ContentCardProps = {
  title: string;
  description: string;
};

const ContentCard = ({ title, description }: ContentCardProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ContentCard;
