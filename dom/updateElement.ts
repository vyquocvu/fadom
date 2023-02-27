import { VElement } from '../types/vdom';
import render from './render';

function isChangedNode(oldNode: VElement, newNode: VElement) {
    return (
        typeof oldNode !== typeof newNode ||
        typeof oldNode === 'string' && oldNode !== newNode ||
        oldNode.tagName !== newNode.tagName
    );
}

function updateElement($parent: Element, newNode: VElement, oldNode: VElement) {
    if (!oldNode) {
        // If there is no oldNode, then create a new one
        const $newNode = render(newNode);
        $parent.appendChild($newNode);
    } else if (!newNode) {
        // If there is no newNode, then remove the old one
        $parent.removeChild($parent.firstChild as Node);
    } else if (isChangedNode(oldNode, newNode)) {
        // If the nodes are different, then replace the old one with the new one
        // This is the only case where we need to create a new node
        const $newNode = (typeof newNode === 'string') ? document.createTextNode(newNode) : render(newNode);
        if ($parent.nodeName === "#text") {
            $parent.replaceWith($newNode);
        } else {
            $parent.replaceChild($newNode, $parent.firstChild as Node);
        }
    } else if (newNode.tagName) {
        // If the nodes are the same, but they are elements, then update the attributes
        const newLength = newNode.children.length;
        const oldLength = oldNode.children.length;
        for (let i = 0; i < newLength || i < oldLength; i++) {
            // Update each child recursively
            updateElement(
                $parent.firstChild as HTMLElement,
                newNode.children[i] as VElement,
                oldNode.children[i] as VElement
            );
        }
    }
}

export default updateElement;