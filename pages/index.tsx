import { ChangeEvent, FormEvent, useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    alert(form.email + " " + form.password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
