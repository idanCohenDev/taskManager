export default class TaskItem {
  constructor(id, title, description, worker, status, date, duration) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.worker = worker;
    this.status = status;
    this.date = date,
    this.duration = duration
  }
}
