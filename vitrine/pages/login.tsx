import type { NextPage } from "next";
import { useRouter } from "next/router";
import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import { InputTextComponent, ButtonComponent } from "my-lib-ui";


const Login: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <HeadComponent />
      <main>
        <a href="..">retour</a>
        <div>
          <h2>CONNEXION</h2>
          <InputTextComponent label="Identifiant" placeholder="identifiant" />
          <InputTextComponent label="Mot de passe" placeholder="mot de passe" type="password" />
          <ButtonComponent label="Connexion" />
        </div>
      </main>
      <FooterComponent />
    </div>
  );
};

export default Login;
