import { Grid } from "@mui/material";
import { ResponsiveAppBar } from "../Components/Navbar";
import { useContext, useEffect, useState } from "react";
import { useMutationLogin } from "../API/queries";
import { AuthContext } from "../Context/AuthContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");

  const { isSuccess, data, mutate } = useMutationLogin();

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (data?.data && isSuccess) authCtx?.login(data.data);
  }, [data, isSuccess]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email !== "" && pswd !== "") {
      mutate({ email: email, pswd: pswd });
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen p-2">
      <div className="p-2">
        <ResponsiveAppBar />
      </div>

      <Grid container spacing={2} gap={1} className="p-2 pl-6 p pt-4">
        <Grid
          item
          xs={12}
          className="bg-white rounded-sm flex align-middle justify-center p-10"
        >
          <div className="my-auto flex flex-col rounded-md bg-white p-[40px] text-center text-[30px] shadow-xl">
            <form
              className="flex flex-col place-content-around gap-[25px] rounded-xl px-11"
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onSubmit={handleSubmit}
            >
              <h2 className="text-left">Sign in</h2>
              <div className="flex flex-col">
                <label className="mr-auto text-base">Login:</label>
                <input
                  className="rounded-sm border border-black p-2 text-xl shadow-lg"
                  id="username"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="email"
                  required
                ></input>
              </div>
              <div className="flex flex-col">
                <label className="mr-auto text-base ">Password: </label>
                <input
                  className="appearance-none rounded-sm border border-black p-2 text-xl shadow-lg"
                  id="password"
                  type="password"
                  onChange={(e) => setPswd(e.target.value)}
                  value={pswd}
                  placeholder="Password"
                  required
                ></input>
              </div>
              <button
                className="rounded-full bg-blue-600 p-2 text-lg text-white"
                type="submit"
              >
                Sign In
              </button>
              <div className="flex gap-2">
                <div className="my-auto h-0 w-full border border-slate-100 drop-shadow-sm"></div>
                <span className="text-xs text-slate-400">or</span>
                <div className="my-auto h-0 w-full border border-slate-100 drop-shadow-sm"></div>
              </div>
            </form>
            <div className="mt-4 text-xs font-semibold text-blue-600">
              <a href="/register">Sign Up</a>
            </div>
          </div>
        </Grid>
      </Grid>

      <footer className="bg-gray-100 py-4">
        <p className="text-center">
          &copy; {new Date().getFullYear()} My Quick Website. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};
