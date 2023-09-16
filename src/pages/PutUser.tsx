import { useNavigate, useParams } from "react-router-dom";
import { useOneUser } from "../Hooks/User/GET/useOneUser";
import { usePutUser } from "../Hooks/User/PUT/putUser";
import { useForm } from "../Hooks/useForm";
import { UpdateUserDTO } from "../interfaces/DTO/updateUserDTO";
export interface RouteParams {
    id:string;
    [key: string]: string | undefined;
  
  }

type FormEvent = React.FormEvent<HTMLFormElement>;

export const PutUser = () => {
    const {id} = useParams<RouteParams>()
    const {oneUser} = useOneUser(id)
    const {putUser} = usePutUser()
    // console.log({oneUser});

    
    
    
    // console.log({name,lastName});
    
    const {name,lastName,onChange} = useForm({
        name:'',
        lastName:''
    })
    
    const onSubmit = (event:FormEvent)=>{
        event.preventDefault();
        const nuevaData:UpdateUserDTO = {...oneUser,name,lastName}
        console.log({nuevaData});
        
        putUser(id,nuevaData)
        navigate('/user')
    }
    
    const navigate = useNavigate()
    
    return (
        <>
            <div className="max-w-8xl mx-auto px-4 ">
                <div className="border border-black">
                    adsasdasd
                </div>
            </div>
            <h1>EDITAR Usuario</h1>
            <form onSubmit={onSubmit}>
                <div className="field">
                    <label className="label">Name</label>
                        <div className="control">
                            <input type="text" name="name" className="input" onChange={({target})=> onChange(target.value,'name')} value={name} placeholder='name'/>
                        </div>
                    <label className="label">Last name</label>
                        <div className="control">
                            <input type="text" name="lastName" className="input" onChange={({target})=> onChange(target.value,'lastName')} placeholder='lastName'/>
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

