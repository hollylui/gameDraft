import { useRouter } from "next/router";

import volcanoBg from "@/assets/images/volcano/volcano_bg.jpg";
import styles from "./styles.module.scss";
import GameLanding from "components/GameLanding";

export default function Volcano() {
  const router = useRouter();
  const startHandler = () => {
    router.push("/volcano/pages");
  };

  return (
    <GameLanding
      gameName={"volcano animal rescue"}
      styles={styles}
      BgImage={volcanoBg}
      startHandler={startHandler}
    />
  );
}
