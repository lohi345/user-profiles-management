import React, { useState } from "react";

function AddUser({ users, setUsers }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name" && value && !/^[A-Za-z\s]*$/.test(value)) return;
    if (name === "phone" && value && !/^\d*$/.test(value)) return;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: Date.now(), ...form };
    setUsers([...users, newUser]);
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    alert(`User "${form.name}" added successfully!`);
    setForm({ name: "", email: "", phone: "" });
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Add New User</h3>
      <div className="card shadow-sm p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" name="name" className="form-control" placeholder="Enter name"
              value={form.name} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" placeholder="Enter email"
              value={form.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input type="text" name="phone" className="form-control" placeholder="Enter phone"
              value={form.phone} onChange={handleChange} required />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary px-4">Save User</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUser;

