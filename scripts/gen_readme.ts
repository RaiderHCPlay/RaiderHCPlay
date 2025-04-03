import icons from '../public/icons.json'
import projects from '../public/projects.json'
import media from '../public/media.json'
import { writeFile } from 'fs'

let projectsArray: string[] = []
let iconsArray: string[] = []
let mediaArray: string[] = []

projects.map((project) => {
    let subs: string[] = []
    if (project.sublinks) {
        project.sublinks.map((link) => {
            subs.push(`<a href="${link.url}" target="_blank">${link.name}</a>`)
        })
    }
    projectsArray.push(
        `<span>- <a href="${project.github}" target="_blank">\`${project.name}\`</a> ${project.description} ${subs.join(', ')}</span>`
    )
})

icons.map((icon) => {
    iconsArray.push(
        `<img src="${icon.icon}" alt="${icon.name}" width="40" height="40">`
    )
})

media.map((media) => {
    mediaArray.push(
        `<a href="${media.url}"><img src="${media.icon}" alt="${media.name} logo" width="40" height="40"></a>`
    )
})

writeFile(
    './README.md',
    `<!--AUTOGENERATED FILE-->
Hi! I'm RaiderHCPlay, a web developer.
***
### Projects

${projectsArray.join('\n\n')}
***
### Tech Stack

${iconsArray.join(' ')}
***
### Media

${mediaArray.join(' ')}
	`,
    (err) => {
        if (err) console.log(err)
    }
)
