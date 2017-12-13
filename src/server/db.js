let users = [
    {
        id: 'cdd45a09-e50d-47bf-a6e6-aaa53be54892',
        email: 'a@a.fh',
    },
    {
        id: '592688cb-9bb9-40c8-b77d-90052f91ddf2',
        email: 'b@b.fh'
    }
]

export const usersCollection = {
    get: () => users,
    set: (newUsers) => users = newUsers
}

let notes = [
    {
        id: 'b45a9978-8e80-4c8c-b180-fa0cc6a60b09',
        title: 'a note',
        body: 'bla foo',
        user: 'cdd45a09-e50d-47bf-a6e6-aaa53be54892',
    },
    {
        id: '1792711a-b227-4175-bbc4-5f5657680beb',
        title: 'yet another note',
        body: 'bar',
        user: '592688cb-9bb9-40c8-b77d-90052f91ddf2',

    },
    {
        id: '9669d6bc-45be-42d6-b9a9-0abf721774e6',
        title: 'another note',
        user: 'cdd45a09-e50d-47bf-a6e6-aaa53be54892',
    }
]

export const notesCollection = {
    get: () => notes,
    set: (newNotes) => notes = newNotes
}
