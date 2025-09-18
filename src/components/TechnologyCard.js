export default function TechnologyCard({ imgPath, bgColor, iconComponent }) {
    return (
        <div
            className="flex w-[50px] h-[50px] items-center justify-center aspect-square rounded-lg"
            style={{ backgroundColor: bgColor }}
        >
            {imgPath ? (
                <img src={imgPath} alt="Technology Image" />
            ) : (
                iconComponent
            )}
        </div>
    );
}
