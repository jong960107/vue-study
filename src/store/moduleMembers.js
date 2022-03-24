export const moduleMembers = {
    state: {
        members: [],
        member: {
            name: '',
            age: ''
        }
    },
    mutations: {
        membersRead(state, members) {
            state.members = members
        }
    },
    actions: {
        membersCreate(thisStore, member) {
            thisStore.state.members.push({
                name: member.name,
                age: member.age
            })
            console.log('Done membersCreate', thisStore.state.members)
        },
        membersUpdate(thisStore, { index, member }) {
            thisStore.state.members[index] = member
            console.log('Done membersUpdate', thisStore.state.members)
        },
        membersRead(thisStore) {
            const members = [{
                name: '홍길동',
                age: 20
            }, {
                name: '춘향이',
                age: 16
            }]
            thisStore.commit('membersRead', members)
            console.log('Done membersRead', thisStore.state.members)
        },
        membersDelete(thisStore, index) {
            thisStore.state.members.splice(index, 1)
            console.log('Done membersDelete', thisStore.state.members)
        }
    }
}