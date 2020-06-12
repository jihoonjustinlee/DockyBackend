const express = require('express')
const router = express.Router()
const Project = require('../models/project')
const Task = require('../models/task')

router.get('/projects', async (req, res)=>{
  try{
    const projects = await Project.find({})
    res.send(projects)
  } catch(err){
    res.status(400).send(err)
  }
})

router.post('/project', async (req, res)=>{
  try{
    const newProject = new Project(req.body)
    await newProject.save()
    res.send(newProject)
  } catch(err){
    res.status(400).send(err)
  }
})

router.put('/project/:id/add_task', async (req, res)=>{
  try{
    await Project.findById(req.params.id, async (err, project)=>{
      try{
        const newTask = new Task(req.body)
        project.tasks.push(newTask)
        await project.save()
        res.send(newTask)
      } catch(err){
        res.status(400).send(err)
      }
    })
  } catch(err){
    res.status(400).send(err)
  }
})

router.put('/project/:project_id/task/:task_id/add_assignee', async (req, res)=>{
  try{
    await Project.findById(req.params.project_id, async (err, project)=>{
      try{
        const task = project.tasks.find(task=>task._id.toString() === req.params.task_id)
        task.assigned_to = req.body
        await project.save()
        res.send(project)
      } catch(err){
        res.status(400).send(err)
      }
    })
  } catch(err){
    res.status(400).send(err)
  }
})

router.put('/project/:project_id/task/:task_id/change_state', async (req, res)=>{
  try{
    await Project.findById(req.params.project_id, async (err, project)=>{
      try{
        const task = project.tasks.find(task=>task._id.toString() === req.params.task_id)
        task.state = req.body.state
        await project.save()
        res.send(project)
      }catch(err){
        res.status(400).send(err)
      }
    })
  }catch(err){
    res.status(400).send(err)
  }
})

router.delete('/project/:id', async (req, res)=>{
  try{
    await Project.findByIdAndDelete(req.params.id)
    res.send('deleted')
  } catch(err){
    res.status(400).send(err)
  }
})

router.delete('/project/:project_id/task/:task_id/assignee/:assignee_id/remove_assignee', async (req, res)=> {
  try{
    await Project.findById(req.params.project_id, async (err, project)=>{
      const task = project.tasks.find(task=>task._id.toString() === req.params.task_id)
      task.assigned_to = task.assigned_to.filter(assignee=>assignee._id.toString() !== req.params.assignee_id)
      await project.save()
      res.send(project)
    }) 
  } catch(err){
    res.status(400).send(err)
  }
})

router.delete('/project/:project_id/task/:task_id/remove_task', async (req, res)=>{
  try{
    await Project.findById(req.params.project_id, async (err, project)=>{
      project.tasks = project.tasks.filter(task=>task._id.toString() !== req.params.task_id)
      await project.save()
      res.send(project)
    })
  } catch(err){
    res.status(400).send(err)
  }
})


module.exports = router