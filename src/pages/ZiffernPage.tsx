import { useNavigate } from "react-router-dom";
function ZiffernPage() {

    const navigate = useNavigate();

    enum ExerciseType {
        LISTENING,
        WRITING
    }
    let exercises_type = null;

    function setExerciseType(type) {
        console.log("changes exerciseType", type);
        exercises_type = type;
    }

    function goToMainPage() {
        navigate("/");
    }

    console.log(exercises_type);

    return (
        <>
            <div className="ziffern center-center-div">


                {/* top section */}
                <div className="top-left-div">
                    <button className="borderless darkening-behaviour" onClick={goToMainPage}>
                        <span className="return-desktop">return</span>
                        <span className="return-mobile">&lt;</span>
                    </button>
                    <p className="ziffern-tag-top-left">// Die Ziffern</p>
                </div>

                <div className="ziffern-tag-top-middle top-center-div">
                    <p>Ziffern</p>
                </div>

                {/* obj that goes away after init. after this goes away, the session is drawn onto the screen */}

                <div className="center-center-div config-modal">
                    <h1 className="header">AUFGABE</h1>
                    <div className="row-div">
                        <button className="darkening-behaviour" onClick={() => setExerciseType(ExerciseType.LISTENING)}>HOREN</button>
                        <button onClick={() => setExerciseType(ExerciseType.WRITING)}>SCHREIBEN</button>
                    </div>

                    <div className="listening-configurations"></div>
                    <div className="text-configurations"></div>


                </div>


            </div>
        </>
    )

}

export default ZiffernPage