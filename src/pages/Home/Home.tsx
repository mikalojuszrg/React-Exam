import { Content } from "../../types/content";
import ContentCard from "../../components/ContentCard/ContentCard";
import { UserContext } from "../../contexts/UserContext";
import { useContent } from "../../hooks/content";
import { useContext } from "react";

const Home = () => {
  const { token } = useContext(UserContext);
  const { data } = useContent(token ? token : "");
  const content = data || [];
  console.log(content);
  return (
    <div>
      {content.map(({ id, title, description }: Content) => (
        <ContentCard key={id} title={title} description={description} />
      ))}
    </div>
  );
};

export default Home;
