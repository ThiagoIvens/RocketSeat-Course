import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name:'TESTE',
    description:'Description of repository',
    link:'https://github.com/ThiagoIvens'
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositorios</h1>

            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>
    );
}