import React from "react";
import { Link } from "react-router-dom";

function UserList({ users }) {
  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">User List</h3>
      <div className="card shadow-sm p-3">
        <table className="table table-striped table-hover align-middle mb-0">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? users.map((u, i) => (
              <tr key={u.id}>
                <td>{i + 1}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.phone}</td>
                <td className="text-center">
                  <Link to={`/profile/${u.id}`} className="btn btn-info btn-sm text-white">View Profile</Link>
                </td>
              </tr>
            )) : (
              <tr><td colSpan="5" className="text-center">No users found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
