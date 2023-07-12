
interface Props {
    image: string,
    title: string,
    desc: string,
}

const CardProject: React.FC<Props> = ( {image, title, desc} ) => {
    return(
        <div className="flex flex-col gap-3">
            <img src={image} alt="" />
            <h1 className="text-xl font-medium text-slate-700">{title}</h1>
            <p>{desc}</p>
        </div>
    )
}

export default CardProject