import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';


export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <form
        className={`needs-validation p-4 border rounded w-25`}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className="mb-3">
          <label htmlFor="name" className={`form-label`}>
            Username *
          </label>
          <input type="text" className="form-control" id="name" name="name" placeholder="Username *" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className={`form-label`}>
            Email *
          </label>
          <input type="email" className="form-control" id="email" name="email" placeholder="Email *" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className={`form-label`}>
            Password *
          </label>
          <input type="password" className="form-control" id="password" name="password" placeholder="Password *" required />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};
