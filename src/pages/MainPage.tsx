import {useNavigate} from "react-router-dom";
// import {generateNumber, numToWord} from "../logic/generator.ts"

function MainPage() {

    const navigate = useNavigate();

    function goToZiffernPage() {
        navigate("/ziffern");
    }
    //
    // function goToUhrzeitPage() {
    //     navigate("/uhrzeit");
    // }

    //
    // function printRandomNumber() {
    //
    //     const num = 160 //generateNumber(3)
    //     console.log(num)
    //     console.log(numToWord(num))
    //
    // }
    return(
        <>
            <div className="main center-center-div">
                {/*<button onClick={printRandomNumber}>click me</button>*/}


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
                        <div className={"disabled option center-center-div"}>

                            <div className="col-div centered-text-div disabled">
                                <h1><s>##:##</s></h1>
                                <p><s>Uhrzeit (unavailable)</s></p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage;