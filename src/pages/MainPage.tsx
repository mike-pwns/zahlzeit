import {useNavigate} from "react-router-dom";

function MainPage() {

    const navigate = useNavigate();

    function goToZiffernPage() {
        navigate("/ziffern");
    }

    function goToUhrzeitPage() {
        navigate("/uhrzeit");
    }

    return(
        <>
            <div className="main center-center-div">


                {/* top right email me thing */}

                <div className={"top-right-div row-div"}>
                    <p className={"email-text"}>got suggestions? ideas? complaints? love letters? send here --{">"} </p>
                    <a href="mailto:appfeedback.encrypt256@passinbox.com?subject=Zahlzeit%20Feedback">
                        <button className={"mail-btn darkening-behaviour"}>[EMAIL]</button>
                    </a>
                </div>

                {/* centered div for main info */}

                <div className={"col-div"}>
                    {/* small welcome text*/}

                    <p className={"intro-line"}>Trainierst deine Zahlen und Uhrzeit mit..</p>

                    {/* big centered ZIFZEIT*/}
                    <div className={"centered-text-div"}>
                        <h1 className={"title"}>ZAHLZEIT <span className={"dot-bruh-idk"}>.</span></h1>
                    </div>

                    {/* two buttons next to eachother */}
                    <div className={"options-container"}>

                        {/* 2 options */}

                        {/* button 1*/}
                        <div className={"option center-center-div darkening-behaviour floating-behaviour"} onClick={goToZiffernPage}>

                            <div className="col-div centered-text-div">
                                <h1>####</h1>
                                <p>Zahlen</p>
                            </div>
                        </div>

                        {/* button 2 */}
                        <div className={"option center-center-div darkening-behaviour floating-behaviour"} onClick={goToUhrzeitPage}>

                            <div className="col-div centered-text-div">
                                <h1>##:##</h1>
                                <p>Uhrzeit</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage;