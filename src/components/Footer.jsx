const Footer = () => {
  return (
    <footer className="flex-none">
        <div className="flex justify-between items-center">
            <div className="flex justify-between items-center">
                <span className="p-2">ch: <span className="border-solid border-dark-purple">H</span></span>
                <span className="p-2 bg-light-blue">fg</span>
                <span className="p-2 bg-med-blue">bg</span>
                <span className="">xform: <span className="py-2 bg-dark-gray text-light-gray">Normal</span></span>
                <span className="p-2">tool: Paint</span>
            </div>
            <div>
                <span className="p-2">frame: 1/1</span>
                <span className="p-2">layer: 1/1</span>
                <span className="p-2">tile: -73, 28</span>
                <span className="p-2">125.6%</span>
                <span className="p-2">new.nsci</span>
            </div>
        </div>
    </footer>
  );
};

export default Footer;