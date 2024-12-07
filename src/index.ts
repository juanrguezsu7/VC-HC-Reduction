// Ejemplo de uso

import { VCGraph } from './model/vcGraph';
import type { CoverTestingComponent } from './model/hcGraph';
import { HCGraph } from './model/hcGraph';
import type { Node } from './model/node';

// El parámetro K que introduciría el usuario.
const VC_K_PARAMETER: number = 2;

let vcGraph = new VCGraph(VC_K_PARAMETER);

// Añadir nodos que el usuario dibujaría en la interfaz.
vcGraph.addNode('u');
vcGraph.addNode('v');
vcGraph.addNode('w');
vcGraph.addNode('x');
// vcGraph.addNode('w'); // Lanzaría una excepción.

// Añadir aristas que el usuario dibujaría en la interfaz uniendo los nodos (el orden no importa).
// Si se añade una arista entre dos nodos que ya están unidos, se lanzará una excepción.
vcGraph.linkNodes('u', 'v');
vcGraph.linkNodes('v', 'w');
vcGraph.linkNodes('w', 'u');
vcGraph.linkNodes('w', 'x');
//vcGraph.linkNodes('x', 'w'); // Lanzaría una excepción.

// Reducir el grafo a un grafo HC.
let hcGraph: HCGraph = vcGraph.reduceToHC();

// Obtener los componentes de testeo de cobertura (el orden de los parámetros no importa).
// Son listas de nodos que tienen el método getSuccessors() para obtener los sucesores de un nodo y poder dibujar las aristas.
// El nombre de cada nodo es como el de los apuntes (los selectores son a1, a2, an... y los componentes de testeo de cobertura
//   son uv1, uv2, uv3, uv4, uv5, uv6, vu1, vu2...). El nombre del nodo se obtiene con el método getId().
// Este grafo internamente es dirigido (una arista por cada par de nodos) para que no tengas que estar pendiente de
//   si la arista va de uv1 a uv2 o de uv2 a uv1
//   (tan solo dibujar todos los sucesores de los nodos como aristas y ya está).
let uvCoverTestingComponent: CoverTestingComponent = hcGraph.getCoverTestingComponent('u', 'v');
let vwCoverTestingComponent: CoverTestingComponent = hcGraph.getCoverTestingComponent('v', 'w');
let wuCoverTestingComponent: CoverTestingComponent = hcGraph.getCoverTestingComponent('w', 'u');
let wxCoverTestingComponent: CoverTestingComponent = hcGraph.getCoverTestingComponent('w', 'x');
let xwCoverTestingComponent: CoverTestingComponent = hcGraph.getCoverTestingComponent('x', 'w'); // Igual al anterior.
// let yxCoverTestingComponent: CoverTestingComponent = hcGraph.getCoverTestingComponent('y', 'x'); // Lanzaría una excepción.

// Obtener los nodos selectores (K nodos) de nombre a1, a2, a3...
let selectorNodes: readonly Node[] = hcGraph.getSelectorNodes();

// Mostrar todos los nodos y sus sucesores (aristas) en la consola.
for (let coverTesting of hcGraph.getAllCoverTestingComponents()) {
  console.log(`Cover testing component of nodes ${coverTesting[0].getId()[0]} and ${coverTesting[0].getId()[1]}:`);
  console.log();
  for (let node of coverTesting) {
    console.log(`Node ${node.getId()} has successors: ${node.getSuccessors().map((other) => other.getId()).join(', ')}`);
  }
  console.log();
}

for (let selector of selectorNodes) {
  console.log(`Selector node ${selector.getId()} has successors: ${selector.getSuccessors().map((other) => other.getId()).join(', ')}`);
}
