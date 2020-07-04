const { LinkedListUtils } = require('../LinkedListUtils');

describe('LinkedListUtils class', () => {
    describe('generate nodes', () => {
        it('should generate a linkedlist given a list of values', () => {
            const nodes = [1, 2, 3, 4];
            let linkedlist = LinkedListUtils.generateNodes(nodes);

            for (const node of nodes) {
                expect(linkedlist.val).toBe(node);

                linkedlist = linkedlist.next;
            }
        });

        it('should return null if given an empty list of nodes', () => {
            const nodes = [];
            const linkedlist = LinkedListUtils.generateNodes(nodes);

            expect(linkedlist).toBe(null);
        });
    });

    describe('visualize nodes', () => {
        it('should return the correct visualization if given a valid linkedlist', () => {
            const nodes = [1, 2];
            const linkedlist = LinkedListUtils.generateNodes(nodes);
            const visualizeNodeString = LinkedListUtils.visualizeNodes(
                linkedlist
            );

            expect(visualizeNodeString).toEqual('1 -> 2 -> null');
        });

        it('should return "null" if given a null linkedlist', () => {
            const nodes = [];
            const linkedlist = LinkedListUtils.generateNodes(nodes);
            const visualizeNodeString = LinkedListUtils.visualizeNodes(
                linkedlist
            );

            expect(visualizeNodeString).toEqual('null');
        });
    });
});
