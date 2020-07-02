import React, { Fragment } from "react";

import error from "./images/Error.png"
export default function Error() {


    return (


        <Fragment>
            <center>
                <img src={error} height="500px" />
                <h1>Game Over</h1>
            </center>
        </Fragment>


    );
}
