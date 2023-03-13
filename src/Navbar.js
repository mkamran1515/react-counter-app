

function Navbar(props){
    return(
    <>
       <div className="navbar-container">
        <h1>{props.siteLogo}</h1>
        <div className="menu-container">
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
                <li><a href="#">Link 4</a></li>
            </ul>
        </div>
        <button className="btn-consultation">Get Free Consultation</button>
      </div>    
    </>
    );
}

export default Navbar;