export const meta = () => {
  return [{ title: "ALTERUM" }];
};
import Presentation from "~/components/Presentation";
import Products from "~/components/Products";
import { createUserSession, getUserFromSession } from "~/data/sessions";
export default function Index() {
  return (
    <>
      <Presentation />
      <Products />
    </>
  );
}

export async function loader({ request }) {
  return await getUserFromSession(request);
}
