import { useForm } from "react-hook-form";
import axios from "axios";
import "../App.css";
import React from 'react'

function Autherization() {
    const form = useForm();
    const { register, handleSubmit, formState: {errors} } = form;
    
    const onSubmit = async (data) => {
    const res = await axios.post("http://localhost:5000/api/signin", 
    {
      data
    });
    console.log(res);
  };
  return (
    <div className="container">
        <h2>Sign In</h2>
        <form id="signin-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            {...register("username", { required: true })}
            aria-invalid={errors.username ? "true" : "false"}
          />
          {errors.username?.type === "required" && (
            <p role="alert">First name is required</p>
          )}

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password?.type === "required" && (
            <p role="alert">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p role="alert">Password must be at least 8 characters long</p>
          )}
          {errors.password?.type === "maxLength" && (
            <p role="alert">Password cannot exceed 20 characters</p>
          )}

          <button type="submit">Sign In</button>
        </form>
      </div>
  )
}

export default Autherization