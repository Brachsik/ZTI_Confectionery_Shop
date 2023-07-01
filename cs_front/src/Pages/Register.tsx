import { Grid } from "@mui/material";
import { ResponsiveAppBar } from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useMutationRegister } from "../API/queries";
import { useEffect } from "react";

export const Register = () => {
  const navigate = useNavigate();

  const { isSuccess, mutate } = useMutationRegister();

  const LoginSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email("Email aint no correct"),
    pswd: z.string().min(5, "Password should include at leat five characters"),
  });

  useEffect(() => {
    if (isSuccess) navigate("/login");
  }, [isSuccess]);

  type FormSchemaType = z.infer<typeof LoginSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<FormSchemaType> = (dataset) => {
    mutate(dataset);
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
              className="flex flex-col place-content-around gap-[15px] rounded-xl px-11"
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onSubmit={handleSubmit(onSubmit)}
            >
              <h2 className="text-left">Sign Up</h2>
              <div className="flex flex-col">
                <label className="mr-auto text-base">First Name:</label>
                <input
                  className="rounded-sm border border-black p-2 text-xl shadow-lg"
                  type="text"
                  {...register("firstName")}
                  placeholder="First Name"
                  required
                ></input>
                {errors.firstName != null && (
                  <p className="text-xs text-red-600">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label className="mr-auto text-base">Last Name:</label>
                <input
                  className="rounded-sm border border-black p-2 text-xl shadow-lg"
                  type="text"
                  {...register("lastName")}
                  placeholder="Last Name"
                  required
                ></input>
                {errors.lastName != null && (
                  <p className="text-xs text-red-600">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label className="mr-auto text-base">Email:</label>
                <input
                  className="rounded-sm border border-black p-2 text-xl shadow-lg"
                  type="text"
                  {...register("email")}
                  placeholder="Email"
                  required
                ></input>
                {errors.email != null && (
                  <p className="text-xs text-red-600">{errors.email.message}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label className="mr-auto text-base ">Password: </label>
                <input
                  className="appearance-none rounded-sm border border-black p-2 text-xl shadow-lg"
                  type="password"
                  placeholder="Password"
                  {...register("pswd")}
                  required
                ></input>
                {errors.pswd != null && (
                  <p className="text-xs text-red-600">{errors.pswd.message}</p>
                )}
              </div>
              <button
                className="rounded-full bg-blue-600 p-2 text-lg text-white"
                type="submit"
              >
                Sign Up
              </button>
              <div className="flex gap-2">
                <div className="my-auto h-0 w-full border border-slate-100 drop-shadow-sm"></div>
                <span className="text-xs text-slate-400">or</span>
                <div className="my-auto h-0 w-full border border-slate-100 drop-shadow-sm"></div>
              </div>
            </form>
            <div className="mt-4 text-xs font-semibold text-blue-600">
              <a href="/login">Sign In</a>
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
