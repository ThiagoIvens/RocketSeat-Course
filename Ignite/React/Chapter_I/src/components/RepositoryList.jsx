import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(()=> {
        fetch('https://api.github.com/users/ThiagoIvens/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))

    }, [])
    
    return (
        <section className="repository-list">
            <h1>Lista de repositorios</h1>
            <hr/>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}
            </ul>
        </section>
    );
}