import { Button } from "../Button/styles";
import InputDefault from "../Input/Input";
import { Navbar } from "./styles";

interface IProps {
    handleChange: (label: string, value: string | number) => void;
    submit: () => void;
}

const Header:React.FC<IProps> = ({ handleChange, submit }) => {
    return (
        <Navbar>
            <InputDefault 
                name="first_name"
                placeholder="First name"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange("first_name", event.target.value)}
                />
            <InputDefault 
                name="last_name"
                placeholder="Last name"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange("last_name", event.target.value)}
            />
            <InputDefault 
                name="participation"
                placeholder="Participation"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange("participation", +event.target.value)}
            />
            <Button onClick={() => submit()}>SEND</Button>
        </Navbar>
    )
}

export default Header;