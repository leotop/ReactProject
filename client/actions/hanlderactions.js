export function addTask(text) {
    return {
        type: 'ADD',
        payload: 1
    }
}

export function deleteTask(text) {
    return {
        type: 'DELETE',
        payload: text
    }
}

export function count(text) {
    return {
        type: 'ADD',
        payload: text
    }
}
