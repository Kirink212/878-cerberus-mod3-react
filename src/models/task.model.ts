export default interface Task {
    id: number;
    title: string;
    status: boolean;
    dueDate: Date;
    description?: string;
}