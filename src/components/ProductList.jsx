import { Link } from "react-router";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "/product",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "/product",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "/product",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "/product",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75",
    href: "/product",
    imageSrc:
      "https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  // More products...
];

export default function ProductList() {
  return (
    <div>
      <h2 className="sr-only">Products</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Link key={product.id} to={product.href} className="group">
            <img
              href={product.href}
              alt={product.imageAlt}
              src={product.imageSrc}
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
            />
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <div className="flex items-center justify-between">
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
              <span className="text-[12px] text-gray-700 pr-1">Show Details</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
