import {Input, Button, Textarea} from "@nextui-org/react";
import {useRouter} from "next/navigation";


export default function ContactPage() {
    const router = useRouter();

    return (
        <div className="flex flex-col px-14 md:px-20 transition-all">
            <Navbar/>
            <div className="flex flex-col md:px-16 py-20 gap-9 transition-all">
                <h1 className="text-4xl sm:text-5xl leading-tight sm:leading-snug font-satoshi font-black text-gray-950 whitespace-nowrap transition-all">Love to hear from you, <br/> Get in touch</h1>
                <div className="flex flex-col gap-8 w-3/4 min-w-fit">
                    <div className="flex gap-8">
                        <Input
                            labelPlacement="outside"
                            isRequired={true}
                            type="email"
                            label="Your Name"
                            placeholder="Max Mustermann"
                            height={"50px"}
                            className="font-satoshi max-w-[350px]"
                            classNames={{
                                label: "font-satoshi font-bold text-lg text-gray-950",
                                input: "font-satoshi text-md font-bold placeholder:text-gray-450",
                                inputWrapper: "h-[48px] px-7"
                            }}
                        />
                        <Input
                            labelPlacement="outside"
                            isRequired={true}
                            type="email"
                            label="Your email"
                            placeholder="max.mustermann@gmail.com"
                            className="font-satoshi max-w-[350px]"
                            classNames={{
                                label: "font-satoshi font-bold text-lg text-gray-950",
                                input: "font-satoshi text-md font-bold placeholder:text-gray-450",
                                inputWrapper: "h-[48px] px-7"
                            }}
                        />
                    </div>
                    <Textarea
                        labelPlacement="outside"
                        isRequired={true}
                        type=""
                        label="Message"
                        placeholder="Let me know about your request."
                        className="font-satoshi"
                        classNames={{
                            label: "font-satoshi font-bold text-lg text-gray-950",
                            input: "font-satoshi text-md font-bold placeholder:text-gray-450",
                            inputWrapper: "px-7 py-1"
                        }}
                    />
                </div>
                <div className="flex gap-8">
                    <Button endContent={<img src="/message_icon.svg" color="white"/>} color='secondary' onClick={() => router.push("/")} className="px-8 gap-4 py-6 w-[200px] max-w-1/2 text-white font-black font-satoshi text-md hover:bg-buttonHover">
                        Send Message
                    </Button>
                    <Button className="px-10 gap-4 py-6 max-w-1/2 text-black font-black font-satoshi text-md hover:bg-gray-100 bg-gray-300" onClick={() => router.push("/")}>Cancel</Button>
                </div>

            </div>
        </div>
    )
}

function Navbar() {
    return <div className="flex items-center py-8 font-satoshi font-black">
        <h1>Phil Gengenbach</h1>
    </div>
}