import "./Backdrop.css";

const Backdrop = ({ toggleShow, click }) => {
    return toggleShow && <div className="backdrop" onClick={click}></div>;
};

export default Backdrop;
