const { LinkNode } = require('./LinkNode');

class LinkedListUtils {
    /**
     * Take in an array of values and return the linkedlist
     *
     * @param {*} nodes - array of values
     */
    static generateNodes(nodes) {
        let head = new LinkNode();
        let currPointer = head;

        for (const node of nodes) {
            currPointer.next = new LinkNode(node);
            currPointer = currPointer.next;
        }

        return head.next;
    }

    /**
     * Convert a given linkedlist into a visualization string
     *
     * @param {*} linkedlist
     */
    static visualizeNodes(linkedlist) {
        let visualizeString = '';

        while (linkedlist !== null) {
            visualizeString += `${linkedlist.val} -> `;

            linkedlist = linkedlist.next;
        }

        console.log(`${visualizeString}null`);
    }
}

module.exports = {
    LinkedListUtils,
};
