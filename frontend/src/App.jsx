import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  const API = "http://localhost:5000/api/items"; // Backend URL

  // Fetch items from Backend
  const fetchItems = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API);
      setItems(res.data);
    } catch (err) {
      console.error("Error fetching items:", err);
      alert("Failed to fetch items. Check backend.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Handle form submit (Add or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return alert("Fill both fields");

    try {
      if (editingId) {
        await axios.put(`${API}/${editingId}`, form);
      } else {
        await axios.post(API, form);
      }
      setForm({ name: "", email: "" });
      setEditingId(null);
      fetchItems();
    } catch (err) {
      console.error("Error saving item:", err);
      alert("Failed to save item. Check backend.");
    }
  };

  // Edit an existing item
  const handleEdit = (item) => {
    setForm({ name: item.name, email: item.email });
    setEditingId(item._id);
  };

  // Delete an item
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchItems();
    } catch (err) {
      console.error("Error deleting item:", err);
      alert("Failed to delete item. Check backend.");
    }
  };

  return (
    <div style={{ margin: "50px", fontFamily: "Arial, sans-serif" }}>
      <h1>Succesship CRUD App 🚀</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button type="submit" style={{ padding: "5px 10px" }}>
          {editingId ? "Update" : "Add"}
        </button>
      </form>

      {loading ? (
        <p>Loading items...</p>
      ) : items.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {items.map((item) => (
            <li
              key={item._id}
              style={{
                marginBottom: "10px",
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <strong>{item.name}</strong> ({item.email}){" "}
              <button
                onClick={() => handleEdit(item)}
                style={{ marginLeft: "10px" }}
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => handleDelete(item._id)}
                style={{ marginLeft: "5px" }}
              >
                🗑️ Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
