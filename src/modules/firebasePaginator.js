
const defaultConfig = {
    pageSize: 5,
}

class FirebasePaginator {
    constructor(firebaseDbRef, config) {
        this.ref = firebaseDbRef.orderByKey()
        this.config = Object.assign({}, defaultConfig, config)

        this.clearData()

        this.getFirst = this.getFirst.bind(this)
        this.getPrev = this.getPrev.bind(this)
        this.getNext = this.getNext.bind(this)
        this.getLast = this.getLast.bind(this)
    }

    updateHas() {
        this.hasPrev = !!this.leftSentryKey
        this.hasNext = !!this.rightSentryKey
    }

    clearData() {
        this.leftSentryKey = null
        this.currentPage = null
        this.currentPageKeys = null
        this.rightSentryKey = null

        this.hasPrev = false
        this.hasNext = false
    }

    // returns a Promise
    getFirst() {
        const countWithSentry = this.config.pageSize + 1
        return this.fetchRight(countWithSentry)
            .then((snap) => {
                this.clearData()
                const val = snap.val() || {}
                const keys = Object.keys(val).sort()
                if (keys.length === countWithSentry) {
                    this.rightSentryKey = keys.pop()
                    delete val[this.rightSentryKey]
                }
                this.currentPage = val
                this.currentPageKeys = keys
                this.updateHas()
            })
    }

    // returns a Promise
    getLast() {
        const countWithSentry = this.config.pageSize + 1
        return this.fetchLeft(countWithSentry)
            .then((snap) => {
                this.clearData()
                const val = snap.val() || {}
                const keys = Object.keys(val).sort()
                if (keys.length === countWithSentry) {
                    this.leftSentryKey = keys.shift()
                    delete val[this.leftSentryKey]
                }
                this.currentPage = val
                this.currentPageKeys = keys
                this.updateHas()
            })
    }

    // returns a Promise
    getPrev() {
        const countWithSentry = this.config.pageSize + 2
        const nextRightSentry = this.currentPageKeys[0]
        return this.fetchLeft(countWithSentry, nextRightSentry)
            .then((snap) => {
                const val = snap.val() || {}
                const keys = Object.keys(val).sort()
                this.rightSentryKey = keys.pop()
                delete val[this.rightSentryKey]
                if (keys.length === countWithSentry - 1) {
                    this.leftSentryKey = keys.shift()
                    delete val[this.leftSentryKey]
                } else {
                    this.leftSentryKey = null
                }
                this.currentPage = val
                this.currentPageKeys = keys
                this.updateHas()
            })
    }

    // returns a Promise
    getNext() {
        const countWithSentry = this.config.pageSize + 2
        const nextLeftSentry = this.currentPageKeys[this.currentPageKeys.length - 1]
        return this.fetchRight(countWithSentry, nextLeftSentry)
            .then((snap) => {
                const val = snap.val() || {}
                const keys = Object.keys(val).sort()
                this.leftSentryKey = keys.shift()
                delete val[this.leftSentryKey]
                if (keys.length === countWithSentry - 1) {
                    this.rightSentryKey = keys.pop()
                    delete val[this.rightSentryKey]
                } else {
                    this.rightSentryKey = null
                }
                this.currentPage = val
                this.currentPageKeys = keys
                this.updateHas()
            })
    }

    // returns a Promise
    fetchRight(count, from = null) {
        let query = this.ref.limitToFirst(count)
        if (from) {
            query = query.startAt(from)
        }
        return query.once('value')
    }

    // returns a Promise
    fetchLeft(count, from = null) {
        let query = this.ref.limitToLast(count)
        if (from) {
            query = query.endAt(from)
        }
        return query.once('value')
    }
}

export default FirebasePaginator
