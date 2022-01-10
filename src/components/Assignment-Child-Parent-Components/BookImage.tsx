import { JsxChild } from "typescript"

type ImageProps = {
    children: React.ReactNode

}

export const BookImage = (props:ImageProps) => {
    return <h2>{props.children}</h2>
}