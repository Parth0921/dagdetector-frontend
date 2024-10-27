// Input wrapper for nodes

export const NodeInputText = ({ label, value, handleChange }) => {
  return (
    <div className="my-2 border p-1 rounded-xl">
      <label className="text-[#7D7D7D]">{label}</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#36C2CE] focus:ring-opacity-50"
      />
    </div>
  );
};
