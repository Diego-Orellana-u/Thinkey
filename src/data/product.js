// if convincing text is false, a default one is used.
// Questions for the product faq must have a value used for the shadcn component in the format of item-1, item-2, etc.
export const productOne = {
  images: [
    {
      imageLink: "/familias-slime.webp",
      imageAlt: "Niños jugando con slime",
      imageWidth: 1280,
      imageHeight: 720,
      key: "image-product-slime-1",
    },
    {
      imageLink: "/familias-slime.webp",
      imageAlt: "Niños jugando con slime",
      imageWidth: 1280,
      imageHeight: 720,
      key: "image-product-slime-2",
    },
  ],
  productTitle: "Cumpleaños Cientifico Slime",
  hasDiscount: true,
  previousPrice: "$35.000",
  currentPrice: "$25.000",
  highlight: "Armado de evento gratis",
  productDesc:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
  convincingText: [
    {
      content: "Free 2-Day Shipping, Free Returns.",
      key: "convincing-text-one-product-slime",
    },
    {
      content: "100% Satisfaction Guarantee.",
      key: "convincing-text-two-product-slime",
    },
    {
      content: "3 Year Warranty",
      key: "convincing-text-three-product-slime",
    },
  ],
  questions: [
    {
      question: "Titulo pregunta 1",
      answer: "Respuesta a la pregunta 1",
      value: "item-1",
      key: "product-slime-question-1",
    },
    {
      question: "Titulo pregunta 2",
      answer: "Respuesta a la pregunta 2",
      value: "item-2",
      key: "product-slime-question-2",
    },
  ],
  key: "producto-slime",
};
