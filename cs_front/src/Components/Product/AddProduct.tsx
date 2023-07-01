import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useMutationCreateProduct } from "../../API/queries";
import { ProductsContext } from "../../Context/ProductsContext";

export const AddProduct = () => {
  const { mutate, isSuccess } = useMutationCreateProduct();
  const productCtx = useContext(ProductsContext);
  const LoginSchema = z.object({
    name: z.string(),
    price: z.string(),
    weight: z.string(),
    quantity: z.string(),
  });

  useEffect(() => {
    if (isSuccess) productCtx?.refetchData();
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
    mutate({
      ...dataset,
      price: Number(dataset.price),
      quantity: Number(dataset.quantity),
    });
  };

  return (
    <form
      className="flex flex-col place-content-around gap-[15px] rounded-xl px-11"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col">
        <label className="mr-auto text-base">Dessert Name:</label>
        <input
          className="rounded-sm border border-black p-2 text-xl shadow-lg"
          type="text"
          {...register("name")}
          placeholder="Name"
          required
        ></input>
        {errors.name != null && (
          <p className="text-xs text-red-600">{errors.name.message}</p>
        )}
      </div>
      <div className="flex flex-col">
        <label className="mr-auto text-base">Price in PLN</label>
        <input
          className="rounded-sm border border-black p-2 text-xl shadow-lg"
          type="number"
          {...register("price")}
          placeholder="12"
          required
        ></input>
        {errors.price != null && (
          <p className="text-xs text-red-600">{errors.price.message}</p>
        )}
      </div>
      <div className="flex flex-col">
        <label className="mr-auto text-base">Weight:</label>
        <input
          className="rounded-sm border border-black p-2 text-xl shadow-lg"
          type="text"
          {...register("weight")}
          placeholder="100g"
          required
        ></input>
        {errors.weight != null && (
          <p className="text-xs text-red-600">{errors.weight.message}</p>
        )}
      </div>
      <div className="flex flex-col">
        <label className="mr-auto text-base ">Quantity</label>
        <input
          className="appearance-none rounded-sm border border-black p-2 text-xl shadow-lg"
          type="number"
          placeholder="quantity"
          {...register("quantity")}
          required
        ></input>
        {errors.quantity != null && (
          <p className="text-xs text-red-600">{errors.quantity.message}</p>
        )}
      </div>
      <button
        className="rounded-full bg-blue-600 p-2 text-lg text-white"
        type="submit"
      >
        Add Dessert
      </button>
    </form>
  );
};
