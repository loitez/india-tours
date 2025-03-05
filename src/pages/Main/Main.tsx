import {Header, Banner, Wrapper} from "../../components";
import { Text } from "../../ui-kit";

export const Main = () => {
  return (
    <>
      <Header />
      <Banner/>
      <Wrapper wrapperType="block">
          <Text size="text-h1" weight="font-bold">Что вы знаете об Индии?</Text>
      </Wrapper>
    </>
  );
};
