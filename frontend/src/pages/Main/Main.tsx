import styles from "./Main.module.scss";
import {
  Header,
  Banner,
  BenefitsSection,
  Wrapper,
  Feedback,
} from "../../components";
import { Button, Card, Text } from "../../ui-kit";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <>
      <Header />
      <Banner />
      <BenefitsSection />
      <Wrapper wrapperType="block">
        <Card version="green-card" className={styles.main__action_block}>
          <Text size="text-h3" weight="font-bold">
            Выберите курс, который соответствует вашим целям, и откройте для
            себя красоту хинди!
          </Text>
          <Link to="/courses">
            <Button version="primary-btn">Подобрать курс</Button>
          </Link>
        </Card>
      </Wrapper>
      <Wrapper wrapperType="block">
        <Text
          size="text-h1"
          weight="font-bold"
          layout="text-block"
          align="text-center"
        >
          Отзывы
        </Text>
        <Feedback />
      </Wrapper>
    </>
  );
};
