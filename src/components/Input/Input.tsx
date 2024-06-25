import { Input } from "./styled";

interface IProps {
    name: string;
    placeholder: string;
    value: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputDefault:React.FC<IProps> = ({ name, placeholder, value, onChange }) => {
    return (
        <Input
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}

export default InputDefault;