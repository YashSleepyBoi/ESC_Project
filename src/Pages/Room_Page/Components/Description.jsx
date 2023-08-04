
import { convert } from 'html-to-text';

function Description(props) {
    if (props.desc) {
        const text = convert(props.desc)
        const arr = text.split(".")
        const obj = document.createElement("p")
        obj.innerHTML = `${arr[0]}</p> <span id="dots">...<button onClick={myFunction} id="myBtn"data-testid="myBtn">See More</button></span><span id="more" data-testid="more">${[...arr]}</span>`
        
    }

    return (
        <p>
            ${arr[0]} <span id="dots">...<button onClick={myFunction} id="myBtn"data-testid="myBtn">See More</button></span><span id="more" data-testid="more">${[...arr]}</span>
        </p>
    )
}

export default Description