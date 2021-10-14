import React from "react";

const Greeter = props => {
    return (
        <>

            <div class="container">
                <div class="card">
                    <div class="card-body">
                        {props.phrase1} {props.name1}
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        {props.phrase2} {props.name2}
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        {props.phrase3} {props.name3}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Greeter