const Controller = {
  search: (ev) => {
    ev.preventDefault();
    const form = document.getElementById("form");
    const data = Object.fromEntries(new FormData(form));
    const response = fetch(`/search?q=${data.query}`).then((response) => {
      response.json().then((results) => {
        Controller.updateTable(results);
      });
    });
  },

  updateTable: (results) => {
    const table = document.getElementById("table-body");
    const tableHead = document.getElementById("table-head");
    const rows = [];
    for (let result of results) {
      rows.push(`<tr>${result}<tr/><tr><hr/><tr/>`);
    }
    tableHead.innerHTML = `<th>Search Results : ${results.length} found </th>`;
    table.innerHTML = rows.join("");
  },
};

const form = document.getElementById("form");
form.addEventListener("submit", Controller.search);
