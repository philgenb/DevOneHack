export default function TechnologyCard({imgPath, bgColor}) {
    return <div className={`flex w-[50px] h-[50px] items-center justify-center aspect-square rounded-lg`} style={{backgroundColor: bgColor}}>
        <img src={imgPath} alt="TechnologyImage"/>
    </div>
}