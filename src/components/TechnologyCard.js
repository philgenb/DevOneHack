export default function TechnologyCard({imgPath, bgColor = "#FFE2EA"}) {
    return <div className={`flex w-[50px] items-center justify-center aspect-square bg-[${bgColor}] rounded-lg`}>
        <img src={imgPath} alt="TechnologyImage"/>
    </div>
}