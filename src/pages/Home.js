import css from './Home.module.css'



export default function Home() {
  return (<>
  <div>
     <div className={css.wave}></div>
     <div className={css.wave}></div>
     <div className={css.wave}></div>
  </div>
    <div className={css.container}>
      <h1 className={css.title}>
        Welcome to phonebook  
      </h1>
      <p className={css.homeText}>
        In this app, you can store your phone contacts in a format that suits you best. You also have the option to edit, delete, and find contacts by name. Enjoy using it.
      </p>
    </div>  
  </>    
  );
}
