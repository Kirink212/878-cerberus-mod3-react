export default interface Task {
    // Attributes
    id: number;
    title: string;
    status: boolean;
    dueDate: Date;
    description?: string
}