import { ChevronsLeft, Menu } from "lucide-react";
import { JSX } from "react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/app/constants";
import { useRouter } from "next/navigation";
export default function Sidebar(): JSX.Element {
    const router = useRouter();
    return (
        <Drawer direction='left'>
            <DrawerTrigger><Menu className="mt-1" /></DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="p-2 px-0">
                    <DrawerTitle >
                        <div className="flex border-b px-2 pb-2 justify-between items-center">
                            <Link href="/" className="flex items-center gap-2 shrink-0">
                                <div className="relative rounded-full overflow-hidden w-10 cursor-pointer h-10 bg-gradient-to-br from-blue-600 to-blue-500  flex items-center justify-center ">
                                    <Image fill src="/image.png" alt="logo" />
                                </div>
                                <span className="text-xl font-bold text-gray-900 tracking-tight">Sembark<span className="text-blue-600">Shop</span></span>
                            </Link>
                            <div>
                                <DrawerTrigger><div className='pt-2.5 pr-3'><ChevronsLeft className="text-lg" /></div></DrawerTrigger>
                            </div>
                        </div>

                    </DrawerTitle>
                </DrawerHeader>
                <div>
                     {CATEGORIES.map((cat) => (
                        <DrawerTrigger onClick={() => router.push('/catalog')} className="block" key={cat}>
                            <div
                                className=" block px-4 py-1.5 text-md font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors "
                            >
                                {cat}
                            </div>
                        </DrawerTrigger>
                    ))}
                </div>
                <DrawerFooter>

                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}