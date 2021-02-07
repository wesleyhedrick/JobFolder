function LetterOptions({changeDisplayOutput}){
    function changeDisplayPanelOutput(e){
        changeDisplayOutput(e.target.className)
    }

    return(
        <>
            <div className='cover-letters' onClick={changeDisplayPanelOutput}>Cover Letters</div>
            <div className='ty-letters' onClick={changeDisplayPanelOutput}>Thank You Letters</div>
            <div className='' onClick={changeDisplayPanelOutput}>Back</div>
        </>
    )
}

export default LetterOptions