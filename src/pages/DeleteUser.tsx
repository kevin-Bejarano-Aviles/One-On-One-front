
import { useDeleteUser } from "../Hooks/User/DELETE/useDeleteUser";


type FormEvent = React.FormEvent<HTMLFormElement>;

export const OneOnOneApp = () => {
    const {deleteUser} = useDeleteUser()
    // const navigate = useNavigate()
    const onSubmit = async (event:FormEvent)=>{
        event.preventDefault();
        await deleteUser('55a839c2-83ad-4970-a281-1530b402c357')
        // navigate('/user')
    }
    return (
        <>
            <h1>hola mundo</h1>
            <form onSubmit={onSubmit}>
                <button type="submit">
                    deletear user?
                </button>
            </form>
        </>
    )
}
