import { FC } from "react";
import { Counter } from "../../components/Counter";
import { Footer } from "../../components/Footer";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar";
import { NewsBlock } from "../../components/NewsBlock";
import styles from "./HomePage.module.css";

export const HomePage: FC = () => {
  return (
    <div>
      <NavigationBar />

      <div className={styles["white-pannel"]}>
        <img
          className={styles["photo"]}
          src="https://www.amazingczechia.com/wp-content/uploads/2017/08/brno-moravia-04-panorama.jpg"
          alt="Brno"
        />
        <h1>Novinky</h1>
      </div>

      <div className={styles["news-block"]}>
        <NewsBlock
          url="https://pipniajed.cz/img/galerie/info2.jpg"
          label="Pípni a jeď!"
          desc="Vše co na cestu potřebujete je platobní karta! kartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakarta"
        />
        <NewsBlock
          url="https://pipniajed.cz/img/galerie/info2.jpg"
          label="Pípni a jeď!"
          desc="Vše co na cestu potřebujete je platobní karta! kartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakarta"
        />
        <NewsBlock
          url="https://pipniajed.cz/img/galerie/info2.jpg"
          label="Pípni a jeď!"
          desc="Vše co na cestu potřebujete je platobní karta! kartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakarta"
        />
        <NewsBlock
          url="https://pipniajed.cz/img/galerie/info2.jpg"
          label="Pípni a jeď!"
          desc="Vše co na cestu potřebujete je platobní karta! kartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakartakarta"
        />
      </div>

      <Footer />
    </div>
  );
};
