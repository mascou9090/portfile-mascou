import * as C from "./style";
export const Footer = () => {
  const time = new Date().getMonth() + 1;

  return (
    <C.Container>
      <div>
        <span>© {time}/2022 Portfólio</span>
      </div>
      <div>
        <h2>M</h2>
      </div>
    </C.Container>
  );
};
