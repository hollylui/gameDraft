import { useContext } from "react";

import styles from "./styles.module.scss";
import messageImg from "@/assets/images/forAllGames/messageBubble.png";
import volcanoImg from "@/assets/images/volcano/volcano_icon.png";
import { volcanoContent } from "@/assets/data/volcanoContent";
import { userContext } from "context/PageIndexProvider";
import BackAndNextBtn from "components/BackAndNextBtn";
import GameContent from "components/GameContent";

export default function PageOne() {
  const [pageIndex, setPageIndex] = useContext(userContext);

  //   next btn page handler
  const nextBtnHandler = (nextPage) => {
    setPageIndex(pageIndex + 1);
  };

  // back btn page handler
  const backBtnHandler = (backPage) => {
    setPageIndex(pageIndex - 1);
  };

  const contentProps = {
    styles,
    messageImg,
    pageIndex,
    volcanoImg,
    volcanoContent,
  };

  const btnProps = {
    backBtnHandler,
    nextBtnHandler,
    styles,
    volcanoContent,
    pageIndex,
  };

  return (
    <div className={styles.container}>
      <GameContent {...contentProps} />
      {/* buttons */}
      <BackAndNextBtn {...btnProps} />
    </div>
  );
}
