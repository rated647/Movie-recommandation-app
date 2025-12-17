import { UserPen } from "lucide-react";

export default function SignUp({ toggleForm }) {
  return (
    <div className="p-5">
      <div className=" size-12 flex justify-center items-center rounded-2xl mt-10 mb-5 p-1 overflow-hidden mx-auto  bg-blue-500">
        <UserPen className="size-[90%] text-white " />
      </div>
      <h1 className=" text-2xl text-center  mb-10 ">Sign Up</h1>
      <form className="">
        <div className="input-field">
          <label htmlFor="username" className="text-zinc-500 block mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="border border-zinc-400 w-full h-10 rounded outline-0 px-2 mb-3"
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="email" className="text-zinc-500 block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border border-zinc-400 w-full h-10 rounded outline-0 px-2 mb-3"
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="password" className="text-zinc-500 block mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border border-zinc-400 w-full h-10 rounded outline-0 px-2 mb-3"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white w-full h-10 rounded mt-4 mb-3.5"
        >
          Sign Up
        </button>
      </form>
      <p className="text-center text-sm font-light">
        Already have an account? <button onClick={toggleForm}>Sign in </button>
      </p>
    </div>
  );
}
