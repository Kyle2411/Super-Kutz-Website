class hairProducts {
	/**
	*
	* @param {*} id Id used to find category.
	* @param {*} title 
	* @param {*} desc 
	* @param {*} price
	* @param {*} image 
	* @param {*} quantity 
	* @param {*} category 
	*/
        constructor(id, title, description, price, image, quantity, category) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.price = price;
            this.image = image;
            this.quantity = quantity;
            this.category = category;
        }
    }