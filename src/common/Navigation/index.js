import { WrapperMenu, List, MenuLink } from "./styled";

const Navigation = () => (
  <WrapperMenu>
    <List>
      <MenuLink to="/zadania">Zadania</MenuLink>
    </List>
    <List>
      <MenuLink to="/autor">Autor</MenuLink>
    </List>
  </WrapperMenu>
);

export default Navigation;
