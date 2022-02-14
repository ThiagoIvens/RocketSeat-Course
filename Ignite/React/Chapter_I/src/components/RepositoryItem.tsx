interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <h3><b>{props.repository?.name ?? 'Nome desconhecido'}</b></h3>
            <p>{props.repository?.description ?? 'Sem descrição'}</p>

            <a href={props.repository?.html_url ?? '#'}>Acessar Repositorio</a>
        </li>
    );
}