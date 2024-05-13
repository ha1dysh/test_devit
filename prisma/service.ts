import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function countAllProducts() {
	const res = await prisma.productToStock.findMany();
	const productCount = res.reduce((acc, cur) => acc + cur.productOnStock, 0);
	return productCount;
}

async function countAllProductsOnStock(uuid: string) {
	const res = await prisma.productToStock.findMany({
		where: { stockUuid: uuid },
	});
	const productOnStock = res.reduce((acc, cur) => acc + cur.productOnStock, 0);
	return productOnStock;
}

async function countProduct(sku: string) {
	const res = await prisma.productToStock.findMany({
		where: { productSku: sku },
	});
	const productOnStock = res.reduce((acc, cur) => acc + cur.productOnStock, 0);
	return productOnStock;
}

async function countProductOnStock(uuid: string, sku: string) {
	const res = await prisma.productToStock.findMany({
		where: { productSku: sku, stockUuid: uuid },
	});
	const productOnStock = res.reduce((acc, cur) => acc + cur.productOnStock, 0);
	return productOnStock;
}

async function countProductByCategory(slug: string) {
	const res = await prisma.productToStock.aggregate({
		where: { Product: { Categories: { every: { slug } } } },
		_sum: {
			productOnStock: true,
		},
	});
	return res;
}

async function countProductOnStockByCategory(uuid: string, slug: string) {
	const res = await prisma.productToStock.aggregate({
		where: { Product: { Categories: { every: { slug } } }, stockUuid: uuid },
		_sum: {
			productOnStock: true,
		},
	});
	return res;
}
