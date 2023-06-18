type ButtonProps = {
    text: string,
    className?: string,
    name?: string,
    type?: string,
    style?: string,
    onclick?: () => void,

}

export function Button(props: ButtonProps) {

    const { text, className, name, onclick, style, type } = props;

    return (
        <button></button>
    )

}