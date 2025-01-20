const objects = [
    {
        name:'Greek Salad',
        price:'12.99',
        description:'The greek salad of crispy lettuce, peppers, olives, and feta cheese, garnished with garlic and rosemary croutons.',
        img:require("./images/greek salad1.jpg")
    },
    {
        name:'Bruchetta',
        price:'9.99',
        description:'Balsamic Bruchetta is an Itallian dish that is made from grilled bread topped with garlic, olive oil, and salt.',
        img:require("./images/bruchetta1.jpg")
    },
    {
        name:'Lemon Dessert',
        price:'9.99',
        description:'Sweet and tangy delight made with real lemon juice and zest. Every last ingredient has been sourced and is authentic as can be imagined.',
        img:require("./images/lemon dessert1.jpg")
    }
]
export function Menu({name, price, description, img}){
    return (
        <section className='Menu'>
            <img className='MenuImg' src={img} alt={`A close up of the little lemon ${name}`}/>
            <article>
                <section>
                    <h3>{name}</h3>
                    <h4>${price}</h4>
                </section>
                <section>
                    <p className='CardText'>{description}</p>
                </section>
                <section className='CardButtonLink'>
                    <button>
                        Order a Delivery
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                    </button>
                </section>
            </article>
        </section>
    )
}
export function MenuList(){
    return (
        <article className='MenuList'>
            {objects.map((props)=><Menu key={props.name}{...props}/>)}
        </article>
    )
}
export default MenuList;