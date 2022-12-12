// Author: Simon Peter Hruz (xhruzs00)
import { FC, useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar";
import { NewsBlock } from "../../components/NewsBlock";
import styles from "./HomePage.module.css";
import classnames from "classnames";
import { HomeSearch } from "../../components/HomeSearch/HomeSearch";

type ArticlesType = {
  id: string;
  label: string;
  picture: string;
  descShort: string;
};

export const HomePage: FC = () => {
  const [articles, setArticles] = useState<ArticlesType[]>();

  useEffect(() => {
    fetch("/api/connection/articles", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return (
    <div>
      <NavigationBar />

      <div className={styles["white-pannel"]}>
        <div className={styles["photo"]}>
          <div className={styles["search"]}>
            <HomeSearch />
          </div>
        </div>
        <h1>Novinky</h1>
      </div>

      <div className={classnames(styles["main-section"], styles["news-block"])}>
        {articles &&
          articles.map((c) => (
            <NewsBlock
              id={c.id}
              label={c.label}
              url={c.picture}
              desc={c.descShort}
            />
          ))}
      </div>

      <Footer />
    </div>
  );
};
