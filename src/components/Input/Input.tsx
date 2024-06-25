import { Input } from "./styled";

interface IProps {
    name: string;
    placeholder: string;
    min?: number;
    value: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputDefault:React.FC<IProps> = ({ name, placeholder, min, value, onChange }) => {
    return (
        <Input
            name={name}
            placeholder={placeholder}
            min={min}
            value={value}
            onChange={onChange}
        />
    )
}

export default InputDefault;