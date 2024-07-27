import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";
import { TablesReserves } from "../../../reserves/components/TableReservers/TablesReserves";
import { TableReserves } from "./components/TableReserves/TableReserves";
import { isAdministrator } from "@/lib/isAdministrator";

export default async function pageReservesAdmin() {
 const {userId} =auth();
 const user = await currentUser();

 if(!userId || !user || isAdministrator(userId)) {
    return redirect("/");
 }

 const order = await db.order.findMany({
    orderBy: {
        createdAt: "desc",
    },
 });
  return (
    <div>
        <h1>Página reservas</h1>
        <TableReserves orders={order}/>
    </div>
  )
}
