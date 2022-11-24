import type { NextPage } from "next";
import { useRouter } from "next/router";
import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import ButtonComponent from "../components/ButtonComponent";

const Login: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <HeadComponent />
      <main>
          <ButtonComponent />
      </main>
      <FooterComponent />
    </div>
  );
};

export default Login;
