import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { IData } from "./components/Table/Table";
import { GlobalStyles, ThemeProvider, theme } from "./constant/GlobalStyles";
import Home from "./pages/Home/Home";
import Toast from "./components/Toast/Toast";
import {Toaster} from 'react-hot-toast';
import { useMutation, useQuery } from "@apollo/client";
import { ADD_USER, DELETE_USER, GET_USERS } from "./services/dashboard";

export interface IPayload {
  first_name: string;
  last_name: string;
  participation?: number | null;
}

function App() {
  const { loading, data, refetch } = useQuery(GET_USERS);
  const [addUser] = useMutation(ADD_USER);
  const [deleteUser] = useMutation(DELETE_USER);
  const [users, setUsers] = useState<IData[]>([]);
  const [payload, setPayload] = useState<IPayload>({
    first_name: "",
    last_name: "",
    participation: null,
  });

  useEffect(() => {
    if (data) setUsers(data.findAll);
  }, [data]);

  const onSubmit = async () => {
    if (validate()) {
      try {
        await addUser({
          variables: {
            first_name: payload.first_name,
            last_name: payload.last_name,
            participation: Number(payload.participation),
          },
        });
        setPayload({ first_name: "", last_name: "", participation: null });
        await refetch();
      } catch (error) {
        console.error("Error adding user:", error);
      }
    }
  };

  const validate = () => {
    const totalParticipation = users.reduce((acc, user) => acc + (user.participation || 0), 0) + (payload.participation || 0);

    if (!payload?.first_name) {
      Toast.show("O campo First Name é obrigatório", "error");
      return false;
    }
    if (!payload?.last_name) {
      Toast.show("O campo Last Name é obrigatório", "error");
      return false;
    }
    if (payload?.participation == null || !payload?.participation) {
      Toast.show("O campo Participation é obrigatório", "error");
      return false;
    }
    if (totalParticipation > 100) {
      Toast.show("A soma dos participations não pode ultrapassar 100.");
      return false;
    }
    return true;
  };

  const handlePayload = (label: string, value: string | number) => {
    setPayload({ ...payload, [label]: value });
  };

  const onDelete = async (id: string) => {
    try {
      await deleteUser({ variables: { id } });
      await refetch();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header handleChange={handlePayload} submit={onSubmit} payload={payload} />
      <Home users={users} loading={loading} onDelete={onDelete} />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
