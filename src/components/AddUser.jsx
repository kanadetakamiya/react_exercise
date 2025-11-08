import { useState } from "react";
import "../assets/modal.css";
import "../assets/header.css";

export default function AddUser({ onAdd }) {
  const [adding, setAdding] = useState(false);
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
    },
    phone: "",
    website: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (["street", "suite", "city"].includes(id)) {
      setUser({ ...user, address: { ...user.address, [id]: value } });
    } else {
      setUser({ ...user, [id]: value });
    }
  };

  const handleAdd = () => {
    if (user.name === "" || user.username === "") {
      alert("Vui lòng nhập name và username!");
      return;
    }
    onAdd(user);
    setUser({
      name: "",
      username: "",
      email: "",
      address: {
        street: "",
        suite: "",
        city: "",
      },
      phone: "",
      website: "",
    });
    setAdding(false);
  };

  return (
    <>
      <div className="header">
        <button onClick={() => setAdding(true)}>Thêm user</button>
      </div>
      {adding && (
        <div style={{ justifyItems: "center" }}>
          <h4>Thêm người dùng</h4>
          <table>
            <tr>
              <td>
                <label htmlFor="name">Name: </label>
              </td>
              <td>
                <input
                  className="modal-content"
                  id="name"
                  type="text"
                  value={user.name}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="username">Username: </label>
              </td>
              <td>
                <input
                  className="modal-content"
                  id="username"
                  type="text"
                  value={user.username}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email">Email: </label>
              </td>
              <td>
                <input
                  className="modal-content"
                  id="email"
                  type="text"
                  value={user.email}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="street">Street: </label>
              </td>
              <td>
                <input
                  className="modal-content"
                  id="street"
                  type="text"
                  value={user.address.street}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="suite">Suite: </label>
              </td>
              <td>
                <input
                  className="modal-content"
                  id="suite"
                  type="text"
                  value={user.address.suite}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="city">City: </label>
              </td>
              <td>
                <input
                  className="modal-content"
                  id="city"
                  type="text"
                  value={user.address.city}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="phone">Phone: </label>
              </td>
              <td>
                <input
                  className="modal-content"
                  id="phone"
                  type="text"
                  value={user.phone}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="website">Website: </label>
              </td>
              <td>
                <input
                  className="modal-content"
                  id="website"
                  type="text"
                  value={user.website}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </table>
          <button style={{ margin: "10px" }} onClick={handleAdd}>
            Thêm
          </button>
        </div>
      )}
    </>
  );
}
