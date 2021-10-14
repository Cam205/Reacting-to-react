import React from "react";

const Greeter = props => {
    return (
        <>
            <div class="card">
                <div class="card-body col-8">
                    {props.phrase1} {props.name1}
                </div>
            </div>

            <div class="card">
                <div class="card-body col-8">
                    {props.phrase2} {props.name2}
                </div>
            </div>

            <div class="card">
                <div class="card-body col-8">
                    {props.phrase3} {props.name3}
                </div>
            </div>
        </>
    )
}

export default Greeter