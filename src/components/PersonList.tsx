import { useQuery } from "react-query";
//components
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import User from "./User";


export type UserType = {
  id: number;
  name: string;
  email: string;
};

const getProducts = async (): Promise<UserType[]> =>
  await (await fetch("https://jsonplaceholder.typicode.com/users")).json();

export default function PersonList() {
  const { data, isLoading, error } = useQuery<UserType[]>("products", getProducts);

  console.log(data);

  if (isLoading) return <LinearProgress />;
  if (error) return <div> Something went wrong...</div>;
  return (
    <div>
      <Grid container spacing={3}>
        {data?.map(user => (
          <tr key={user.id}>
            <User user={user} />
          </tr>
        ))}
      </Grid>
    </div>
  );
}
