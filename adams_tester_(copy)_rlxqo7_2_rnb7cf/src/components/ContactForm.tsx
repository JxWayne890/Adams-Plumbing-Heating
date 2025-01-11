import { useForm } from "react-hook-form";
    import { Input } from "./ui/input";
    import { Textarea } from "./ui/textarea";
    import { Button } from "./ui/button";
    import React from "react";

    const ContactForm = () => {
      const { register, handleSubmit, reset, formState: { errors } } = useForm();

      const onSubmit = (data: any) => {
        console.log(data);
        reset();
      };

      return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <Input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className="mt-1"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="mt-1"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <Input
              type="tel"
              id="phone"
              {...register("phone", { required: "Phone number is required" })}
              className="mt-1"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone?.message}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <Textarea
              id="message"
              rows={4}
              {...register("message", { required: "Message is required" })}
              className="mt-1"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message?.message}</p>}
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      );
    };

    export default ContactForm;
