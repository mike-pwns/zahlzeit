// import { useNavigate } from "react-router-dom";
function ZiffernPage() {

    // const navigate = useNavigate();

    return (
        <>
            <div className="ziffern center-center-div">


                {/* top section */}
                <div className="top-left-div">
                    <button className="borderless darkening-behaviour">
                        <span className="return-desktop">return</span>
                        <span className="return-mobile">&lt;</span>
                    </button>
                    <p className="ziffern-tag-top-left">// Ziffern</p>
                </div>

                <div className="ziffern-tag-top-middle top-center-div">
                    <p>Ziffern</p>
                </div>

                {/* obj that goes away after init. after this goes away, the session is drawn onto the screen */}


            </div>
        </>
    )

}

export default ZiffernPage