import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableContainer,
} from "@mui/material";

function App() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell variant="head">Id</TableCell>
            <TableCell variant="head">Nome</TableCell>
            <TableCell variant="head">CPF</TableCell>
            <TableCell variant="head">email</TableCell>
            <TableCell variant="head">Empresa</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataTable.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.nome}</TableCell>
              <TableCell>{row.cpf}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.empresa}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;

const dataTable = [
  {
    id: 1,
    nome: "Dannie de Guise",
    cpf: "6830079136",
    email: "dde0@zdnet.com",
    empresa: "Gabvine",
  },
  {
    id: 2,
    nome: "Estelle Guillard",
    cpf: "1389253244",
    email: "eguillard1@arstechnica.com",
    empresa: "Youfeed",
  },
  {
    id: 3,
    nome: "Greta Iacofo",
    cpf: "4457706310",
    email: "giacofo2@walmart.com",
    empresa: "Thoughtbeat",
  },
  {
    id: 4,
    nome: "Corny Cassedy",
    cpf: "9816680572",
    email: "ccassedy3@domainmarket.com",
    empresa: "Gigashots",
  },
  {
    id: 5,
    nome: "Carolus McLice",
    cpf: "2192018886",
    email: "cmclice4@51.la",
    empresa: "Divape",
  },
  {
    id: 6,
    nome: "Darda White",
    cpf: "8954101739",
    email: "dwhite5@google.pl",
    empresa: "Browsebug",
  },
  {
    id: 7,
    nome: "Tucker Maywood",
    cpf: "1008058432",
    email: "tmaywood6@google.ru",
    empresa: "Edgeclub",
  },
  {
    id: 8,
    nome: "Kelly Merigeau",
    cpf: "0138890196",
    email: "kmerigeau7@google.ru",
    empresa: "Browsezoom",
  },
  {
    id: 9,
    nome: "Gracia Proudman",
    cpf: "9366380379",
    email: "gproudman8@opensource.org",
    empresa: "Aimbu",
  },
  {
    id: 10,
    nome: "Alisa Parren",
    cpf: "4248905418",
    email: "aparren9@mapquest.com",
    empresa: "Dazzlesphere",
  },
];
