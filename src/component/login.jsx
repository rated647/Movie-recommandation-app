export default function LoginForm({ toggleForm }) {
  return (
    <div className="container-form">
      <h1>Login</h1>
      <form>
        <div className="input-field">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" required />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit" className="btn-submit">
          Sign In
        </button>
      </form>
      <p>Dont have an account? <button onClick={toggleForm}>Sign up</button></p>
    </div>
  );
}
