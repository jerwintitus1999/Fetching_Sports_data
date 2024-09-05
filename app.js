
const footBall = async()=>{
    // let history = document.getElementById("history")
    let year = document.getElementById("yearInput");
    let matchNo = document.getElementById("matchNoInput")
    let image1 = document.getElementById("image1")
    let teamName1 = document.getElementById("teamName1")
    let image2 = document.getElementById("image2")
    let teamName2 = document.getElementById("teamName2")

    let response = await fetch(`https://api.openligadb.de/getmatchdata/bl1/${year.value}/${matchNo.value}`)

    
    let data = await response.json()
    console.log(data);


    image1.setAttribute("src",data[0].team1.teamIconUrl)
    teamName1.innerHTML = data[0].team1.teamName


    image2.setAttribute("src",data[0].team2.teamIconUrl)
    teamName2.innerHTML = data[0].team2.teamName

    
    let table = document.getElementById("history")
    row = document.createElement("tr");
    cell1 = document.createElement("td")
    cell2 = document.createElement("td")
    cell3 = document.createElement("td")
    cell4 = document.createElement("td")

    div1 = document.createElement("div");
    div1.className = "team-1";
    div2 = document.createElement("div");
    div2.className = "team-2";

    logoImage1 = document.createElement("img")
    logoImage2 = document.createElement("img")

    name1 = document.createElement("p")
    name2 = document.createElement("p")


    logoImage1.setAttribute("src",data[0].team1.teamIconUrl)
    logoImage2.setAttribute("src",data[0].team2.teamIconUrl)

    name1.textContent = data[0].team1.teamName
    name2.textContent = data[0].team2.teamName

    

    div1.appendChild(logoImage1)
    div1.appendChild(name1)
    
    div2.appendChild(logoImage2)
    div2 .appendChild(name2)

    cell3.appendChild(div1)
    cell4.appendChild(div2)


    
    cell1.textContent = data[0].leagueSeason
    row.appendChild(cell1)
    cell2.textContent = data[0].group.groupOrderID
    row.appendChild(cell2)
    
    row.appendChild(cell3)
    
    row.appendChild(cell4)

    table.appendChild(row)



    console.log(data[0].team1.teamName);
}
