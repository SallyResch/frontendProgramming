let tables = document.querySelector(".tables");
for (let i = 1; i < 12; i++) {
    let table = document.createElement("div");
    table.className = "table";

    for (let j = 0; j < 12; j++) {
        let equation = document.createElement("p");
        equation.textContent = `${i} x ${j} = ${i * j}`;
        table.appendChild(equation);
    }
    tables.appendChild(table);
}

