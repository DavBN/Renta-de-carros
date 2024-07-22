import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server"
import Link from "next/link";
import { redirect } from "next/navigation";
import { TablesReserves } from "./components/TableReservers";

export default async function pageReserves() {
    const { userId } = auth();

    if (!userId) {
        return redirect("/");
    }

    const orders = await db.order.findMany({
        where: {
            userId: userId,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    
    return (
        <div>
            <h1 className="mb-4 text-3xl">Página de reservas</h1>
            {orders.length === 0 ? (
                <div className="flex flex-col justify-center gap-4 items-center">
                   <h2 className="text-xl">No tienes ningún pedido</h2>
                   <p>Haz tus pedidos por medio de la página de vehículos</p>
                   <Link href="/cars">
                   <Button>Lista de vehículos</Button>
                   </Link>
                </div>
            ) : (
                <TablesReserves orders={orders}/>
            )}
        </div>
    )
}
