class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
    insert(val) {
      if(val < this.val && !this.left) {
        this.left = new Node(val);
      }
      else if(val < this.val && this.left) {
        this.left.insert(val)
      }
      else if(val > this.val && !this.right) {
        this.right = new Node(val)
      } 
      else if(val > this.val && this.right) {
        this.right.insert(val)
      }
    }
    search(element){   
      if(this.val === element) {
        return true
      } else if(this.val > element && this.left){
        return this.left.search(element)
      } else if(this.val < element && this.right) {
        return this.right.search(element)
      }
      return false
    }
  }
  let bst = new Node(10);
  bst.insert(9)
  bst.insert(6)
  console.log(bst)
  console.log(bst.search(9))

//  Inorder function

function inOrder(root){
    root.left && inOrder(root.left)
    console.log(root.val);
    root.right && inOrder(root.right);
}