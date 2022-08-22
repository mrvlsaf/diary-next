const SearchBar = () => {

    return (
        <div className="items-center w-100" >
            <div className="relative w-100">
                <input
                    type="text"
                    className="block p-2 pl-10 w-100 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:pl-3"
                    placeholder="Search Here..."
                />
            </div>
        </div>
    );
}

export default SearchBar