import { Button } from "./styles";

interface IProps {
    children: string;
    submit: () => void;
}

const ButtonDefault:React.FC<IProps> = ({children, submit}) => {
    return (
        <Button onClick={() => submit()}>{children}</Button>
    )
}
export default ButtonDefault;