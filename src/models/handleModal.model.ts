import Task from "./task.model"

export default interface HandleModal {
    handleClose: () => void
    show: boolean
    task?: Task
}