import DoughnutChart from "../../components/DoughnutChart/DoughnutChart";
import TableDeftault, { IColumn, IData } from "../../components/Table/Table";
import { Container, Content, DivRow, Loading, Subtitle, Title } from "./styles";

const col: IColumn[] = [
  { campo: "id", label: " " },
  { campo: "first_name", label: "First Name" },
  { campo: "last_name", label: "Last Name" },
  { campo: "participation", label: "Participation" },
];

interface IProps {
  users: IData[];
  loading: boolean;
}

const Home: React.FC<IProps> = ({ users, loading }) => {
  const chartLabels = users.map(
    (item) => `${item.first_name} ${item.last_name}`
  );
  const chartData = users.map((item) => item.participation);

  return (
    <Container>
      <Content>
        <Title>DATA</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Subtitle>
        {loading ? (
          <Loading />
        ) : (
          <DivRow>
            <TableDeftault columns={col} data={users} />
            <DoughnutChart data={chartData} labels={chartLabels} />
          </DivRow>
        )}
      </Content>
    </Container>
  );
};

export default Home;
