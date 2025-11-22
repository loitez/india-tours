import styles from "./ApplicationForm.module.scss";
import { Button, Card, Input, Select, Text } from "../../ui-kit";
import { Header, Wrapper } from "../../components";

export const ApplicationForm = () => {
  const options = [
    { value: "Telegram", label: "Telegram" },
    { value: "Телефон", label: "Телефон" },
  ];

  const handleChange = (value: string) => {
    console.log("Выбрано:", value);
  };

  return (
    <div>
      <Header />
      <Card version="orange-card">
        <Wrapper wrapperType="block" className={styles.applicationForm}>
          <Text
            size="text-h1"
            weight="font-bold"
            layout="text-block"
            align="text-center"
          >
            Запись на занятие
          </Text>
          <form action="" className={styles.applicationForm__form}>
            <Input name="name" placeholder="Имя"></Input>
            <Select
              options={options}
              placeholder="Выберите предпочитаемый вид связи"
              onChange={handleChange}
            />
            <Input name="phone" placeholder="Телефон"></Input>
            <Input name="name" placeholder="Никнейм в telegram"></Input>
            <Button version="secondary-btn">Записаться</Button>
          </form>
        </Wrapper>
      </Card>
    </div>
  );
};
