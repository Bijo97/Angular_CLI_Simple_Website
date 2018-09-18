export class Task {
  id: number;
  name: string;
  priority: string;
}
export const Tasks: Task[] = [{
    id: 1,
    name: 'Develop Software',
    priority: 'High'
  },
  {
    id: 2,
    name: 'Make Treasury Report',
    priority: 'Medium'
  },
  {
    id: 3,
    name: 'Operate Machines',
    priority: 'Low'
  }
];
export const priorities: string[] = ['Low', 'Medium', 'High'];
