export default interface Task {
    // Attributes
    id: number;
    title: string;
    status: boolean;
    dueDate: Date;
    description?: string

    // Methods
    changeStatus?: (id: number) => void;
    editTask?: (title: string, dueDate: Date, description: string, id?: number) => void;
}