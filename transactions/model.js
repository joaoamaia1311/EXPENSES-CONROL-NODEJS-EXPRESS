export class Transaction {
    date;
    description;
    money;
    transactionType;
    type;
    user;

    findbyUser() {
        if (!this.user?.uid) {
            return Promise.reject({
                code: 500,
                message: "Usuario não encontrado"
            });
        }

        return admin.firestore()
            .collection("transactions")
            .where("user.uid", "==", this.user.uid)
            .orderBy("date", "desc")
            .get()
            .then(snapshot => {
                return snapshot.docs.map(doc => ({
                    ...doc.data(),
                    uid: doc.id,
                }))
            })
    }

}