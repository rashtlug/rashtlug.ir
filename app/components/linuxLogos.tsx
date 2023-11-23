import Image from "next/image";


export default function LinuxLogos() {

    return (
        <div className="w-full px-5 flex justify-between items-center">
            <Image className="grayscale-[30] hover:grayscale-0" width={30} height={30} alt="لوگو لینوکس" src={'/images/logos/kali.png'}/>
            <Image className="grayscale-[30] hover:grayscale-0" width={30} height={30} alt="لوگو لینوکس" src={'/images/logos/docker.png'}/>
            <Image className="grayscale-[30] hover:grayscale-0" width={30} height={30} alt="لوگو لینوکس" src={'/images/logos/arch.png'}/>
            <Image className="grayscale-[30] hover:grayscale-0 hidden md:block" width={30} height={30} alt="لوگو لینوکس" src={'/images/logos/fedora.png'}/>
            <Image className="grayscale-[30] hover:grayscale-0" width={30} height={30} alt="لوگو لینوکس" src={'/images/logos/manjaro.png'}/>
            <Image className="grayscale-[30] hover:grayscale-0 hidden md:block" width={30} height={30} alt="لوگو لینوکس" src={'/images/logos/suse.png'}/>
            <Image className="grayscale-[30] hover:grayscale-0" width={30} height={30} alt="لوگو لینوکس" src={'/images/logos/ubuntu.png'}/>
        </div>
    )

}