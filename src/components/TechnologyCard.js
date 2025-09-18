export default function TechnologyCard({ imgPath, bgColor, iconComponent, description }) {
    return (
        <div className="relative group">
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

            {/* Tooltip */}
            {description && (
                <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-lg py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    {description}
                </div>
            )}
        </div>
    );
}
