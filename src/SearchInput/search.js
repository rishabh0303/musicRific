import './search.css';
import { searchIconGrey } from "../assets";
const SearchInput=props=>{
    return(
        <div className="search-input-container flex">
            <img src={searchIconGrey} alt="search icon"/>
            <input placeholder="Find your music here.."/>
        </div>
    );

}
export default SearchInput;