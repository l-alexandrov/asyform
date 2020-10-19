import aevent from "./event";

export default function (selector = "form.async"){
    document.addEventListener('submit', eventOnElement => {
        if (eventOnElement.target.matches(selector)) {
            aevent(eventOnElement)
        }
    })
}
