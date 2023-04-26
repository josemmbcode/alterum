export const meta = () => {
  return [{ title: "ALTERUM" }];
};
import Presentation from "~/components/Presentation";
import Products from "~/components/Products";
export default function Index() {
  return (
    <>
      <Presentation />
      <Products />
    </>
  );
}
