class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left == null) {			
			this.left = node;
			node.parent = this;
		}
		else if(this.left != null && this.right == null) {			
			this.right = node;
			node.parent = this;			
		}
	}

	removeChild(node) {
		if (this.left == node) {      
			this.left = null;
			node.parent = null;
		} 
		else if (this.right == node) {      
			this.right = null;
			node.parent = null;
    } else {
      throw new Error("not a child of this node");
    }
	}

	remove() {
		if (this.parent != null) {
			this.parent.removeChild(this);
		}		
	}

	swapWithParent() {
		if (this.parent != null) {
			let p = this.parent;
			let pp = this.parent.parent;
			this.parent.parent = this;
			this.parent = pp;
			if (p.left != null && p.right != null) {
				if (this == p.left) {
					p.right.parent = this;
					this.right = p.right;
					p.left = this.left;
					this.left = p;									
				}		
				if (this == p.right) {
					p.left.parent = this;
					this.left= p.left;
					p.right = this.right;
					this.right = p;					
				}				
			}
			else if (p.left != null) {
				if (pp != null) {
					if (p == pp.left) {
						pp.left = this;
					}	
				}
				if (pp != null) {
					if (p == pp.right) {
						pp.right = this;
					}	
				}	
			}
		}		
	}
}

module.exports = Node;
