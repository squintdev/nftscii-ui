const Nav = () => {
  return (
    <nav className="w-full flex justify-between items-center">
        <div className="w-1/2">
            <div className="flex justify-between">
                <a className="px-6 py-4 hover:bg-med-gray" href="#">File</a>
                <a className="px-6 py-4 hover:bg-med-gray" href="#">Edit</a>
                <a className="px-6 py-4 hover:bg-med-gray" href="#">Tool</a>
                <a className="px-6 py-4 hover:bg-med-gray" href="#">View</a>
                <a className="px-6 py-4 hover:bg-med-gray" href="#">Art</a>
                <a className="px-6 py-4 hover:bg-med-gray" href="#">Frame</a>
                <a className="px-6 py-4 hover:bg-med-gray" href="#">Layer</a>
                <a className="px-6 py-4 hover:bg-med-gray" href="#">Char/Color</a>
                <a className="px-6 py-4 hover:bg-med-gray" href="#">Help</a>
            </div>
        </div>
        <div className="px-6 py-4 bg-dark-gray text-light-gray">
            Art Mode
        </div>
    </nav>
  );
};

export default Nav;