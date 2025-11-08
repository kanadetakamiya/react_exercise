import "../assets/modal.css";
import "../assets/header.css";

export default function SearchForm({ onChangeValue }) {
  return (
    <form className="header">
      <input
        className="modal-content"
        type="text"
        placeholder="Tìm theo name, username"
        onChange={(e) => onChangeValue(e.target.value)}
      />
    </form>
  );
}
