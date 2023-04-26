import React from 'react';

type TasksPropsType = {
    data: {
        title: string,
        tasks: TasksType[]
        students: string[]
    }
}

type TasksType = {
    taskId: number,
    title: string,
    isDone: boolean
}

export const Tasks = (props: TasksPropsType) => {
    return (
        <div className="App">
            <div>
                <h3>{props.data.title}</h3>
                <div>
                    <input/>
                    <button className="button">+</button>
                </div>
                <ul>
                    {props.data.tasks.map(e => {
                        return(
                            <li><input type="checkbox" checked={e.isDone}/> <span>{e.title}</span></li>
                        )
                    })}
                </ul>
                <div>
                    <button className="button">All</button>
                    <button className="button">Active</button>
                    <button className="button">Completed</button>
                </div>
                <div>
                    <h3>Students</h3>
                    <ul>
                        {props.data.students.map(s => {
                            return(
                                <li>{s}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}