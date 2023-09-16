import { useAllUsers } from "../Hooks/User/GET/useAllUser"
import { TableItemUsers } from "../components/TableItemUsers"
import { dataFake } from '../data/fakeData';
import imgProfile from '../assets/profile/TD4KJCSR3-UDKMR8LJW-b467e9e409d1-512.jpg';
import { Link } from "react-router-dom";




export const AllUsers = () => {
    const data = dataFake;
    return (
        <>
            <section>
                <article>
                    <div className="max-w-md border border-sky-500 rounded-full w-2/4 text-center text-lg m-auto">
                        <h1>Lista de usuarios</h1>
                    </div>
                    <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
                    {
                        data.map(user=>(
                            <div key={user.id} className="max-w-md grid grid-cols-2 gap-1 mx-4 my-7 border border-sky-950 rounded-xl md:max-w-lg lg:max-w-xl md:items-center">
                                <div className="p-2">
                                    <img className="border border-rose-900 rounded-full w-2/5 m-auto " src={imgProfile} alt="" />
                                </div>
                                <div className="p-2 text-center  ">
                                    <Link to='/user/1'>
                                        <p className="p-1 truncate ">
                                            {user.name}
                                        </p>
                                        <p className="p-1 truncate">
                                            {user.lastName}
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </article>
            </section>
            {/* <section className="max-w-sm border border-sky-500 rounded-full m-auto p-3 text-center text-2xl mb-10">
                Lista de usuarios
            </section>
            <article className="md:grid md:grid-cols-2 md:gap-3 md:m-5 lg:grid-cols-3">
                {
                    data.map(user=>(
                        <div className="w-full max-w-sm border border-sky-950 m-auto flex flex-row rounded-2xl p-2 my-6 md:max-w-lg md:w-full lg:max-w-xl " key={user.id}>
                            <div className="w-1/3 m-2 flex justify-center">
                                 <img className="border border-rose-900 rounded-full w-2/4 " src={imgProfile} alt="" />
                            </div>
                            <div className="w-2/3 text-center flex flex-col justify-center">
                                <Link to='/user/1'>
                                <p className="m-1">
                                    {user.name}
                                </p>
                                <p className="m-1">
                                    {user.lastName}
                                </p>
                                </Link>
                                
                            </div>
                        </div>
                    ))
                }
                
            </article> */}
        



        </>
    )
  // const users = dataFake
/* 
  const {allUsers} = useAllUsers({
    initialSkip:0,
    initialTake:10
})
return  (
    <>
        <table className="table is-fullwidth is-narrow">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {
                    allUsers.map((user)=>(
                      <TableItemUsers
                        {...user}
                        key={user.id}
                      />  
                    ))
                }
            </tbody>
            
        </table>
       
    </>
    
) */
}

