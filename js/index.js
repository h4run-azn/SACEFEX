$(() => {
    if (screen.width > 500) {
        $("#tilt-box-wrap1").mouseenter((e) => {
            $("#tokenomicsDiv ul").addClass("focusDiv");
        })
        $("#tilt-box-wrap1").mouseleave((e) => {
            $("#tokenomicsDiv ul").removeClass("focusDiv");
        })
        $("#tokenomicsDiv ul").mouseenter((e) => {
            $("#tokenomicsDiv ul").addClass("focusDiv");
        })
        $("#tokenomicsDiv ul").mouseleave((e) => {
            $("#tokenomicsDiv ul").removeClass("focusDiv");
        })


        /******************/
        tokensaleDiv
        $("#tilt-box-wrap2").mouseenter((e) => {
            $("#tokensaleDiv ul").addClass("focusDiv");
        })
        $("#tilt-box-wrap2").mouseleave((e) => {
            $("#tokensaleDiv ul").removeClass("focusDiv");
        })
        $("#tokensaleDiv ul").mouseenter((e) => {
            $("#tokensaleDiv ul").addClass("focusDiv");
        })
        $("#tokensaleDiv ul").mouseleave((e) => {
            $("#tokensaleDiv ul").removeClass("focusDiv");
        })
    }



})