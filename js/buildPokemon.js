function buildPokemon(params) {
    let types = "Type(s): ";

    for (let i = 0; i < params.types.length; i++) {
        types += `
            <span class='pokemon-type ${params.types[i].type.name}'>${params.types[i].type.name}</span>
        `;
    }

    let insideContent = `
        <h2>${params.name}</h2>
        <div class='pokemon-info'>
            <img src='${params.image}' />
            <div>
                <p>Height: <span>${params.height}<span></p>
                <p>Weight: <span>${params.weight}</span></p>
                ${types}
            </div>
        </div>
        <div class='pokemon-stats'>
            <h2>Stats</h2>
            <table>
                <thead>
                    <tr>
                        <th>Speed</th>
                        <th>Special-Defense</th>
                        <th>Special-Attack</th>
                        <th>Defense</th>
                        <th>Attack</th>
                        <th>HP</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${params.stats[0].base_stat}</td>
                        <td>${params.stats[1].base_stat}</td>
                        <td>${params.stats[2].base_stat}</td>
                        <td>${params.stats[3].base_stat}</td>
                        <td>${params.stats[4].base_stat}</td>
                        <td>${params.stats[5].base_stat}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <h2>Moves</h2>
            ${buildMoves()}
        </div>
        
    `;

    

    function buildMoves() {
        let content = "";
        
        for (let i = 0;i < params.attacks.length; i++) {
            // the flavor text will be loaded when the button is clicked
            // the function is in the index page since that is where the button
            // will be placed
            content += `
                <button onclick='getMoveDetails("${params.attacks[i].move.url}"); this.onclick=null' class='accordion'>${params.attacks[i].move.name}</button>
                <div class='panel'>
                    <div id='${params.attacks[i].move.name}' class='moves-content'></div>
                </div>
            `;
        }

        return content;
    }

    

    document.getElementById(params.containerId).innerHTML = insideContent;
}