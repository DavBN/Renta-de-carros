import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";

export default async function pageReservesAdmin() {
 const {userId} =auth();
 const user = await currentUser();

 if(!userId || !user) {
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
        <p>Tabla</p>
    </div>
  )
}
