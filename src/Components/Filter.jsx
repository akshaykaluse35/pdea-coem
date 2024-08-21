const Filter = ({ filter, setFilter }) => {
    return (
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search notifications..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg w-full"
        />
      </div>
    );
  };
  
  export default Filter;
  