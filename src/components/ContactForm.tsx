import React, { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function ContactForm({ contactUrl }) {
  const defaultValues = {
    username: "ng",
    email: "ngng@mail.com",
  };

  const formSchema = z.object({
    username: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
  });

  type formInput = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formInput>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  function onSubmit(
    values: formInput,
    event: React.BaseSyntheticEvent<object, any, any> | undefined
  ) {
    const output = {
      ...values,
      key: "en-key",
    };
    console.log(output);

    event?.preventDefault();

    try {
      fetch(contactUrl, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          // 'Content-Type': 'multipart/form-data'
        }),
        body: JSON.stringify(output),
      }).then((res) => {
        res.json();
        console.log("Success:", res);
      });
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit((data, event) => {
          // Todo
          onSubmit(data, event);
        })}
      >
        <label>
          Username:
          <input className="border" type="text" {...register("username")} />
          {errors?.username?.message && <p>{errors.username.message}</p>}
        </label>

        <label>
          Email:
          <input className="border" type="email" {...register("email")} />
          {errors?.email?.message && <p>{errors.email.message}</p>}
        </label>

        <button type="submit" className="mx-4 px-2 bg-gray-600 text-white">
          Submit
        </button>
      </form>
    </>
  );
}
