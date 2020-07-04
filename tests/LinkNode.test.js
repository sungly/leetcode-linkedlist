const { LinkNode } = require('../LinkNode');

describe('LinkNode class', () => {
    it('should generate a node with null value and null next when not value is given', () => {
        const node = new LinkNode();

        expect(node.val).toBe(null);
        expect(node.next).toBe(null);
    });

    it('should generate a node with a given value', () => {
        const node = new LinkNode(1);

        expect(node.val).toBe(1);
        expect(node.next).toBe(null);
    });

    it('should point to node 2 if n1.next = n2', () => {
        let node1 = new LinkNode(1);
        const node2 = new LinkNode(2);

        node1.next = node2;

        node1 = node1.next;

        expect(node1.val).toBe(2);
        expect(node1.next).toBe(null);
    });
});
