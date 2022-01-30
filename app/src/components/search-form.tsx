import TextField from '@material-ui/core/TextField'
import { useState } from 'react'
interface Props {
    onSubmit: Function
}

const SearchForm = ({ onSubmit }: Props) => {
    const [searchValue, setSearchValue] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSubmit(searchValue)
        setSearchValue('')
    }

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setSearchValue(value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Search for pokemon"
                variant="filled"
                style={{ width: 400 }}
                onChange={handleSearch}
            />
        </form>
    )
}

export default SearchForm
