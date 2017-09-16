// src/components/TimeEntries.vue

export default {
data () {
    // We want to start with an existing time entry
    let existingEntry = {
    user: {
        firstName: 'Ryan',
        lastName: 'Chenkie',
        email: 'ryanchenkie@gmail.com',
        image: 'https://1.gravatar.com/avatar/7f4ec37467f2f7db6fffc7b4d2cc8dc2?s=250'
    },
    comment: 'First time entry',
    entry: 'Hello blaggir!',
    date: '2016-04-08'
    }
    return {
    // Start out with the existing entry
    // by placing it in the array
    postEntries: [existingEntry]
    }
},
methods: {
    deletePostEntry (postEntry) {
    // Get the index of the clicked time entry and splice it out
    let index = this.postEntries.indexOf(postEntry)
    if (window.confirm('Are you sure you want to delete this entry?')) {
        this.postEntries.splice(index, 1)
        this.$dispatch('deleteTime', postEntry)
    }
    }
},
events: {
    entryUpdate (postEntry) {
    this.postEntries.push(postEntry)
    return true
    }
}
}