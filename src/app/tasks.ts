export class Task {
  id: number;
  name: string;
  priority: string;
  depId: number;
  empId: number;

}
export const Tasks: Task[] = [{
    id: 1,
    name: 'Develop Software',
    priority: 'High',
    depId: 1,
    empId: 1
  },
  {
    id: 2,
    name: 'Make Treasury Report',
    priority: 'Medium',
    depId: 1,
    empId: 1
  },
  {
    id: 3,
    name: 'Operate Machines',
    priority: 'Low',
    depId: 1,
    empId: 1
  }
];
export const priorities: string[] = ['Low', 'Medium', 'High'];
