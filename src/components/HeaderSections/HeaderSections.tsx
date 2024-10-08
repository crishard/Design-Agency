import { Fade } from "react-awesome-reveal"

interface IHeaderSectionsProps {
    text: string,
    title: string
}

export const HeaderSections = ({ text, title }: IHeaderSectionsProps) => {
    return (
        <div className="max-w-[400px]">
            <Fade triggerOnce={true} cascade duration={1500} direction="left">
                <p className="text-green-variant text-lg font-medium">{text}</p>
                <h3 className="font-semibold text-2xl pt-4 leading-snug">{title}</h3>
            </Fade>

        </div>
    )
}
