# VC-HC-Reduction
This repository contains the code to perform a reduction from the Vertex Cover problem to the Hamiltonian Cycle problem. The reduction is implemented in TypeScript and can be run visually in the browser. The code is based on the book "Computers and Intractability: A Guide to the Theory of NP-Completeness" by Michael R. Garey and David S. Johnson.
## Authors
- [**Juan Rodríguez Suárez**](https://github.com/juanrguezsu7)
- [**Álvaro Fontenla León**](https://github.com/Alvaro2560)
- [**Igor Dragone**](https://github.com/IgorDragone)
- [**Sergio Pérez Lozano**](https://github.com/SergioPerezLoza)
## License
This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
## Build and Run
### Online
At the moment, the project is deployed in [Vercel](https://vc-hc-reduction.vercel.app).
### Local
To build and run the project, you need to have Node.js installed. You can download it [here](https://nodejs.org/).
1. Clone the repository:
```bash
git clone git@github.com:juanrguezsu7/VC-HC-Reduction.git
```
2. Install the dependencies:
```bash
npm install
```
3. Build the project:
```bash
npm run build
```
4. Run the project:
```bash
npm run dev
```
5. Open your browser and go to the URL specified in the console.
## Usage
1. Enter the constant of the Vertex Cover problem.
2. Add the nodes and edges of the graph.
3. Click on `Perform Reduction` to reduce the Vertex Cover problem to the Hamiltonian Cycle problem.