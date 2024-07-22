import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { TablesReservesProps } from "./TableReserves.types"
import { formatPrice } from "@/lib/formatPrice";

export function TablesReserves(props: TablesReservesProps) {
    const { orders } = props;

    const totalAmount = orders.reduce((acc, booking) => {
        return acc + parseFloat(booking.totalAmount);
    }, 0);

    return (
        <Table>
            <TableCaption>Lista reciente de pedidos.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Car</TableHead>
                    <TableHead>Date Star</TableHead>
                    <TableHead>Date End</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {orders.map((order) => (
                    <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.carName}</TableCell>
                        <TableCell>
                            {new Date(order.orderDate).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                            {new Date(order.orderEndDate).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                            <div className="p-2 text-white bg-green-600 rounded-lg w-fit">
                              {order.status}
                            </div>
                        </TableCell>
                        <TableCell className="text-right">{formatPrice(Number(order.totalAmount))}</TableCell>
                    </TableRow>
            ))}
            </TableBody>
           <TableFooter>
            <TableRow>
                <TableCell colSpan={4}>Total</TableCell>
                <TableCell className="text-right">
                    {formatPrice(totalAmount)}
                </TableCell>
            </TableRow>
           </TableFooter>
        </Table>

    )
}