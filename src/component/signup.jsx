export default function SignUp({ toggleForm }) {
  return (
    <div className="container-form">
      <h1 className="bg-blue-500 text-2xl ">Sign Up</h1>
      <form>
        <div className="input-field">
          <label htmlFor="user-sign">Username</label>
          <input type="text" id="user-sign" required />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="input-field">
          <label htmlFor="passWord">Password</label>
          <input type="password" id="passWord" required />
        </div>
        <button type="submit" className="btn-submit">
          Sign Up
        </button>
      </form>
      <p>
        Already have an account? <button onClick={toggleForm}>Sign in </button>
      </p>
    </div>
  );
}
