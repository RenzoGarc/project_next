import { makePostRequest } from "@utils/api/api";
export async function getReport(itemss) {
  try {
    const body = {
      content:
        itemss.extra.tipo !== "D"
          ? `<body>
      <header>
        <h2>I.E.P. DIVINO MAESTRO</h2>
        <p>REGISTRO DE ASISTENCIA</p>
      </header>
  
      <div class="container">
        <div class="details">
          <p><b>Fecha: </b>{{fecha}}</p>
          <p><b>Año: </b>{{anno}}</p>
          <p><b>Directora: </b>{{directora}}</p>
        </div>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Hora de Marcación</th>
              <th>Tardanza (minutos)</th>
            </tr>
          </thead>
          <tbody>
          {{#each items}} 
            <tr> 
              <td> {{personal}} </td> 
              <td> {{hora}} </td> 
              <td> {{minutos_tardanza}} min</td>
            </tr> 
          {{/each}}
          </tbody>
        </table>
      </div>
    </body>`
          : `<body>
    <header>
      <h2>I.E.P. DIVINO MAESTRO</h2>
      <p>REGISTRO DE ASISTENCIA</p>
    </header>

    <div class="container">
      <div class="details">
        <p><b>Fecha: </b>{{fecha}}</p>
        <p><b>Año: </b>{{anno}}</p>
        <p><b>Directora: </b>{{directora}}</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Hora de Marcación</th>
            <th>Tardanza (minutos)</th>
            <th>Descuento(0.30 x min)</th>
          </tr>
        </thead>
        <tbody>
        {{#each items}} 
          <tr> 
            <td> {{personal}} </td> 
            <td> {{hora}} </td> 
            <td> {{minutos_tardanza}} min</td>
            <td> S/. {{descuento_profesores}}</td>
          </tr> 
        {{/each}}
        </tbody>
      </table>
    </div>
  </body>`,
      name: "PDFGOW6",
      data: {
        fecha: itemss.extra.fecha,
        directora: "GLORÍA ALARCÓN LEÓN",
        anno:
          itemss.extra.tipo == "D"
            ? "Reporte de Docentes"
            : itemss.extra.tipo + " de secundaria",
        items: itemss.data,
      },
      styles: `body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
      }
      header {
        background-color: #00374a;
        color: white;
        padding: 20px;
        text-align: center;
      }
      header h1 {
        margin: 0;
        font-size: 32px;
      }
      .container {
        max-width: 800px;
        margin: 20px auto;
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
      }

      table th,
      table td {
        border: 1px solid #ccc;
        padding: 10px;
        text-align: left;
      }

      table th {
        background-color: #00374a;
        color: white;
      }

      .details {
        margin-bottom: 20px;
      }

      .details p {
        margin: 5px 0;
      }`,
      logic: "",
      orientation: "A4",
      format: "portrait",
      border: "0mm",
      // header: {
      //   height: "2.5cm",
      //   contents:
      //     "<div style='text-align: center;'>Author: I.E.P. DIVINO MAESTRO</div>",
      // },
      // footer: {
      //   height: "2.5cm",
      //   contents: {
      //     first: "INFORME GENERAL DE LOBITOMASTER",
      //     2: "Segunda page",
      //     3: "Tercera page",
      //     default:
      //       "<span style='color: #444;'>{{page}}</span>/<span>{{pages}}</span>",
      //     last: "Ultima Pagina",
      //   },
      // },
    };
    const data = await makePostRequest("/reporte/pdf", body);
    return data;
  } catch (e) {
    throw e;
  }
}

export async function getReportWithId(requestData) {
  try {
    let data = await fetch(`/api/report`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    }).then(async (res) => {
      if (!res.ok) throw new Error("Error en la petición");
      return await res.json();
    });

    return data;
  } catch (e) {
    throw e;
  }
}
