module.exports = {
    db: [],
    find: function(user, password) {
        for (var i = 0; i < this.db.length; i++) {
            if (this.db[i].login === user) {
                if (this.db[i].password === password) {
                    return true;
                }
            }
        }
        return null;
    }
}