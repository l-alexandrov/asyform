import aevent from "./event";

export default function Asyform(selector = "form.async"){
    document.addEventListener('submit', eventOnElement => {
        if (!eventOnElement.target.matches(selector)) {
            return true;
        }
        eventOnElement.preventDefault();
        aevent(eventOnElement.target);
        return false;
    });
}
