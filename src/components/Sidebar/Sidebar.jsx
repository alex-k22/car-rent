import Select from 'react-select';

const Sidebar = ({ handleFilter }) => {
  return (
    <form>
    <div>
      <div>
        <label>
            
        </label>
      </div>
      <div></div>
      <div></div>
      <button type="submit" onClick={handleFilter}>
        Filter
      </button>
    </div>
    </form>
  );
};

export default Sidebar;
