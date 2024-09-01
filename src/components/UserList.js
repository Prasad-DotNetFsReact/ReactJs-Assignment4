import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:8000/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  };

  useEffect(() => {
    fetchUsers(); // Fetch users when the component loads
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8000/users/${id}`, {
        method: 'DELETE',
      });
      fetchUsers(); // Refresh the list after deletion
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  const handleDetails = (user) => {
    alert(JSON.stringify(user, null, 2));
  };

  return (
    <div className="container">
      <h2 className="mb-4">User List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>
                  <button onClick={() => handleDetails(user)} className="btn btn-info btn-sm me-2">Details</button>
                  <button onClick={() => handleDelete(user.id)} className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;



