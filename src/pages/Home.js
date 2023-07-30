import { Circle } from "components/Circle/Circle";
import css from './Home.module.css'


export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Welcome phonebook  
      </h1>
      <Circle/>
    </div>
  );
}
