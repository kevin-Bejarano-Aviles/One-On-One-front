import { Link, useNavigate } from "react-router-dom";
import { useDeleteUser } from "../Hooks/User/DELETE/useDeleteUser";
type FormEvent = React.FormEvent<HTMLFormElement>;

interface PropertyUser{
    id:              string,
    name:            string;
    lastName:        string;
}


export const TableItemUsers = ({id,name,lastName}:PropertyUser) => {
  const navigate = useNavigate()
  const {deleteUser} = useDeleteUser()
  const userDelete = (event:FormEvent)=>{
      // event.preventDefault();
      deleteUser(id)
      // navigate(`/user`);  
  }
  
  const goToUpdate = ()=>{
    navigate(`/user/${id}/update`);
  }
  return (
        <tr>
            <th>{id}</th>
            <td>
              <Link to={`/user/${id}`}>
                {name}
              </Link>
              </td>
            <td>{lastName}</td>
            <td><button onClick={goToUpdate} className="button is-success">Editar</button></td>
            <td><form onSubmit={userDelete}>
            <button className="button is-danger" type="submit">Eliminar</button>
              </form></td>
        </tr>
        
  )
}


