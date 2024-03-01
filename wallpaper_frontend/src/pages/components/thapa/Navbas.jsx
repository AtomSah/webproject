import "./wallpaper.css"
import PropTypes from "prop-types";

const Navbas = ({ filterItem, genreList }) => {
    return (
        <>
            <nav className="navbar flex justify-center bg-gradient-to-r from-teal-100 to-purple-300 ">
                <div className="btn-group ">
                    {genreList.map((curElem) => {
                        return (
                            <button key={curElem}
                                className="btn-group__item "
                                onClick={() => filterItem(curElem)}>
                                {curElem}
                            </button>
                        );
                    })}
                </div>
            </nav>
        </>
    );
};
Navbas.propTypes = {
    filterItem: PropTypes.func.isRequired,
    genreList: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Navbas;
