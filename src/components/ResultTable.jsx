import { useState, useEffect } from "react";
import "../assets/modal.css";

export default function ResultTable({ keyword, user, onAdded }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(keyword.toLowerCase()) ||
      u.username.toLowerCase().includes(keyword.toLowerCase())
  );

  useEffect(() => {
    if (user) {
      setUsers((prev) => [...prev, { ...user, id: prev.length + 1 }]);
      onAdded();
    }
  }, [user]);

  function editUser(user) {
    setEditing({ ...user, address: { ...user.address } });
  }

  const handleEditChange = (e) => {
    const { id, value } = e.target;
    if (["street", "suite", "city"].includes(id)) {
      setEditing({ ...editing, address: { ...editing.address, [id]: value } });
    } else {
      setEditing({ ...editing, [id]: value });
    }
  };

  function saveUser() {
    setUsers((prev) => prev.map((u) => (u.id === editing.id ? editing : u)));
    setEditing(null);
  }

  function removeUser(id) {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  }

  return (
    !loading && (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>City</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((u) => (
            <>
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.username}</td>
                <td>{u.email}</td>
                <td>{u.address.city}</td>
                <td>
                  <button onClick={() => editUser(u)}>Sửa</button>
                  <button
                    className="btn-delete"
                    onClick={() => removeUser(u.id)}>
                    Xóa
                  </button>
                </td>
              </tr>
              {editing && editing.id === u.id && (
                <>
                  <tr>
                    <td colSpan={2}></td>
                    <td>
                      <label htmlFor="name">Name: </label>
                    </td>
                    <td>
                      <input
                        className="modal-content"
                        type="text"
                        id="name"
                        value={editing.name}
                        onChange={handleEditChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}></td>
                    <td>
                      <label htmlFor="username">Username: </label>
                    </td>
                    <td>
                      <input
                        className="modal-content"
                        type="text"
                        id="username"
                        value={editing.username}
                        onChange={handleEditChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}></td>
                    <td>
                      <label htmlFor="email">Email: </label>
                    </td>
                    <td>
                      <input
                        className="modal-content"
                        type="text"
                        id="email"
                        value={editing.email}
                        onChange={handleEditChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}></td>
                    <td>
                      <label htmlFor="street">Street: </label>
                    </td>
                    <td>
                      <input
                        className="modal-content"
                        type="text"
                        id="street"
                        value={editing.address.street}
                        onChange={handleEditChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}></td>
                    <td>
                      <label htmlFor="suite">Suite: </label>
                    </td>
                    <td>
                      <input
                        className="modal-content"
                        type="text"
                        id="suite"
                        value={editing.address.suite}
                        onChange={handleEditChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}></td>
                    <td>
                      <label htmlFor="city">City: </label>
                    </td>
                    <td>
                      <input
                        className="modal-content"
                        type="text"
                        id="city"
                        value={editing.address.city}
                        onChange={handleEditChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}></td>
                    <td>
                      <label htmlFor="phone">Phone: </label>
                    </td>
                    <td>
                      <input
                        className="modal-content"
                        type="text"
                        id="phone"
                        value={editing.phone}
                        onChange={handleEditChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}></td>
                    <td>
                      <label htmlFor="website">Website: </label>
                    </td>
                    <td>
                      <input
                        className="modal-content"
                        type="text"
                        id="website"
                        value={editing.website}
                        onChange={handleEditChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={7}>
                      <button style={{ margin: 10 }} onClick={saveUser}>
                        Lưu
                      </button>
                    </td>
                  </tr>
                </>
              )}
            </>
          ))}
        </tbody>
      </table>
    )
  );
}
