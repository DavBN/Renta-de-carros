import { Navbar } from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function orderConfirmationPage() {
    return (
        <div>
            <Navbar />
            <div className="p-6 mx-auto max-w-7xl">
                <div className="flex flex-col items-center justify-centergap-4 text-center">
                    <h1 className="text-2xl">¡Gracias por tu reserva!</h1>
                    <p>
                        En unos instantes recibirás toda la información acerca del producto Reservado✔️
                    </p>

                    <p>
                        Puedes observar todas tus reservas en el área de cliente
                    </p>
                    <Link href="/">
                        <Button>Volver a productos</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
