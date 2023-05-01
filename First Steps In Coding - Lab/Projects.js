function projects()
{
    let name = "George";
    let numberOfProjects = 4;
    let hoursFor1Project = 3;
    let hoursRequired = numberOfProjects * hoursFor1Project;

console.log(`The architect ${name} will need ${hoursRequired} hours to complete ${numberOfProjects} projects!`)

}

projects();

//judge
function projectsCreation(input) {
    let name = String(input[0]);
    let numberOfProjects = Number(input[1]);
    let hours = numberOfProjects * 3;

console.log(`The architect ${name} will need ${hours} hours to complete ${numberOfProjects} project/s.`)

}
