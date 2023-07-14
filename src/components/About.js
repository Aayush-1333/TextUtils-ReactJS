import React from 'react'

export default function About(props) {

    let myStyle = {
        backgroundColor: props.mode === "dark" ? "#171717" : "white",
        color: props.mode === "dark" ? "white" : "black"
    }

    return (
    <div className='container p-5 rounded-5 my-3' style={props.mode === "dark" ? {color: "white"} : {color: "black"}}>

        <h1>About Us Page</h1>

        {/* ============== First Accordion ============= */}
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                    About the company
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the first project from our company: </strong> We provide all sorts of services to our valuable customers. It's our topmost priority to understand the issues of our users and bring out the best solution to resolve them. Challenges go hand in hand and we learn new stuff from the issues in real-world!.
                </div>
                </div>
            </div>

            {/* ============ Second Accordion ============= */}
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                    Why TextUtils?
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>TextUtils is one of its kind!: </strong> It provides all types of tools that is required to analyze and make changes in the text. From copying the texts to capitalizing, lowercasing or removing extra whitespaces. It beautifies the overall text to give it a cleaner look. Use it for any task you want be it presenting essay for schools or writing an applications to corporate sectors it is all-rounder!!
                </div>
                </div>
            </div>

            {/* =========== Third Accordion ============ */}
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                    News Updates
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Update 1 July, 2023: </strong> We'll be launching the new AI tool cleanup to clean all the codes to give it a final touch. It is useful in all sorts of cases. So enjoy this tool and we'll be relesing new updates each year! HAPPY WRITING!!  
                </div>
                </div>
            </div>
            
        </div>

    </div>
    )
}
