import { useHistory } from "react-router-dom";

const HouseFilter = ({ allHouses }) => {
  //const history;

  const countries = [];
  
  countries.unshift(null);

  const onSearchChange = (e) => {

  };

  return (
    <div className="row mt-3">
      <div className="offset-md-2 col-md-4">
        Look for your dream house in country:
      </div>
      <div className="col-md-4 mb-3">
        <select className="form-select" >

        </select>
      </div>
    </div>
  );
};

export default HouseFilter;
