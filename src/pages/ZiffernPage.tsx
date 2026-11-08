import {useNavigate} from "react-router-dom";
import {useState} from "react";

function ZiffernPage() {

    const navigate = useNavigate();

    // flag managing and allat
    enum ExerciseType {
        LISTENING,
        TEXT
    }

    enum ConversionType {
        NUMBER_TO_WORD,
        WORD_TO_NUMBER,
        MIXED
    }



    //  EXERCISE TYPE
    //       var name        mutator        # this can be an enum value OR null. set null by default
    const [exerciseType, setExerciseType] = useState<ExerciseType | null>(null);
    // const exerciseTypeSelected = exerciseType !== null; // kind redundant, just check that condition

    // NUM DIGITS
    const [numDigits, setNumDigits] = useState<number | null>(null);

    // CONVERSION
    const[conversionType, setConversionType] = useState<ConversionType | null>(null);

    // NUM DIGITS
    const [numExercises, setNumExercises] = useState<number | null>(null);


    // for settings, use indexes
    const canStart =
        (exerciseType === ExerciseType.LISTENING && numDigits !== null && numExercises !== null)
        ||
        (exerciseType === ExerciseType.TEXT && numDigits !== null && conversionType !== null && numExercises !== null);


    // navigation
    function goToMainPage() {
        navigate("/");
    }

    // actual html
    return (
        <>
            <div className="ziffern center-center-div">


                {/* top section */}
                <div className="top-left-div">
                    <button className="borderless darkening-behaviour" onClick={goToMainPage}>
                        <span className="return-desktop">return</span>
                        <span className="return-mobile">&lt;</span>
                    </button>
                    <p className="ziffern-tag-top-left">// Die Zahlen</p>
                </div>

                <div className="ziffern-tag-top-middle top-center-div">
                    <p>Zahlen</p>
                </div>

                {/* obj that goes away after init. after this goes away, the session is drawn onto the screen */}

                <div className="center-center-div config-modal">
                    <h1 className="header">AUFGABE</h1>
                    <div className="row-div options-container">
                        <button className={exerciseType === ExerciseType.LISTENING ? "option-button active" : "darkening-behaviour option-button floating-behaviour"}
                                onClick={() => setExerciseType(ExerciseType.LISTENING)}>HÖREN
                        </button>
                        <button className={exerciseType === ExerciseType.TEXT ? "option-button active" : "darkening-behaviour option-button floating-behaviour"}
                                onClick={() => setExerciseType(ExerciseType.TEXT)}>SCHREIBEN
                        </button>
                    </div>

                    {/* configs */}


                    <div className={exerciseType !== null ? "col-div full-width centered-text-div" : "hidden"}>

                        <h1 className="header">number of digits</h1>

                        <div className="digit-options">
                            {[1, 2, 3, 4, 5, 6].map(number => (
                                <button
                                    key={number}
                                    className={`option-button ${numDigits === number ? "active" : "floating-behaviour darkening-behaviour"}`}
                                    onClick={() => setNumDigits(number)}
                                >
                                    {number}
                                </button>
                            ))}
                        </div>

                        <div className={exerciseType === ExerciseType.TEXT ? "col-div full-width" : "hidden"}>
                            <h1 className="header">conversion type</h1>

                            <div className="conversion-options">

                                <button
                                    className={`option-button ${conversionType === ConversionType.NUMBER_TO_WORD ? "active" : "floating-behaviour darkening-behaviour"}`}
                                    onClick={() => setConversionType(ConversionType.NUMBER_TO_WORD)}
                                >
                                    ZAHL -&gt; WORT
                                </button>

                                <button
                                    className={`option-button ${conversionType === ConversionType.WORD_TO_NUMBER ? "active" : "floating-behaviour darkening-behaviour"}`}
                                    onClick={() => setConversionType(ConversionType.WORD_TO_NUMBER)}
                                >
                                    WORT -&gt; ZAHL
                                </button>

                                <button
                                    className={`option-button ${conversionType === ConversionType.MIXED ? "active" : "floating-behaviour darkening-behaviour"}`}
                                    onClick={() => setConversionType(ConversionType.MIXED)}
                                >
                                    GEMISCHT
                                </button>

                            </div>

                        </div>


                        <h1 className="header">number of exercises</h1>

                        <div className="exercise-options">
                            {[10, 20, -1].map(number => (
                                <button
                                    key={number}
                                    className={`option-button ${
                                        numExercises === number
                                            ? "active"
                                            : "floating-behaviour darkening-behaviour"
                                    }`}
                                    onClick={() => setNumExercises(number)}
                                >
                                    {number === -1 ? "endlos" : number}
                                </button>
                            ))}                        </div>

                        <button className={ canStart ? "start-button floating-behaviour darkening-behaviour" : "hidden"}>TRAINIEREN!</button>

                    </div>

                    {/*<h1 className={exerciseType !== null ? "header" : "hidden"}>DIE KONFIGURATIONEN</h1>*/}

                    {/*/!* configs for listening *!/*/}
                    {/*<div className={exerciseType === ExerciseType.LISTENING ? "col-div" : "hidden"}>*/}
                    {/*    <p>listening stuff here</p>*/}

                    {/*</div>*/}

                    {/*/!* configs for text *!/*/}

                    {/*<h1 className={exerciseType !== null ? "header" : "hidden"}></h1>*/}
                    {/*<div className="text-configurations">*/}
                    {/*    <h1 className="header">TYP</h1>*/}

                    {/*</div>*/}


                </div>


            </div>
        </>
    )

}

export default ZiffernPage