import { searchIcon } from "../assets";

const Header=props=>{
    return(
        <header className="header flex justify-sb">
         <div className="logo">
            <img src="https://www.brandbucket.com/sites/default/files/logo_uploads/247005/musicrific_0.png" alt="music"/>

         </div>
         <div>
            <img src={searchIcon} alt="search"/>
         </div>
        </header>
    )
}
export default Header;