import { Fade, Zoom } from "react-awesome-reveal"

interface ICardPortfolioProps{
    img: string,
    title: string,
    text: string
}

export const CardPortfolio = ({img, title, text}: ICardPortfolioProps) => {
  return (
    <div>
      <Zoom duration={1000} triggerOnce={true}>
      <img src={img} alt="website" />
      </Zoom>
      
        <Fade duration={500} triggerOnce={true} direction="down">
        <h3 className="font-semibold text-2xl pb-5 pt-10">{title}</h3>
        <p>{text}</p>
        </Fade>
       
    </div>
  )
}
