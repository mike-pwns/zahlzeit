import {useNavigate} from "react-router-dom";
import {useState} from "react";

function ZiffernPage() {

    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState<Pages>(Pages.CONFIG)

    enum Pages {
        CONFIG,
        SESSION,
        RESULTS
    }

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


    // the whole "as" thing is new to me too man.. more readable typecasting?
    function pasteCharacter(character: String) {

        // have to init this here because.. well, we reuse the page and everything. so band aid ig
        const inputField = document.getElementById("exercise-input") as HTMLInputElement;
        inputField.value += character;
    }





    // for settings, use indexes
    const canStart =
        (exerciseType === ExerciseType.LISTENING && numDigits !== null && numExercises !== null)
        ||
        (exerciseType === ExerciseType.TEXT && numDigits !== null && conversionType !== null && numExercises !== null);


    // navigation
    function goToMainPage() {
        navigate("/");
    }

    function startSession() {
        // read vals, compile questions n whatnot
        console.log("Starting session...");
        setCurrentPage(Pages.SESSION)
    }

    // actual html

    switch (currentPage) {

        case Pages.CONFIG:

            return (
                <>
                    <div className="ziffern center-center-div">


                        {/* top section */}
                        <div className="top-left-div">
                            <button className="darkening-behaviour" onClick={goToMainPage}>
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

                                <h1 className="header" style={{marginTop: "1rem"}}>VIELE ZIFFERN</h1>

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
                                    <h1 className="header">TYP</h1>

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


                                <h1 className="header">VIELE AUFGABE</h1>

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

                                <button
                                    onClick={() => startSession()}
                                    className={canStart ? "start-button floating-behaviour darkening-behaviour" : "hidden"}>TRAINIEREN!</button>

                            </div>

                        </div>


                    </div>
                </>
            )

        case Pages.SESSION:
            return (
                <>
                    <div className="ziffern center-center-div">


                        {/* top section */}
                        <div className="top-left-div">
                            <button className="darkening-behaviour" onClick={goToMainPage}>
                                <span className="return-desktop">return</span>
                                <span className="return-mobile">&lt;</span>
                            </button>
                            <p className="ziffern-tag-top-left">// Die Zahlen</p>
                        </div>

                        <div className="ziffern-tag-top-middle top-center-div">
                            <p>Zahlen</p>
                        </div>

                        <div className="top-right-div-desktop">
                            <p>[AUFGABE ##/##]</p>
                            <p>[ZEIT ##:##]</p>
                            <button className="darkening-behaviour">ENDE</button>
                        </div>

                        <div className="top-right-div-mobile">
                            <button className="darkening-behaviour">ENDE</button>
                        </div>


                        <div className="bottom-copy-pastables">
                            {["ä", "ö", "ü", "ß"].map(letter => (
                                <button
                                    key={letter}
                                    className="copy-pastable darkening-behaviour"
                                    onClick={() => pasteCharacter(letter)}
                                >
                                    {letter}
                                </button>
                            ))}
                        </div>


                    {/*    now the actual middle section */}

                        <div className="col-div centered-text-div">
                            <h1 className="exercise-prompt">100,000</h1>
                            <div className="exercise-input-container">
                                {/*TODO have placeholder change based on whatever is being prompted*/}
                                <input id="exercise-input" type="text" placeholder={conversionType ? "wort hier" : "zahl hier"}/>
                                <button className="exercise-submit darkening-behaviour">SUBMIT</button>
                                <div className="session-info-mobile">
                                    <p>[AUFGABE ##/##]</p>
                                    <p>[ZEIT ##:##]</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </>
            )

        case Pages.RESULTS:
            return (
                <>
                </>
            )
    }


}

export default ZiffernPage