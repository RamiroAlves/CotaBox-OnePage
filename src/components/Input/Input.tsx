import { Input } from "./styled";

interface IProps {
    name: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputDefault:React.FC<IProps> = ({ name, placeholder, onChange }) => {
    return (
        <Input
            name={name}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}

export default InputDefault;