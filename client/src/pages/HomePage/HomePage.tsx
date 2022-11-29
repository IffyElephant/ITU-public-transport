import { FC } from "react";
import { Counter } from "../../components/Counter";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar";
import styles from "./HomePage.module.css";

export const HomePage: FC = () => {
  return (
    <div>
      <NavigationBar />
      <Counter />
    </div>
  );
};
