import Image from "next/image"
import Link from "next/link"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

interface Props {
    id: string,
    title: string,
    downLoadNumber: number,
    image: string,
}

const ResourceCard = ({ id, title, image, downLoadNumber }: Props) => {
  return (
    // shadcn component
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
        <Link href={`/resource/${id}`}>
            <CardHeader className="flex-center flex-col gap-2.5 !p-0">
                <div className="h-fit w-full">
                    <Image 
                        src={image}
                        className="h-full rounded-md object-cover"
                        alt={title}
                        width={384}
                        height={440}
                    />
                </div>
                <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">{title}</CardTitle>
            </CardHeader>
        </Link>
        <CardContent className="flex-between mt-4 p-0">
                <div className="flex-center body-medium gap-1.5 text-white-400">
                    <Image 
                        src="/downloads.svg"
                        width={20}
                        height={20}
                        alt="download"
                    />
                    {downLoadNumber}
                </div>
                <Link className="flex-center text-gradient_purple-blue body-semibold gap-1.5" href={`/resource/${id}`}>
                    Download Now
                    <Image 
                        src="arrow-blue.svg" 
                        width={13} 
                        height={0} 
                        alt="arrow" 
                    />
                </Link> 
        </CardContent>
    </Card>
  )
}

export default ResourceCard