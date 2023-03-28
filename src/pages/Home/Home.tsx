import { Content } from "../../types/content";
import ContentCard from "../../components/ContentCard/ContentCard";
import Loader from "../../components/Loader/Loader";
import { UserContext } from "../../contexts/UserContext";
import { useContent } from "../../hooks/content";
import { useContext } from "react";

const Home = () => {
  const { token } = useContext(UserContext);
  const { data, isLoading } = useContent(token ? token : "");

  if (isLoading) {
    return <Loader />;
  }

  if (!data || data.length === 0) {
    return <div>No content posted.</div>;
  }

  return (
    <div>
      {data.map(({ id, title, description }: Content) => (
        <ContentCard key={id} title={title} description={description} />
      ))}
    </div>
  );
};

export default Home;
