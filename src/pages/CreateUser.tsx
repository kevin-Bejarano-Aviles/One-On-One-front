import { useNavigate } from "react-router-dom";
import { useAddUser } from "../Hooks/User/POST/postUser";
import { useForm } from "../Hooks/useForm";
type FormEvent = React.FormEvent<HTMLFormElement>;


export const CreateUser = () => {
    const navigate = useNavigate()
    const {addUser} = useAddUser()
    const {name,lastname,onChange} = useForm({
        name:'',
        lastname:''
    })
    console.log({name,lastname});
    
    const onSubmit = async(event:FormEvent)=>{
        event.preventDefault();
        await addUser(name,lastname)
        navigate('/user')
    }
    return (
        <>
            <h1>Crear Usuario</h1>
            <form onSubmit={onSubmit}>
                <div className="field">
                    <label className="label">Name</label>
                        <div className="control">
                            <input type="text" name="name" className="input" onChange={({target})=> onChange(target.value,'name')} value={name} placeholder='name'/>
                        </div>
                    <label className="label">Last name</label>
                        <div className="control">
                            <input type="text" name="lastname" className="input" onChange={({target})=> onChange(target.value,'lastname')} placeholder='lastname'/>
                        </div>
                </div>
                <div className="is-flex is-justify-content-space-between">
                    <button className="button is-success" type="submit">Crear</button>
                    <button className="button is-danger" type="reset">Cancelar</button>
                </div>
            </form>
        </>
    )    
}

