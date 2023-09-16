import { useParams } from "react-router-dom"
import { useOneUser } from "../Hooks/User/GET/useOneUser"
import imgProfile from '../assets/profile/TD4KJCSR3-UDKMR8LJW-b467e9e409d1-512.jpg'
export interface RouteParams {
    id:string;
    [key: string]: string | undefined;
  
  }

export const OneUser = () => {
    const {id} = useParams<RouteParams>()
    /* const {oneUser} = useOneUser(id) */
    return (
        <>{/* m-5 md:grid md:grid-cols-2 w-full */}
        {/*  m-5 md:max-w-3xl md:grid md:grid-cols-2 */}
            <section className="">
                <article className="max-w-md border border-sky-500 m-5 md:max-w-4xl md:grid md:grid-cols-2 lg:max-w-4xl lg:m-auto xl:max-w-6xl">
                        <div className="w-full">
                            <div className="my-5">
                                <img className="border border-rose-900 rounded-full w-4/6 m-auto lg:w-2/4" src={imgProfile} alt="" />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="text-center m-4 p-2 text-2xl">
                                <h2>Datos personales</h2>
                            </div>
                            <div className="p-2">
                                <div className="grid grid-flow-col justify-between mx-5 text-lg lg:m-4">
                                    <span className="truncate">Nombre:</span>
                                    <span className="truncate">asdasdasdasdasdasdasdasdnnnnnnnnnnn</span>
                                </div>  
                                <div className="grid grid-flow-col justify-between mx-5 text-lg lg:m-4">
                                    <span className="truncate">Apellido:</span>
                                    <span className="truncate">Aviles</span>
                                </div>
                                <div className="grid grid-flow-col justify-between mx-5 text-lg lg:m-4">
                                    <span className="truncate">Email:</span>
                                    <span className="truncate">undefined</span>
                                </div>
                            </div>
                            <div className="text-center m-4 p-2 text-xl">
                                <button className="border border-sky-500 rounded-full p-3">Editar datos</button>
                            </div>
                        </div>
                </article>
                
                <div className="md:grid md:grid-cols-2 lg:max-w-4xl lg:full lg:m-auto xl:max-w-6xl">

                    <article className="border border-sky-500 max-w-md m-5 md:max-w-3xl md:grid md:grid-cols-1 lg:ml-0">
                        <div className="text-center m-4 p-2 text-2xl">
                            <h2>Reuniones con superiores</h2>
                        </div>
                        <div>
                            <div className="grid grid-flow-col p-2 m-3 justify-between ">
                                <span className="p-2 truncate w-full">Reu One on one kevin|oz </span>
                                <button className="border border-sky-300 rounded-full p-2 ">Ver detalles</button>
                            </div>
                            <div className="grid grid-flow-col p-2 m-3 justify-between">
                                <span className="p-2 truncate w-full">Reu One on one kevin|oz 112313123 </span>
                                <button className="border border-sky-300 rounded-full p-2">Ver detalles</button>
                            </div>
                        
                        </div>
                    </article>
                    <article className="border border-sky-500 max-w-md m-5 md:max-w-3xl md:grid md:grid-cols-1 lg:mr-0">
                        <div className="text-center m-4 p-2 text-2xl">
                            <h2>Reuniones con subalternos</h2>
                        </div>
                        <div>
                            <div className="grid grid-flow-col p-2 m-3 justify-between ">
                                <span className="p-2 truncate w-full">Reu One on one kevin|oz </span>
                                <button className="border border-sky-300 rounded-full p-2 ">Ver detalles</button>
                            </div>
                            <div className="grid grid-flow-col p-2 m-3 justify-between">
                                <span className="p-2 truncate w-full">Reu One on one kevin|oz 112313123 </span>
                                <button className="border border-sky-300 rounded-full p-2">Ver detalles</button>
                            </div>
                            <div className="grid grid-flow-col p-2 m-3 justify-between">
                                <span className="p-2 truncate w-full">One on one</span>
                                <button className="border border-sky-300 rounded-full p-2">Ver detalles</button>
                            </div>
                        </div>

                    </article>
                    <article className="border border-sky-500 max-w-md m-5 md:col-span-1 md:max-w-3xl md:grid md:grid-cols-1 lg:ml-0">
                        <div className="text-center m-4 p-2 text-2xl">
                            <h2>Tus Accionables</h2>
                        </div>
                        <div>
                            <div className="grid grid-flow-col p-2 m-3 justify-between ">
                                <span className="p-2 truncate w-full">Reu One on one kevin|oz </span>
                                <button className="border border-sky-300 rounded-full p-2 ">Ver detalles</button>
                            </div>
                            <div className="grid grid-flow-col p-2 m-3 justify-between">
                                <span className="p-2 truncate w-full">Reu One on one kevin|oz 112313123 </span>
                                <button className="border border-sky-300 rounded-full p-2">Ver detalles</button>
                            </div>
                            <div className="grid grid-flow-col p-2 m-3 justify-between">
                                <span className="p-2 truncate w-full">One on one</span>
                                <button className="border border-sky-300 rounded-full p-2">Ver detalles</button>
                            </div>
                        </div>

                    </article>
                </div>
            </section>
            {/* <section className="flex flex-col items-center">
                <article className="border border-sky-500 max-w-md w-2/3  flex flex-col items-center my-14 md:flex-row md:w-full md:max-w-xl">    
                <div className="w-2/3 m-2 flex p-4 md:w-2/5">
                    <img className="border border-rose-900 rounded-full" src={imgProfile} alt="" />
                </div>
                <div className="text-center flex flex-col">
                    <h1 className="m-5">Datos personales</h1>
                    <span className="p-2 m-2">
                        kevin
                    </span>
                    <span className="p-2 m-2">
                        aviles
                    </span>
                    <span className="p-2 m-2">
                        undefined
                    </span>
                </div>
                </article>

                <article className="border border-sky-500 max-w-md w-2/3 my-12">
                    <div className="text-center flex flex-col">
                        <span className="m-2">Reuniones con Superiores</span>
                        <div className="flex flex-col">
                            <div className="flex justify-between">
                                <p className="m-2 p-1">Primer One on On</p> <button className="border border-sky-300 rounded-full p-1 m-2">Ver detalle</button>
                            </div>
                            <div className="flex justify-between">
                                <p className="m-2 p-1">Primer One on On</p> <button className="border border-sky-300 rounded-full p-1 m-2">Ver detalle</button>
                            </div>
                            <div className="flex justify-between">
                                <p className="m-2 p-1">Primer One on On</p> <button className="border border-sky-300 rounded-full p-1 m-2">Ver detalle</button>
                            </div>
                        </div>
                        
                    </div>

                </article>

                <article className="border border-sky-500 max-w-md w-2/3 my-12">
                    <div className="text-center flex flex-col">
                        <span className="m-2">Reuniones con Subalternos</span>
                        <div className="flex flex-col">
                            <div className="flex justify-between">
                                <p className="m-2 p-1">Primer One on On</p> <button className="border border-sky-300 rounded-full p-1 m-2">Ver detalle</button>
                            </div>
                            <div className="flex justify-between">
                                <p className="m-2 p-1">Primer One on On</p> <button className="border border-sky-300 rounded-full p-1 m-2">Ver detalle</button>
                            </div>
                            <div className="flex justify-between">
                                <p className="m-2 p-1">Primer One on On</p> <button className="border border-sky-300 rounded-full p-1 m-2">Ver detalle</button>
                            </div>
                        </div>
                        
                    </div>

                </article>
                <article className="border border-sky-500 max-w-md w-2/3 my-12">
                    <div className="text-center flex flex-col">
                        <span className="m-2">Accionables</span>
                        <div className="flex flex-col">
                            <div className="flex justify-between">
                            <p className="m-2 p-1 grow text-left w-[55%] ">Chequear subalternos</p> <button className="border border-sky-300 rounded-full p-1 m-2 grow-0">Ver detalle</button>
                            </div>
                            <div className="flex justify-between">
                            <p className="m-2 p-1 grow text-left  w-[55%]">Reportar</p> <button className="border border-sky-300 rounded-full p-1 m-2 grow-0">Ver detalle</button>
                            </div>
                            <div className="flex justify-between">
                                <p className="m-2 p-1 grow text-left w-[55%]">Nose</p> <button className="border border-sky-300 rounded-full p-1 m-2 grow-0">Ver detalle</button>
                            </div>
                        </div>
                        
                    </div>

                </article>
            </section> */}
            {/* <h1>Usuario con el id {oneUser?.id}</h1>
            <ul>
                <li>
                    id: {oneUser?.id}
                </li>
                <li>
                    name: {oneUser?.name}
                </li>
                <li>
                    lastname: {oneUser?.lastName}
                </li>
            </ul> */}
        </>
    )
}

