const Content = ({ filter }) => {
    const data = {
      All: "Showing all content",
      Nature: "Displaying nature-related images",
      Technology: "Displaying technology-related articles",
      People: "Displaying people-focused content",
    };
  
    return (
      <div className="flex justify-center items-center mt-10">
        <h2 className="text-white text-2xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-lg">
          {data[filter]}
        </h2>
      </div>
    );
  };
  
  export default Content;
  