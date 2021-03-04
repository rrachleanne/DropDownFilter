
//Import the Types from App Component
//Types
import { UserType } from "./PersonList";


//will take in two props the item itself
type Props = {
  user: UserType;
//   handleAddToCart: (clickedItem: UserType) => void;
};

// const User: React.FC<Props> = ({ user, handleAddToCart }) => (
const User: React.FC<Props> = ({ user }) => (
  <div>
    <div>
      <td>{user.name}</td>
      <td>{user.email}</td>
      {/* <p>{user.id}</p>
      <p>{user.gender}</p> */}
    </div>

  </div>
);

export default User;
