import { DiscordIcon } from "@/assets/imageComponents/DiscordIcon";
import { GithubIcon } from "@/assets/imageComponents/GithubIcon";
import { LinkedinIcon } from "@/assets/imageComponents/LinkedinIcon";

export default function SocialBar() {
    return (
        <div className="flex gap-14">
            <a
                href="https://www.linkedin.com/in/phil-gengenbach"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transform transition-transform duration-300 hover:scale-110"
            >
                <LinkedinIcon className="w-10 h-10" />
            </a>

            <a
                href="https://github.com/philgenb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transform transition-transform duration-300 hover:scale-110"
            >
                <GithubIcon className="w-10 h-10" />
            </a>

            <a
                href="https://discord.com/channels/164783530268819457"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transform transition-transform duration-300 hover:scale-110"
            >
                <DiscordIcon className="w-10 h-10" />
            </a>
        </div>
    );
}
