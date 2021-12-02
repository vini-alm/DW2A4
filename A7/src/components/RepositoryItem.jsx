export function RepositoryItem(props) {
    return(
        <li>
            <strong>{props.repository?.name ?? "Repositorio Padrao"}</strong>
            <p>{props.repository?.description}</p>
            <a href={props.repository?.link}>Acessar o repositorio</a>
        </li>
    )
}