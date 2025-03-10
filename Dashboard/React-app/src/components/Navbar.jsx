const Navbar = () => {
    return (
    <nav className="bg-black bg-opacity-50 text-white py-4 px-6 flex justify-between">
    <h1>Dashboard for analysis result</h1>
    <ul>
        <li className="cursor-pointer hover:text-gray-300">Home</li>
        <li className="cursor-pointer hover:text-gray-300">About</li>
        <li className="cursor-pointer hover:text-gray-300">Contact</li>
    </ul>
    </nav>
    );
};

export default Navbar;
