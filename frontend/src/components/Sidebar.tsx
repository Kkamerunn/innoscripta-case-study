import Searcher from "./Searcher";

const Sidebar = () => {
  return (
    <div className="w-4/12 py-5 pl-8 pr-5">
      <Searcher />
      <div className="w-full pt-5 mt-5">
        <p className="underline text-xl">Categories</p>
      </div>
    </div>
  );
};

export default Sidebar;
