class Tarefa {
    constructor(id, description) {
        this.id = id;
        this.description = description;
        this.completed = false;
        this.creationDate = new Date();
    }

    marcarConcluida() {
        this.completed = true
    }

    toString() {
        return `
            Descrição: $${this.description}. Data de criação: ${this.creationDate}
        `
    }
}