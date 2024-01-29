import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className="needs-validation p-4 border rounded mx-auto"  onSubmit={handleSubmit} autoComplete="off">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email *</label>
        <input type="email" className="form-control" id="email" name="email" placeholder="Your email" required />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password *</label>
        <input type="password" className="form-control" id="password" name="password" placeholder="Your password" required />
      </div>
      <button type="submit" className="btn btn-primary">Log In</button>
    </form>
  );
};
