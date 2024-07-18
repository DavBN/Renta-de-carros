import { Navbar } from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function pageOrderError() {
    return (
        <div>
            <Navbar />
            <div className="p-6 mx-auto max-w-7xl">
                <div className="flex flex-col items-center justify-center gap-4 text-center p-20">
                    <h1 className="text-2xl">
                        ¡Ops!, Ha ocurrido un error, intentelo de nuevo más tarde.
                    </h1>
                    <Link href="/">
                    <Button>Volver a los productos</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
