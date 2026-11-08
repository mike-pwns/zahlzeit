function MainMenuPage() {
    return(
        <>
            <div className="main center-center-div">


                {/* top right email me thing */}

                <div className={"top-right-div row-div"}>
                    <p className={"email-text"}>got suggestions? ideas? complaints? love letters? send here --{">"} </p>
                    <button className={"mail-btn darkening-behaviour"}>[MY MAIL]</button>
                </div>

                {/* centered div for main info */}

                <div className={"col-div"}>
                    {/* small welcome text*/}

                    <p className={"intro-line"}>Trainierst deine Ziffern und Uhrzeit mit..</p>

                    {/* big centered ZIFZEIT*/}
                    <div className={"centered-text-div"}>
                        <h1 className={"title"}>ZIFZEIT <span className={"dot-bruh-idk"}>.</span></h1>
                    </div>

                    {/* two buttons next to eachother */}
                    <div className={"options-container"}>

                        {/* 2 options */}

                        <div className={"option center-center-div darkening-behaviour floating-behaviour"}>

                            <div className="col-div centered-text-div">
                                <h1>####</h1>
                                <p>Ziffers</p>
                            </div>
                        </div>

                        <div className={"option center-center-div darkening-behaviour floating-behaviour"}>

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

export default MainMenuPage;