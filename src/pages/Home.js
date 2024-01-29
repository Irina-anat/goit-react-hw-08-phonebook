import css from './Home.module.css';
import 'animate.css';



export default function Home() {
  return (<>
  <div>
     <div className={css.wave}></div>
     <div className={css.wave}></div>
     <div className={css.wave}></div>
  </div>
    <div className={css.container}>
      <h1 className={`animate__animated animate__slideInLeft animate__fast ${css.title}`}>
        Welcome to phonebook  
      </h1>
      <p className={`animate__animated animate__slideInLeft ${ css.homeText }`}>
        In this app, you can store your phone contacts in a format that suits you best. You also have the option to edit, delete, and find contacts by name. Enjoy using it.
      </p>
    </div>  
  </>    
  );
}
