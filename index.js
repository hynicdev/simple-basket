const productStore = [
	{
		id: 0,
		title: 'APPLE MacBook PRO 14',
		cost: 1500,
		image:
			'https://avatars.mds.yandex.net/get-mpic/5284145/img_id8961138913959762032.jpeg/orig',
	},
	{
		id: 1,
		title: 'APPLE iPhone 14 PRO MAX 128GB',
		cost: 1000,
		image: 'https://img.mvideo.ru/Pdb/30065558b.jpg',
	},
	{
		id: 2,
		title: 'AirPods PRO 2',
		cost: 300,
		image:
			'https://avatars.mds.yandex.net/get-mpic/7179065/img_id4030892675689895998.png/orig',
	},
]

let basketStore = []
const basket = document.getElementById('basket')
const productList = document.getElementById('productList')

const addToBasket = product => {
	basketStore.push(product)
	clearBasket()
	displayBasket()
}

const removeFromBasket = productId => {
	console.log(productId, basketStore)
	basketStore = basketStore.filter(item => item.id !== productId)
}
const clearBasket = _ => {
	while (basket.lastElementChild) {
		basket.removeChild(basket.lastElementChild)
	}
}

const displayBasket = _ => {
	basketStore.map(product => {
		const mainProductChild = document.createElement('div')
		mainProductChild.className = 'item'

		// Item image
		const itemProductImage = document.createElement('img')
		itemProductImage.className = 'item__image'
		itemProductImage.src = product.image

		// Item cost
		const itemProductCost = document.createElement('p')
		itemProductCost.className = 'item__cost'
		itemProductCost.innerText = `${product.cost}$`

		// Item title
		const itemProductTitle = document.createElement('p')
		itemProductTitle.className = 'item__title'
		itemProductTitle.innerText = product.title

		// Item remove button
		const itemButtonRemove = document.createElement('button')
		itemButtonRemove.className = 'item__remove'
		itemButtonRemove.textContent = 'Remove from basket'
		itemButtonRemove.addEventListener('click', _ => {
			removeFromBasket(product.id)
			clearBasket()
			displayBasket()
		})

		mainProductChild.appendChild(itemProductImage)
		mainProductChild.appendChild(itemProductTitle)
		mainProductChild.appendChild(itemProductCost)
		mainProductChild.appendChild(itemButtonRemove)

		basket.appendChild(mainProductChild)
	})
}

const fillProducts = _ => {
	productStore.map(product => {
		const mainProductChild = document.createElement('div')
		mainProductChild.className = 'products__product'

		// Product image
		const itemProductImage = document.createElement('img')
		itemProductImage.className = 'product__image'
		itemProductImage.src = product.image

		// Product cost
		const itemProductCost = document.createElement('p')
		itemProductCost.className = 'product__cost'
		itemProductCost.innerText = `${product.cost}$`

		// Product title
		const itemProductTitle = document.createElement('p')
		itemProductTitle.className = 'product__title'
		itemProductTitle.innerText = product.title

		// Product add button
		const itemProductAdd = document.createElement('button')
		itemProductAdd.className = 'product__add'
		itemProductAdd.textContent = 'Add to basket'
		itemProductAdd.addEventListener('click', _ => {
			addToBasket(product)
			clearBasket()
			displayBasket()
		})

		mainProductChild.appendChild(itemProductImage)
		mainProductChild.appendChild(itemProductTitle)
		mainProductChild.appendChild(itemProductCost)
		mainProductChild.appendChild(itemProductAdd)

		productList.appendChild(mainProductChild)
	})
}

const initBasket = _ => {
	displayBasket()
	fillProducts()
}

initBasket()
