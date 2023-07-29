import { FormEvent } from "react";

export const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const formData = new FormData(event.target as HTMLFormElement);
  const data = Object.fromEntries(formData.entries());
  console.log(data);

  return null;
};
