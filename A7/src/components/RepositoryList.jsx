import { Counter } from "./Counter"
import { RepositoryItem } from "./RepositoryItem"
import './styles/repositories.scss'

const repository = {
    name: "Atividade DW2A4",
    description: "Atividade em react utilizando babel",
    link: "https://github.com/vini-alm/DW2A4"
}

export function RepositoryList() {
    return(
        <>
        <RepositoryItem repository={repository}/>
        <Counter />
        </>
    )
}