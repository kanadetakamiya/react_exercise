export default function SearchForm({ onChangeValue }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Tìm theo name, username"
        onChange={(e) => onChangeValue(e.target.value)}
      />
    </form>
  );
}
