# [Graphs](<https://en.wikipedia.org/wiki/Graph_(abstract_data_type)>)

In [computer science](https://en.wikipedia.org/wiki/Computer_science), a graph is an [**abstract data type**](https://en.wikipedia.org/wiki/Abstract_data_type) that is meant to implement the [undirected graph](<https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)>) and [directed graph](https://en.wikipedia.org/wiki/Directed_graph) concepts from the field of [graph theory](https://en.wikipedia.org/wiki/Graph_theory) within [mathematics](https://en.wikipedia.org/wiki/Mathematics).

A graph data structure consists of a finite (and possibly mutable) [set](<https://en.wikipedia.org/wiki/Set_(abstract_data_type)>) of **_vertices_** (also called **_nodes_** or **_points_**), together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph. These pairs are known as **_edges_** (also called **_links_** or **_lines_**), and for a directed graph are also known as **_edges_** but also sometimes **_arrows_** or **_arcs_**. The vertices may be part of the graph structure, or may be external entities represented by integer indices or [references](<https://en.wikipedia.org/wiki/Reference_(computer_science)>).

A graph data structure may also associate to each edge some edge value, such as a symbolic label or a numeric attribute (cost, capacity, length, etc.).

<img src="https://algorist.com/images/figures/graph-data-structures-L.png" width=400 align = right>

## Essential Graph Terminology

- [**Vertex**](<https://en.wikipedia.org/wiki/Vertex_(graph_theory)>) - a node
- [**Edge**](https://en.wikipedia.org/wiki/Glossary_of_graph_theory#edge) - connection between nodes
- [**Weighted/Unweighted**](<https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)#Weighted_graph>) - values assigned to distances between vertices
- [**Directed/Undirected**](https://en.wikipedia.org/wiki/Directed_graph) - directions assigned to distances between vertices

## Storing graphs

1. [**Adjacency List**](https://en.wikipedia.org/wiki/Adjacency_list)
   - PROs:
     - Can take up less space (in \*sparse graphs)
     - Faster to iterate over all edges
   - CONs:
     - Can be slower to lookup specific edges
2. [**Adjacency Matrix**](https://en.wikipedia.org/wiki/Adjacency_matrix)
   - PROs:
     - Faster to lookup specific edge
   - CONs:
     - Takes up more space (in \*sparse graphs)
     - Slower to iterate over all edges

<sub>\*the graph doesn't have too many edges between nodes</sub>
