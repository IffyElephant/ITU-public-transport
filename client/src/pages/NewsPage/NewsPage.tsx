import { FC } from "react";
import { Footer } from "../../components/Footer";
import { NavigationBar } from "../../components/NavigationBar";
import styles from "./NewsPage.module.css";

export const NewsPage: FC = () => {
  return (
    <div className={styles["container"]}>
      <NavigationBar />

      <div className={styles["main-section"]}>
        <nav className={styles["section-nav"]}>
          <a href="/">Domov</a>
          <p>{">"}</p>
          <a href="">Článek</a>
        </nav>

        <div className={styles["label"]}>Nadpis článku</div>

        <div className={styles["text"]}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam augue
            magna, consequat nec metus lobortis, rutrum venenatis tortor. Morbi
            mollis luctus purus sed tincidunt. Phasellus in ipsum et purus
            accumsan molestie. Aenean quam orci, porttitor nec mi a, ornare
            suscipit nibh. Integer convallis molestie justo, id elementum quam
            congue eget. Vivamus ac rhoncus magna. Phasellus lobortis finibus
            congue. Donec est leo, convallis ut ante sed, sagittis luctus leo.
            Maecenas egestas venenatis ligula aliquet lobortis. Ut a ante neque.
            Morbi tincidunt erat leo. In lobortis, nulla eget aliquam ultricies,
            neque metus vulputate urna, ac pulvinar urna odio ut velit.
          </p>
          <p>
            Pellentesque et facilisis eros. Sed finibus eu nisl eu posuere.
            Proin imperdiet luctus ante tincidunt varius. Pellentesque pharetra
            nulla dui, a tempor sem lobortis id. Integer molestie, est et
            ullamcorper blandit, nunc velit hendrerit nunc, eu ultricies elit
            mauris ut metus. Cras in nibh tristique lorem luctus commodo. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Mauris sagittis convallis dapibus. Praesent
            malesuada mattis nunc, sed posuere arcu. Nam et lorem vel est
            egestas imperdiet sed eu tellus. Morbi vitae mauris velit. Etiam
            mollis sodales leo eu rhoncus. Aliquam a mauris pellentesque nibh
            consequat faucibus. Sed nec interdum purus. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Ut a massa tempor, vulputate ipsum ut, tempus dui. Phasellus massa
            massa, fermentum quis nulla consectetur, eleifend cursus neque.
          </p>
          <p>
            Nulla vel enim nec leo mattis efficitur. Vestibulum tempor pretium
            lacinia. Aliquam erat volutpat. Donec mattis massa at venenatis
            ultricies. Aliquam consequat nulla nec justo dictum ornare. In
            molestie urna et imperdiet ullamcorper. In egestas nunc aliquet,
            facilisis nisi vitae, semper lacus. Mauris eget suscipit odio.
            Quisque malesuada metus elit, nec hendrerit mi finibus a.
            Suspendisse non nisl a magna feugiat pharetra. Nunc dapibus metus
            sit amet leo dignissim, et faucibus urna elementum.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};
