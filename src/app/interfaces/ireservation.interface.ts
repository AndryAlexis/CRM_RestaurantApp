export interface IReservation {
    date: string;
    time: string;
    guests: number;
    user_id: string;
    status: string;
    tables: number[];
}
