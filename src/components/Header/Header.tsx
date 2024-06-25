import { IPayload } from "../../App";
import { Button } from "../Button/styles";
import InputDefault from "../Input/Input";
import { Navbar } from "./styles";

interface IProps {
    handleChange: (label: string, value: string | number) => void;
    submit: () => void;
    payload: IPayload;
}

const Header:React.FC<IProps> = ({ handleChange, submit, payload }) => {
    return (
        <Navbar>
            <InputDefault 
                name="first_name"
                placeholder="First name"
                value={payload.first_name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange("first_name", event.target.value)}
                />
            <InputDefault 
                name="last_name"
                placeholder="Last name"
                value={payload.last_name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange("last_name", event.target.value)}
            />
            <InputDefault 
                name="participation"
                placeholder="Participation"
                value={payload.participation}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange("participation", +event.target.value)}
            />
            <Button onClick={() => submit()}>SEND</Button>
        </Navbar>
    )
}

export default Header;