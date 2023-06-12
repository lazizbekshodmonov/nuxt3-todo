import { defineStore } from 'pinia'
import { NewProject, Project } from '~/models'
import { handleGetProjects, handleAddProject, handleDeleteProject, handleEditProject} from '~/services'
export const useProjectsStore = defineStore('Projects', () => {
    const projects = ref<Project[]>([])
    async function saveProjects(){
        const response = await handleGetProjects()
        projects.value = response
    }
    async function addProject(payload: NewProject): Promise<number>{
        const response = await handleAddProject(payload)
        if(response.status == 201){
            projects.value.push(response.new_project)
        }
        return response?.status
    }
    async function deleteProject(id: number){
        const response = await handleDeleteProject(id)
        if(response.status == 204){
            projects.value = projects.value?.filter(item => item.upid != id)
        }
    }
    async function updateProject(payload: string, id: number): Promise<number>{
        const response = await handleEditProject(payload, id)
        if(response.status == 200){
            projects.value = projects.value?.map((item) => {
                if(item.upid == id){
                    item = response.project
                }
                return item
            })
        }
        return response.status
    }
    
    return {
        projects,
        addProject,
        saveProjects,
        deleteProject,
        updateProject
    }
})


