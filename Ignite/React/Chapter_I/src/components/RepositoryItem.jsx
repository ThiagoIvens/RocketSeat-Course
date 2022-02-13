export function RepositoryItem(props) {
    return (
        <li>
            <b>{props.repository?.name ?? 'Nome desconhecido'}</b>
            <p>{props.repository?.description ?? 'Sem descrição'}</p>

            <a href={props.repository?.link ?? '#'}>Acessar Repositorio</a>
        </li>
    );
}