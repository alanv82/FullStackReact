import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/posts/'


const CompShowPosts = () => {
    
    const [posts, setPost] = useState([])
    useEffect( ()=>{
        getPosts()
    },[])

    //procedimineto para mostrar todos los posts
    const getPosts = async () => {
        const res = await axios.get(URI)
        setPost(res.data)
    }

    //procedimineto para eliminar un post
    const deletePost = async (id) => {
       await axios.delete(`${URI}${id}`)
       getPosts()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'>Postear <i className="fas fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Titulo</th>
                                <th>Contenido</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            { posts.map ( (post) => (
                                <tr key={ post.id}>
                                    <td> { post.tittle } </td>
                                    <td> { post.content } </td>
                                    <td>
                                        <Link to={`/edit/${post.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={ ()=>deletePost(post.id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )

}

export default CompShowPosts