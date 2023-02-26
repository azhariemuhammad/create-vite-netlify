import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>New Page</title>
      </Helmet>
      <p>Hello there!</p>
    </>
  );
};

export default Home;
