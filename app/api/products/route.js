import { imageConfigDefault } from "next/dist/shared/lib/image-config";

export async function GET() {
    const products = [

        {
            id: 1,
            name:"HydraGlow Moisturizer",
            price:39,
            image: "/pimg.jpg",
        },
        {
            id: 2,
            name:"PureBalance Cleanser",
            price:39,
            image: "/pimg2.jpg",
        },
        {
            id: 3,
            name:"RadiantC Serum",
            price:39,
            image: "/pimg3.jpg",
        },
        {
            id: 4,
            name:"AquaBoost Toner",
            price:39,
            image: "/pimg4.jpg",
        },
        {
            id: 5,
            name:"Nova Glow Facial Oil",
            price:39,
            image: "/pimg5.jpg",
        },
        {
            id: 6,
            name:"SkinShield SPF 50",
            price:39,
            image: "/pimg6.jpg",
        },
        {
            id: 7,
            name:"Renewal Night Cream",
            price:39,
            image: "/pimg7.jpg",
        },
        {
            id: 8,
            name:"CalmCare Mask",
            price:39,
            image: "/pimg8.jpg",
        },
        {
            id: 9,
            name:"ExfoBright Scrub",
            price:39,
            image: "/pimg9.jpg",
        },
        {
            id: 10,
            name:"LumiEye Cream",
            price:39,
            image: "/pimg10.jpg",
        },
    ]
    return Response.json(products)
}