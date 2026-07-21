function Button({ text }) {
  return (
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
      {text}
    </button>
  );
}

export default Button;