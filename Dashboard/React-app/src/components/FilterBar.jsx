import "./filter.css"
const FilterBar = ({ setFilter }) => {
    const filters = ["All", "Nature", "Technology", "People"];
  
    return (
      <div>
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className="bg-white bg-opacity-50 text-black px-4 py-2 rounded-lg hover:bg-opacity-75"
          >
            {item}
          </button>
        ))}
      </div>
    );
  };
  
  export default FilterBar;
  


