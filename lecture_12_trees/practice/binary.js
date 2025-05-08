/**
* Конструктор для создания нового бинарного дерева поиска.
*/ 
class BinarySearchTree {
    constructor() {
      this.root = null;
      this.length = 0;
    }
 
    /**
     * Вставляет новый узел в дерево.
     * @param {number} value - Значение нового узла
     */
    insert(value) {
      this.root = this.#insertNodeRec(this.root, value);
    }
  
    /**
     * Рекурсивно вставляет новый узел в поддерево.
     * @param {Node} node - Текущий узел.
     * @param {number} value - Значение.
     * @returns {Node} - Новый корень поддерева.
     */
    #insertNodeRec(node, value) {
      if (node === null) {
        this.length++;
        return new Node(value);
      }
  
      if (value < node.getValue()) {
        node.setLeft(this.#insertNodeRec(node.getLeft(), value));
      } else if (value > node.getValue()) {
        node.setRight(this.#insertNodeRec(node.getRight(), value));
      }
  
      return node;
    }
  }