import { Project } from "~/models";
import { user_api } from "./axios";
import { toast } from 'vue3-toastify';

export async function handleGetProjects(): Promise<Project[]> {
    try{
        const response = await user_api.get('/api-v1/projects/')

        return response.data
    }catch(error){
        throw error
    }
}
export async function handleAddProject(payload: {name: string}): Promise<{new_project: Project, status: number}>{
    try{
        const response = await user_api.post('/api-v1/projects/', payload)
        toast.success(`A new project has been added!`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_RIGHT,
          })
        return {
            new_project: response.data,
            status: response.status
        }
    }catch(error){
        throw error
    }

}

export async function handleDeleteProject(id: number): Promise<{status: number}>{
    try{
        const response = await user_api.delete(`/api-v1/projects/${id}/`)
        toast.success(`The project has been deleted!`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_RIGHT,
          })
        return {
            status: response.status
        }
    }catch(error){

        throw error
    }
}
export async function handleEditProject(projectname: string, id: number){
    try{
        const response = await user_api.put(`/api-v1/projects/${id}/`, {name: projectname})
        toast.success(`The project has been edited!`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_RIGHT,
          })
        return {
            project: response.data,
            status: response.status
        }
    }catch(error){
        throw error
    }
}